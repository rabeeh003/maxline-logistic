import { siteConfig } from "@/config/site";
import HeroSection from "@/components/home/HeroSection";
// import HeroSectiond from "@/components/home/HeroSectiond";
import ServicesSection from "@/components/home/ServicesSection";
import ShowcaseVideoSection from "@/components/home/ShowcaseVideoSection";
import ShowcaseVideoSectionMobail from "@/components/home/ShowcaseVideoSectionMobail";
import FreightServicesSection from "@/components/home/FreightServicesSection";
import FAQSection from "@/components/home/FAQSection";
import CertificationsSection from "@/components/home/CertificationsSection";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      {/* <HeroSectiond /> */}
      <HeroSection />
      <ServicesSection />
      <ShowcaseVideoSectionMobail />
      <FreightServicesSection />
      <ShowcaseVideoSection />
      <FAQSection />
      <CertificationsSection />
      <CTASection />
      <Footer />
    </>
  );
}
