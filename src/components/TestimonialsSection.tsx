import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Meteors } from "@/components/ui/meteors";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "CMO at TechFlow Inc",
    content: "ADmyBRAND AI Suite transformed our marketing strategy completely. We saw a 300% increase in campaign performance within the first month. The AI-generated content is indistinguishable from human-written copy.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400",
    company: "TechFlow"
  },
  {
    name: "Michael Chen",
    title: "Marketing Director at StartupX",
    content: "The precision targeting and automated optimization features are game-changers. We've reduced our customer acquisition cost by 60% while doubling our conversion rates. Absolutely revolutionary!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    company: "StartupX"
  },
  {
    name: "Emily Rodriguez",
    title: "Head of Growth at ScaleUp Pro",
    content: "What impressed me most is how quickly the AI learns our brand voice. The multi-platform integration saved us countless hours of manual work. Our team productivity increased by 250%.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    company: "ScaleUp Pro"
  },
  {
    name: "David Park",
    title: "Founder at InnovateLab",
    content: "The analytics dashboard provides insights we never had before. The predictive features help us stay ahead of market trends. ROI tracking is incredibly detailed and actionable.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    company: "InnovateLab"
  },
  {
    name: "Lisa Thompson",
    title: "VP Marketing at GrowthCorp",
    content: "Customer support is exceptional, and the platform keeps evolving with new features. The white-label solution helped us offer AI marketing to our own clients seamlessly.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400",
    company: "GrowthCorp"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Trusted by
            <span className="text-gradient-primary block">Industry Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Join thousands of marketing professionals who have transformed their campaigns with our AI-powered platform.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative glass-card testimonial-card p-12 rounded-3xl hover-glow animate-scale-in overflow-hidden">
            {/* Meteors Animation */}
            <Meteors number={15} className="opacity-70" />
            
            {/* Quote Icon */}
            <Quote className="w-16 h-16 text-primary/20 absolute top-8 left-8 z-10" />

            {/* Main Testimonial */}
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-2xl lg:text-3xl font-medium leading-relaxed mb-8 text-foreground relative z-10">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4 relative z-10">
                <img 
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div className="text-left">
                  <div className="font-semibold text-lg">{testimonials[currentIndex].name}</div>
                  <div className="text-muted-foreground">{testimonials[currentIndex].title}</div>
                  <div className="text-primary font-medium">{testimonials[currentIndex].company}</div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-12 relative z-10">
              <Button 
                variant="glass" 
                size="icon" 
                onClick={prevTestimonial}
                className="hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-primary scale-125' 
                        : 'bg-muted hover:bg-primary/50'
                    }`}
                  />
                ))}
              </div>

              <Button 
                variant="glass" 
                size="icon" 
                onClick={nextTestimonial}
                className="hover:scale-110"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient-primary mb-2">500+</div>
            <div className="text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient-primary mb-2">4.9/5</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient-primary mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;