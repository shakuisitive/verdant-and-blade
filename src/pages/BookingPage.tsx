import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Navbar from "@/components/Navbar";
import { barbers, services, timeSlots } from "@/data/constants";
import { CalendarClock, ChevronLeft, ChevronRight, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

type VisitType = "in-shop" | "home";

const stepVariants = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -24 },
};

export default function BookingPage() {
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const barberParam = searchParams.get("barber");
  const serviceParam = searchParams.get("service");
  const state = location.state as { barberId?: string; serviceId?: string } | null;

  const initialBarberId = barberParam ?? state?.barberId ?? null;
  const initialServiceId = serviceParam ?? state?.serviceId ?? null;

  const skipBarberStep = Boolean(initialBarberId);

  const [step, setStep] = useState(1);
  const [selectedBarber, setSelectedBarber] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [visitType, setVisitType] = useState<VisitType>("in-shop");
  const [notes, setNotes] = useState("");
  const [promo, setPromo] = useState("");
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setSelectedBarber(initialBarberId);
    setSelectedService(initialServiceId);
    setSelectedDate(undefined);
    setSelectedTime(null);
    setVisitType("in-shop");
    setNotes("");
    setPromo("");
    setWaitlistEmail("");
    setSubmitted(false);
    setStep(initialBarberId ? 2 : 1);
  }, [initialBarberId, initialServiceId, location.key]);

  const minStep = skipBarberStep ? 2 : 1;
  const maxStep = 6;

  const selectedBarberData = useMemo(() => barbers.find((b) => b.id === selectedBarber), [selectedBarber]);
  const selectedServiceData = useMemo(() => services.find((s) => s.id === selectedService), [selectedService]);

  const fullyBooked = selectedDate?.getDay() === 0;

  const canProceed = useCallback(() => {
    switch (step) {
      case 1:
        return Boolean(selectedBarber);
      case 2:
        return Boolean(selectedService);
      case 3:
        if (!selectedDate) return false;
        if (fullyBooked) return waitlistEmail.includes("@");
        return Boolean(selectedTime);
      case 4:
        return true;
      case 5:
        return true;
      case 6:
        return true;
      default:
        return false;
    }
  }, [step, selectedBarber, selectedService, selectedDate, selectedTime, fullyBooked, waitlistEmail]);

  const goNext = () => {
    if (step < maxStep && canProceed()) setStep((s) => Math.min(s + 1, maxStep));
  };

  const goBack = () => {
    if (submitted) return;
    if (step > minStep) setStep((s) => Math.max(s - 1, minStep));
  };

  const handleConfirm = () => {
    setSubmitted(true);
  };

  const progressTotal = skipBarberStep ? 5 : 6;
  const progressIndex = skipBarberStep ? step - 2 : step - 1;

  const stepTitle = (() => {
    switch (step) {
      case 1:
        return "Choose your barber";
      case 2:
        return "Choose your service";
      case 3:
        return "Pick date & time";
      case 4:
        return "Where we meet";
      case 5:
        return "Notes & promo";
      case 6:
        return "Review & confirm";
      default:
        return "";
    }
  })();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-24 md:pt-28 pb-20 px-4 md:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between gap-4 mb-8">
            <Button variant="ghost" asChild className="font-body text-deep hover:text-primary-shade1 -ml-2">
              <Link to="/">← Home</Link>
            </Button>
            <span className="font-body text-xs uppercase tracking-[0.2em] text-secondary-shade1 flex items-center gap-1">
              <Leaf className="w-3.5 h-3.5" aria-hidden />
              Book
            </span>
          </div>

          {!submitted && (
            <>
              <h1 className="font-serif-display text-3xl md:text-4xl font-semibold text-deep mb-2">{stepTitle}</h1>
              <p className="font-body text-sm text-neutral-shade3 mb-6">
                Step {skipBarberStep ? step - 1 : step} of {progressTotal}
              </p>
              <div className="flex gap-1.5 mb-8" aria-hidden>
                {Array.from({ length: progressTotal }).map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "h-1.5 flex-1 rounded-full transition-colors duration-300",
                      i <= progressIndex ? "bg-primary" : "bg-neutral-shade1",
                    )}
                  />
                ))}
              </div>
            </>
          )}

          <div className="min-h-[min(70vh,520px)] overflow-hidden relative">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col items-center text-center py-6"
                >
                  <div className="relative w-28 h-28 mb-8">
                    <motion.div
                      className="absolute inset-0 rounded-full bg-primary"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.05 }}
                    />
                    <svg viewBox="0 0 64 64" className="relative w-full h-full p-4" aria-hidden>
                      <motion.path
                        d="M18 34 L28 44 L46 22"
                        fill="none"
                        stroke="hsl(var(--cream))"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ pathLength: { duration: 0.55, delay: 0.25, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: 0.2, delay: 0.25 } }}
                      />
                    </svg>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-deep mb-2">You&apos;re booked</h2>
                  <p className="font-body text-neutral-shade3 max-w-sm mb-10">
                    We&apos;ll see you in the atrium. A confirmation summary is below.
                  </p>
                  <div className="w-full text-left space-y-3 mb-10">
                    {[
                      { label: "Barber", value: selectedBarberData?.name ?? "—" },
                      { label: "Service", value: selectedServiceData?.name ?? "—" },
                      { label: "Date", value: selectedDate?.toLocaleDateString() ?? "—" },
                      {
                        label: "Time",
                        value: fullyBooked ? `Waitlist · ${waitlistEmail}` : selectedTime ?? "—",
                      },
                      { label: "Visit", value: visitType === "home" ? "Home visit" : "In-shop" },
                      { label: "Total", value: `$${selectedServiceData?.price ?? 0}` },
                    ].map((row, i) => (
                      <motion.div
                        key={row.label}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45 + i * 0.07 }}
                        className="flex justify-between gap-4 font-body text-sm border-b border-neutral-shade1 pb-2"
                      >
                        <span className="text-neutral-shade3">{row.label}</span>
                        <span className="text-deep font-medium text-right">{row.value}</span>
                      </motion.div>
                    ))}
                  </div>
                  <Button asChild className="rounded-full bg-deep text-cream hover:bg-deep-tint1 font-body px-10">
                    <Link to="/">Back to home</Link>
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key={step}
                  variants={stepVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="pb-4"
                >
                  {step === 1 && (
                    <div className="flex flex-col gap-4">
                      {barbers.map((b) => (
                        <Button
                          key={b.id}
                          type="button"
                          variant={selectedBarber === b.id ? "default" : "outline"}
                          onClick={() => setSelectedBarber(b.id)}
                          className={cn(
                            "h-auto w-full justify-start rounded-2xl p-4 gap-4 border-2 font-body",
                            selectedBarber === b.id
                              ? "bg-primary text-primary-foreground border-primary hover:bg-primary-shade1 hover:text-primary-foreground"
                              : "border-neutral-shade1 bg-card text-deep hover:bg-primary-tint3 hover:text-deep",
                          )}
                        >
                          <span className="relative w-16 h-16 shrink-0 overflow-hidden rounded-full border-2 border-cream/30">
                            <img src={b.photo} alt="" className="w-full h-full object-cover" />
                          </span>
                          <span className="text-left flex-1">
                            <span className="block font-serif-display text-lg font-semibold">{b.name}</span>
                            <span className="text-xs opacity-90">{b.experience}</span>
                          </span>
                        </Button>
                      ))}
                    </div>
                  )}

                  {step === 2 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {services.map((s) => (
                        <Button
                          key={s.id}
                          type="button"
                          variant={selectedService === s.id ? "default" : "outline"}
                          onClick={() => setSelectedService(s.id)}
                          className={cn(
                            "h-auto w-full flex-col items-stretch rounded-3xl p-5 gap-2 border-2 font-body text-left min-h-[120px]",
                            selectedService === s.id
                              ? "bg-primary text-primary-foreground border-primary hover:bg-primary-shade1 hover:text-primary-foreground"
                              : "border-neutral-shade1 bg-card text-deep hover:bg-primary-tint3 hover:text-deep",
                          )}
                        >
                          <span className="font-serif-display text-lg font-semibold">{s.name}</span>
                          <span className="text-xs opacity-90 flex justify-between w-full">
                            <span>{s.duration}</span>
                            <span className="text-secondary font-semibold">${s.price}</span>
                          </span>
                        </Button>
                      ))}
                    </div>
                  )}

                  {step === 3 && (
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
                      <div className="rounded-3xl border border-neutral-shade1 bg-card p-3 shadow-sm mx-auto lg:mx-0">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={(d) => {
                            setSelectedDate(d);
                            setSelectedTime(null);
                            setWaitlistEmail("");
                          }}
                          disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                          className="pointer-events-auto"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <Label className="font-body text-deep mb-3 block">Available times</Label>
                        {fullyBooked ? (
                          <Alert className="rounded-2xl border-secondary bg-secondary-tint3/40 text-deep">
                            <CalendarClock className="h-4 w-4 text-secondary-shade1" />
                            <AlertTitle className="font-display text-deep">Fully booked</AlertTitle>
                            <AlertDescription className="text-neutral-shade3 font-body">
                              Join the waitlist for this Sunday — we&apos;ll email if a chair opens.
                            </AlertDescription>
                            <div className="mt-4 space-y-2">
                              <Label htmlFor="waitlist" className="text-deep">
                                Email
                              </Label>
                              <Input
                                id="waitlist"
                                type="email"
                                value={waitlistEmail}
                                onChange={(e) => setWaitlistEmail(e.target.value)}
                                placeholder="you@email.com"
                                className="rounded-xl bg-card border-neutral-shade1"
                              />
                            </div>
                          </Alert>
                        ) : (
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {timeSlots.map((t) => (
                              <Button
                                key={t}
                                type="button"
                                variant={selectedTime === t ? "default" : "outline"}
                                size="sm"
                                onClick={() => setSelectedTime(t)}
                                className={cn(
                                  "rounded-full font-body text-xs h-10",
                                  selectedTime === t
                                    ? "bg-primary text-primary-foreground hover:bg-primary-shade1 hover:text-primary-foreground"
                                    : "border-neutral-shade2 bg-neutral-tint2 text-deep hover:bg-primary-tint3 hover:text-deep",
                                )}
                              >
                                {t}
                              </Button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {step === 4 && (
                    <div className="space-y-6">
                      <Label className="text-deep font-body">Service location</Label>
                      <Tabs value={visitType} onValueChange={(v) => setVisitType(v as VisitType)} className="w-full">
                        <TabsList className="w-full h-12 rounded-full bg-neutral-shade1 p-1.5 grid grid-cols-2">
                          <TabsTrigger
                            value="in-shop"
                            className="rounded-full font-body data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-deep"
                          >
                            In-Shop
                          </TabsTrigger>
                          <TabsTrigger
                            value="home"
                            className="rounded-full font-body data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-deep"
                          >
                            Home Visit
                          </TabsTrigger>
                        </TabsList>
                      </Tabs>
                      {visitType === "home" && (
                        <p className="font-body text-sm text-neutral-shade3">
                          Travel fee based on distance from the salon. We&apos;ll confirm before your appointment.
                        </p>
                      )}
                    </div>
                  )}

                  {step === 5 && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="notes" className="text-deep font-body">
                          Notes for your barber
                        </Label>
                        <Textarea
                          id="notes"
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder="Style preferences, sensitivities, parking, etc."
                          className="min-h-[120px] rounded-xl bg-card border-neutral-shade1 text-deep"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="promo" className="text-deep font-body">
                          Promo code
                        </Label>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <Input
                            id="promo"
                            value={promo}
                            onChange={(e) => setPromo(e.target.value)}
                            placeholder="Optional"
                            className="rounded-xl bg-card border-neutral-shade1 flex-1"
                          />
                          <Button type="button" variant="outline" className="rounded-full border-secondary text-deep bg-secondary-tint3/50 hover:bg-secondary hover:text-cream font-body shrink-0">
                            Apply
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 6 && (
                    <Card className="rounded-3xl border-neutral-shade1 bg-card shadow-[0_12px_40px_hsl(166_35%_45%/0.1)]">
                      <CardContent className="p-6 md:p-8 space-y-4">
                        <h3 className="font-serif-display text-xl text-deep font-semibold">Summary</h3>
                        <div className="space-y-3 font-body text-sm text-deep">
                          <div className="flex justify-between gap-4">
                            <span className="text-neutral-shade3">Barber</span>
                            <span className="font-medium">{selectedBarberData?.name ?? "—"}</span>
                          </div>
                          <div className="flex justify-between gap-4">
                            <span className="text-neutral-shade3">Service</span>
                            <span className="font-medium">{selectedServiceData?.name ?? "—"}</span>
                          </div>
                          <div className="flex justify-between gap-4">
                            <span className="text-neutral-shade3">Date</span>
                            <span className="font-medium">{selectedDate?.toLocaleDateString() ?? "—"}</span>
                          </div>
                          <div className="flex justify-between gap-4">
                            <span className="text-neutral-shade3">Time</span>
                            <span className="font-medium">{fullyBooked ? "Waitlist" : selectedTime ?? "—"}</span>
                          </div>
                          <div className="flex justify-between gap-4">
                            <span className="text-neutral-shade3">Visit</span>
                            <span className="font-medium capitalize">{visitType === "home" ? "Home visit" : "In-shop"}</span>
                          </div>
                          <div className="flex justify-between gap-4 pt-2 border-t border-neutral-shade1">
                            <span className="text-neutral-shade3">Price</span>
                            <span className="font-serif-display text-lg text-secondary font-semibold">${selectedServiceData?.price ?? 0}</span>
                          </div>
                          {notes ? (
                            <p className="text-neutral-shade3 pt-2">
                              <span className="text-deep font-medium">Notes: </span>
                              {notes}
                            </p>
                          ) : null}
                        </div>
                        <Button
                          type="button"
                          onClick={handleConfirm}
                          className="w-full rounded-full mt-4 bg-secondary text-secondary-foreground hover:bg-secondary-shade1 hover:text-cream font-body py-6 text-base"
                        >
                          Confirm booking
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {!submitted && step < 6 && (
            <div className="flex justify-between gap-4 mt-8 pt-4 border-t border-neutral-shade1">
              <Button
                type="button"
                variant="outline"
                onClick={goBack}
                disabled={step <= minStep}
                className="rounded-full border-neutral-shade2 text-deep font-body"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back
              </Button>
              <Button
                type="button"
                onClick={goNext}
                disabled={!canProceed()}
                className="rounded-full bg-primary text-primary-foreground hover:bg-primary-shade1 font-body px-8"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          )}

          {!submitted && step === 6 && (
            <div className="flex justify-start mt-8 pt-4 border-t border-neutral-shade1">
              <Button type="button" variant="outline" onClick={goBack} className="rounded-full border-neutral-shade2 text-deep font-body">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back
              </Button>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
