import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutStrip from "@/components/AboutStrip";
import ServicesSection from "@/components/ServicesSection";
import BarbersSection from "@/components/BarbersSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LoadingCurtain from "@/components/LoadingCurtain";

const Index = () => (
  <>
    <LoadingCurtain />
    <Navbar />
    <main>
      <HeroSection />
      <AboutStrip />
      <ServicesSection />
      <BarbersSection />
      <GallerySection />
      <ReviewsSection />
      <FaqSection />
      <ContactSection />
    </main>
    <Footer />
  </>
);

export default Index;
