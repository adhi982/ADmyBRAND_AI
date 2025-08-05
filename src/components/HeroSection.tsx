import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, TrendingUp } from "lucide-react";
import heroVideo from "@/assets/Futuristic_AI_Marketing_Dashboard_Video.mp4";
import heroImage from "@/assets/hero-dashboard.jpg";
import { motion } from "framer-motion";
import TradingScreenAnimation from "./TradingScreenAnimation";

const HeroSection = () => {
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoError = () => {
    setVideoError(true);
  };

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-16">
      {/* Background with gradient and trading animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/80"></div>
      <TradingScreenAnimation />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 sm:space-y-8 animate-slide-up text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 glass-card px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              <span className="font-medium">AI-Powered Marketing Suite</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Transform Your
                <span className="text-gradient-primary block">
                  Brand Marketing
                </span>
                with AI
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed mx-auto lg:mx-0">
                Harness the power of artificial intelligence to create compelling campaigns, 
                analyze customer behavior, and drive unprecedented growth for your brand.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="group w-full sm:w-auto">
                Start Free Trial
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="xl" className="w-full sm:w-auto">
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8">
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gradient-primary">500+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Brands Trust Us</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gradient-primary">10M+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Campaigns Created</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gradient-primary">300%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">ROI Increase</div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Video/Image */}
          <div className="relative animate-scale-in mt-8 lg:mt-0" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-xl lg:rounded-2xl overflow-hidden glass-card p-2 sm:p-3 lg:p-4">
              {!videoError ? (
                <video 
                  src={heroVideo} 
                  autoPlay
                  loop
                  muted
                  playsInline
                  onError={handleVideoError}
                  onLoadedData={handleVideoLoad}
                  className="w-full h-auto rounded-lg lg:rounded-xl hover-lift"
                  style={{ aspectRatio: '16/9', objectFit: 'cover' }}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img 
                  src={heroImage} 
                  alt="ADmyBRAND AI Dashboard"
                  className="w-full h-auto rounded-lg lg:rounded-xl hover-lift"
                  style={{ aspectRatio: '16/9', objectFit: 'cover' }}
                />
              )}
              
              {/* Floating UI Elements - Hidden on very small screens */}
              <div className="hidden sm:block absolute top-4 lg:top-8 right-4 lg:right-8 glass-card p-2 lg:p-3 rounded-lg lg:rounded-xl animate-float">
                <div className="flex items-center space-x-1 lg:space-x-2">
                  <TrendingUp className="w-4 h-4 lg:w-5 lg:h-5 text-green-400" />
                  <span className="text-xs lg:text-sm font-medium">+47% Growth</span>
                </div>
              </div>
              
              <div className="hidden sm:block absolute bottom-4 lg:bottom-8 left-4 lg:left-8 glass-card p-2 lg:p-3 rounded-lg lg:rounded-xl animate-float" style={{ animationDelay: '-2s' }}>
                <div className="flex items-center space-x-1 lg:space-x-2">
                  <Zap className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400" />
                  <span className="text-xs lg:text-sm font-medium">AI Processing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;