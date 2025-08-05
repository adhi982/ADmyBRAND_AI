import { Button } from "@/components/ui/button";
import { Check, Crown, Zap, Star } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "29",
    period: "month",
    description: "Perfect for small businesses and startups",
    features: [
      "5 AI-generated campaigns per month",
      "Basic analytics dashboard",
      "Email support",
      "2 social media integrations",
      "Template library access",
      "Basic brand guidelines"
    ],
    icon: Zap,
    popular: false,
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Professional",
    price: "99",
    period: "month",
    description: "Ideal for growing businesses and marketing teams",
    features: [
      "Unlimited AI campaigns",
      "Advanced analytics & insights",
      "Priority support",
      "10+ platform integrations",
      "Custom templates",
      "Advanced targeting",
      "A/B testing tools",
      "Team collaboration"
    ],
    icon: Crown,
    popular: true,
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Enterprise",
    price: "299",
    period: "month",
    description: "For large organizations with complex needs",
    features: [
      "Everything in Professional",
      "Custom AI model training",
      "Dedicated account manager",
      "White-label solutions",
      "Advanced compliance tools",
      "Custom integrations",
      "SLA guarantees",
      "24/7 phone support"
    ],
    icon: Star,
    popular: false,
    color: "from-green-500 to-emerald-500"
  }
];

const PricingSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Choose Your
            <span className="text-gradient-primary block">Perfect Plan</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Start your AI marketing journey today with our flexible pricing options designed to scale with your business.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`relative group glass-card pricing-card p-8 rounded-2xl hover-lift transition-all duration-500 animate-scale-in ${
                plan.popular ? 'ring-2 ring-primary/50 scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} p-0.5 mb-6`}>
                <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center">
                  <plan.icon className="w-8 h-8 text-foreground" />
                </div>
              </div>

              {/* Plan Details */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-5xl font-bold text-gradient-primary">${plan.price}</span>
                  <span className="text-muted-foreground ml-2">/{plan.period}</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button 
                variant={plan.popular ? "hero" : "glass"} 
                size="lg" 
                className="w-full group"
              >
                {plan.popular ? "Start Free Trial" : "Get Started"}
                <plan.icon className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
              </Button>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${plan.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <p className="text-lg text-muted-foreground mb-6">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <span>✓ Cancel anytime</span>
            <span>✓ 99.9% uptime SLA</span>
            <span>✓ SOC 2 compliant</span>
            <span>✓ GDPR ready</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;