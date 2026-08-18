import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCallBar from "@/components/layout/MobileCallBar";
import Hero from "@/components/home/Hero";
import PromoBar from "@/components/home/PromoBar";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import EmergencyCTA from "@/components/home/EmergencyCTA";
import Coupons from "@/components/home/Coupons";
import SpecialPricing from "@/components/home/SpecialPricing";
import About from "@/components/home/About";
import SafetySection from "@/components/home/SafetySection";
import VideoSection from "@/components/home/VideoSection";
import ContactSection from "@/components/home/ContactSection";
import LocationSection from "@/components/home/LocationSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PromoBar />
        <Services />
        <WhyChooseUs />
        <EmergencyCTA />
        <Coupons />
        <SpecialPricing />
        <About />
        <SafetySection />
        <VideoSection />
        <ContactSection />
        <LocationSection />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
