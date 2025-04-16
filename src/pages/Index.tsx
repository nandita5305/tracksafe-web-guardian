
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureHighlights from "@/components/FeatureHighlights";
import HowItWorks from "@/components/HowItWorks";
import DeviceMockup from "@/components/DeviceMockup";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main className="pt-20">
        <HeroSection />
        <section id="features">
          <FeatureHighlights />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <DeviceMockup />
        <WhyChoose />
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="pricing">
          <PricingSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
