import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServiceSection";
import ShowcaseVideoSectionMobail from "@/components/home/ShowcaseVideoSectionMobail";
import FreightServicesSection from "@/components/home/FreightServicesSection";
import ShowcaseVideoSection from "@/components/home/ShowcaseVideoSection";
import FAQSection from "@/components/home/FAQSection";
import CertificationsSection from "@/components/home/CertificationsSection";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
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
