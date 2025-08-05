import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import Chatbot from "@/components/Chatbot";
import { Spotlight } from "@/components/ui/spotlight";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Full-page spotlight effect */}
      <Spotlight
        className="from-purple-400/30 via-purple-500/20 to-purple-600/10 dark:from-purple-300/40 dark:via-purple-400/30 dark:to-purple-500/20"
        size={300}
      />
      
      <ScrollProgress />
      <Navigation />
      <main>
        <HeroSection />
        <section id="features">
          <FeaturesSection />
        </section>
        <section id="pricing">
          <PricingSection />
        </section>
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <section id="faq">
          <FAQSection />
        </section>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
