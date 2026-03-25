export const SHOP_NAME = "Verdant & Blade";
export const SHOP_TAGLINE = "A greenhouse calm. A barber's edge.";

export const HERO_IMAGE = "https://picsum.photos/seed/verdant-barber/800/1200";

export const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Barbers", href: "/#barbers" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Reviews", href: "/#reviews" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export const STATS = [
  { label: "Chairs in the atrium", value: 8 },
  { label: "Years rooted here", value: 14 },
  { label: "Five-star stories", value: 2100 },
];

export interface Service {
  id: string;
  name: string;
  duration: string;
  price: number;
  description: string;
}

export const services: Service[] = [
  {
    id: "haircut",
    name: "Canopy Cut",
    duration: "45 min",
    price: 48,
    description: "Scissor and clipper balance with a cool herbal rinse and style finish.",
  },
  {
    id: "beard",
    name: "Moss & Line Beard",
    duration: "30 min",
    price: 32,
    description: "Shape, define, and nourish with warm oil and crisp edges.",
  },
  {
    id: "combo",
    name: "Full Grove Session",
    duration: "75 min",
    price: 72,
    description: "Haircut plus beard — the complete ritual without the rush.",
  },
  {
    id: "kids",
    name: "Sprout Cut",
    duration: "30 min",
    price: 28,
    description: "Gentle cuts for young guests under twelve.",
  },
  {
    id: "lineup",
    name: "Terrazzo Line-Up",
    duration: "20 min",
    price: 22,
    description: "Sharp hairline and temple cleanup when time is tight.",
  },
  {
    id: "shave",
    name: "Steam Leaf Shave",
    duration: "40 min",
    price: 42,
    description: "Straight razor, warm lather, and a calming botanical compress.",
  },
];

export interface Barber {
  id: string;
  name: string;
  photo: string;
  specialty: string[];
  experience: string;
  rating: number;
}

export const barbers: Barber[] = [
  {
    id: "marcus",
    name: "Marcus Cole",
    photo: "https://picsum.photos/seed/barber1/600/900",
    specialty: ["Fades", "Designs", "Texture"],
    experience: "12 years shaping crowns under skylight",
    rating: 5,
  },
  {
    id: "james",
    name: "James Rivera",
    photo: "https://picsum.photos/seed/barber2/600/800",
    specialty: ["Classic Cuts", "Hot Towel"],
    experience: "8 years — old-school calm, new-school lines",
    rating: 5,
  },
  {
    id: "alex",
    name: "Alex Thompson",
    photo: "https://picsum.photos/seed/barber3/600/800",
    specialty: ["Modern Styles", "Beards"],
    experience: "6 years of sculpting and conversation",
    rating: 4,
  },
  {
    id: "daniel",
    name: "Daniel Kim",
    photo: "https://picsum.photos/seed/barber4/600/900",
    specialty: ["Kids", "Textured Crops"],
    experience: "5 years — patience first, clippers second",
    rating: 5,
  },
];

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
}

export const reviews: Review[] = [
  {
    id: "1",
    name: "Michael Chen",
    rating: 5,
    text: "Feels like a conservatory with clippers. Marcus gave me the cleanest fade — light everywhere, zero chaos.",
  },
  {
    id: "2",
    name: "David Okonkwo",
    rating: 5,
    text: "The steam shave is unreal. Brass fixtures, concrete quiet, and barbers who actually listen.",
  },
  {
    id: "3",
    name: "Ryan Patel",
    rating: 5,
    text: "Booked online in a minute. Walked into teal chairs and vines overhead — walked out sharp.",
  },
  {
    id: "4",
    name: "Jordan Lee",
    rating: 5,
    text: "Home visit option saved my week. Same quality, same calm energy.",
  },
];

export const galleryImages: { id: string; src: string; label: string }[] = [
  { id: "g1", src: "https://picsum.photos/seed/cut1/600/900", label: "Classic Fade" },
  { id: "g2", src: "https://picsum.photos/seed/cut2/600/600", label: "Textured Crop" },
  { id: "g3", src: "https://picsum.photos/seed/cut3/600/700", label: "Beard Sculpt" },
  { id: "g4", src: "https://picsum.photos/seed/cut4/900/500", label: "Skin Fade" },
  { id: "g5", src: "https://picsum.photos/seed/cut5/600/800", label: "Afro Taper" },
  { id: "g6", src: "https://picsum.photos/seed/cut6/600/600", label: "Line Up" },
  { id: "g7", src: "https://picsum.photos/seed/cut7/600/750", label: "Pompadour" },
  { id: "g8", src: "https://picsum.photos/seed/cut8/600/650", label: "Buzz Cut" },
];

export const faqs = [
  { q: "Do I need an appointment?", a: "We recommend booking online to hold your chair. Walk-ins are welcome when the atrium has space." },
  { q: "How long does a typical haircut take?", a: "Most cuts are about 45 minutes. Full hair and beard sessions run closer to 75 minutes." },
  { q: "Do you offer home visits?", a: "Yes — choose Home Visit in booking. A travel fee applies based on distance from the salon." },
  { q: "What payment methods do you accept?", a: "Cash, major cards, Apple Pay, and Google Pay." },
  { q: "Can I request a specific barber?", a: "Absolutely. Pick your artist when you book — specialties are listed on each profile." },
  { q: "What's your cancellation policy?", a: "Please cancel or reschedule at least 4 hours ahead to avoid a fee." },
];

export const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
];

export const CONTACT_INFO = {
  address: "240 Conservatory Row, Portland, OR 97209",
  phone: "+1 (503) 555-0142",
  email: "hello@verdantblade.co",
  hours: [
    { day: "Mon – Fri", time: "9:00 – 19:00" },
    { day: "Saturday", time: "8:00 – 18:00" },
    { day: "Sunday", time: "10:00 – 16:00" },
  ],
  socials: { instagram: "#", facebook: "#" },
};
