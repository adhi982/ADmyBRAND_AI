import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does the AI content generation work?",
    answer: "Our AI uses advanced machine learning models trained on millions of high-performing marketing campaigns. It analyzes your brand voice, target audience, and campaign objectives to generate content that resonates with your customers and drives conversions."
  },
  {
    question: "Can I integrate with my existing marketing tools?",
    answer: "Yes! ADmyBRAND AI Suite integrates with over 50+ popular marketing platforms including Google Ads, Facebook Ads, HubSpot, Salesforce, Mailchimp, and many more. Our API also allows for custom integrations with your proprietary tools."
  },
  {
    question: "Is my data secure and private?",
    answer: "Absolutely. We use enterprise-grade security with SOC 2 Type II compliance, end-to-end encryption, and GDPR compliance. Your data is never shared with third parties and you maintain full ownership of all your content and insights."
  },
  {
    question: "How accurate is the AI targeting?",
    answer: "Our AI targeting achieves 94% accuracy in audience prediction using behavioral analysis, demographic data, and psychographic profiling. The system continuously learns from campaign performance to improve targeting precision over time."
  },
  {
    question: "Do you offer training and onboarding?",
    answer: "Yes! All plans include comprehensive onboarding, video tutorials, and access to our knowledge base. Professional and Enterprise plans also include dedicated training sessions and ongoing support from our customer success team."
  },
  {
    question: "What's included in the free trial?",
    answer: "The 14-day free trial includes full access to all features in the Professional plan - unlimited AI campaigns, advanced analytics, priority support, and all integrations. No credit card required to start."
  },
  {
    question: "Can I cancel or change my plan anytime?",
    answer: "Yes, you can upgrade, downgrade, or cancel your subscription at any time. Changes take effect at your next billing cycle, and we offer prorated refunds for downgrades within the first 30 days."
  },
  {
    question: "How does the ROI tracking work?",
    answer: "Our platform tracks every touchpoint of your customer journey, from first impression to conversion. We provide detailed attribution modeling, lifetime value calculations, and predictive ROI forecasting to help you optimize your marketing spend."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Frequently Asked
            <span className="text-gradient-primary block">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Everything you need to know about ADmyBRAND AI Suite. Can't find the answer you're looking for? 
            <span className="text-primary hover:underline cursor-pointer ml-1">Contact our support team</span>.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="glass-card rounded-2xl mb-4 overflow-hidden hover-lift transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-primary transform transition-transform duration-300" />
                  ) : (
                    <Plus className="w-6 h-6 text-muted-foreground transform transition-transform duration-300" />
                  )}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <div className="border-t border-white/10 pt-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: '0.9s' }}>
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our expert team is here to help you get started with AI-powered marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-primary text-primary-foreground rounded-xl font-semibold hover:shadow-glow hover:scale-105 transition-all duration-300">
                Contact Sales
              </button>
              <button className="px-6 py-3 glass-button rounded-xl font-semibold hover:bg-white/20 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;