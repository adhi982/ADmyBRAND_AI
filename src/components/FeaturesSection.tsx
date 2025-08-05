import { Brain, Target, BarChart3, Zap, Shield, Rocket } from "lucide-react";
import { BackgroundBeams } from "./ui/background-beams";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Content Generation",
    description: "Generate compelling marketing copy, social media posts, and ad campaigns with advanced AI technology that understands your brand voice.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Target,
    title: "Precision Audience Targeting",
    description: "Identify and reach your ideal customers with laser-focused targeting powered by machine learning algorithms and behavioral analysis.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics Dashboard",
    description: "Track campaign performance, ROI, and customer engagement with real-time analytics and predictive insights.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Zap,
    title: "Automated Campaign Optimization",
    description: "Let AI automatically optimize your campaigns for maximum performance, adjusting targeting and budget allocation in real-time.",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: Shield,
    title: "Brand Safety & Compliance",
    description: "Ensure your content meets brand guidelines and industry compliance standards with automated content moderation.",
    gradient: "from-red-500 to-pink-500"
  },
  {
    icon: Rocket,
    title: "Multi-Platform Integration",
    description: "Seamlessly integrate with all major marketing platforms, social networks, and advertising channels from one dashboard.",
    gradient: "from-indigo-500 to-purple-500"
  }
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  const { ref, isVisible } = useScrollReveal({
    threshold: 0.2,
    triggerOnce: true
  });

  // Determine animation direction based on index
  // Left column slides from left, middle from bottom, right from right
  const column = index % 3;
  let initialX = 0;
  let initialY = 0;
  
  if (column === 0) initialX = -100; // Left column slides from left
  else if (column === 2) initialX = 100; // Right column slides from right
  else initialY = 100; // Middle column slides from bottom

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, x: initialX, y: initialY }}
      animate={isVisible ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: initialX, y: initialY }}
      transition={{ 
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] // Custom ease curve for smooth motion
      }}
      className="group glass-card p-8 rounded-2xl hover-lift hover-glow transition-all duration-500"
    >
      {/* Icon */}
      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} p-0.5 mb-6`}>
        <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center">
          <feature.icon className="w-8 h-8 text-foreground" />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold mb-4 group-hover:text-gradient-primary transition-all duration-300">
        {feature.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {feature.description}
      </p>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Animation */}
      <BackgroundBeams className="z-0" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Powerful Features for
            <span className="text-gradient-primary block">Modern Marketers</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Everything you need to transform your marketing strategy and drive exceptional results with cutting-edge AI technology.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          ref={ctaRef}
          initial={{ opacity: 0, y: 50 }}
          animate={ctaVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to experience the future of marketing?
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-gradient-primary text-primary-foreground rounded-xl font-semibold hover:shadow-glow hover:scale-105 transition-all duration-300">
            Explore All Features
            <Rocket className="w-5 h-5 ml-2" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;