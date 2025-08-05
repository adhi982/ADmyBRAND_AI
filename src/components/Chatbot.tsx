import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, X, Send, Sparkles, DollarSign, Users, HelpCircle, BookOpen } from 'lucide-react';

interface Message {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface QuickAction {
  id: string;
  label: string;
  icon: React.ReactNode;
  response: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(false);

  const quickActions: QuickAction[] = [
    {
      id: 'features',
      label: 'Features',
      icon: <Sparkles className="w-4 h-4" />,
      response: `🚀 ADmyBRAND AI Suite Features:

• AI Campaign Creation: Generate high-converting ad campaigns in minutes
• Smart Audience Targeting: AI-powered demographic and interest analysis
• Real-time Analytics: Advanced dashboard with predictive insights
• Multi-platform Integration: Facebook, Google, Instagram, LinkedIn & more
• A/B Testing Automation: Optimize campaigns automatically
• Brand Voice Generator: Maintain consistent messaging across all channels

Ready to transform your marketing? Try our free demo!`
    },
    {
      id: 'pricing',
      label: 'Pricing',
      icon: <DollarSign className="w-4 h-4" />,
      response: `💰 Flexible Pricing Plans:

Starter - $29/month
• Up to 5 campaigns
• Basic analytics
• Email support

Professional - $79/month ⭐ Most Popular
• Unlimited campaigns
• Advanced AI features
• Priority support
• Custom integrations

Enterprise - $199/month
• Everything in Pro
• Dedicated account manager
• Custom AI training
• White-label options

🎁 14-day free trial - No credit card required!`
    },
    {
      id: 'testimonials',
      label: 'Reviews',
      icon: <Users className="w-4 h-4" />,
      response: `⭐ What Our Customers Say:

Sarah Johnson, CMO at TechFlow
"Increased our conversion rates by 340% in just 2 months!"

Mike Chen, Digital Marketing Agency
"ADmyBRAND AI saved us 15+ hours per week on campaign creation."

Lisa Rodriguez, E-commerce Director
"The ROI improvement was immediate - our best marketing investment ever."

Join 10,000+ satisfied customers transforming their marketing with AI!`
    },
    {
      id: 'faq',
      label: 'FAQ',
      icon: <HelpCircle className="w-4 h-4" />,
      response: `❓ Frequently Asked Questions:

Q: How quickly can I see results?
A: Most customers see improvements within 7-14 days of implementation.

Q: Do I need technical knowledge?
A: No! Our intuitive interface is designed for marketers, not developers.

Q: Can I cancel anytime?
A: Yes, no long-term contracts. Cancel with one click.

Q: Is my data secure?
A: 100% - We use bank-level encryption and are SOC 2 compliant.

Q: Do you offer support?
A: 24/7 chat support + dedicated success managers for Pro/Enterprise plans.

Still have questions? We're here to help! 💬`
    },
    {
      id: 'blog',
      label: 'Blog',
      icon: <BookOpen className="w-4 h-4" />,
      response: `📖 Latest AI Marketing Insights:

Recent Articles:
• "AI-Powered Analytics: What You Need to Know"
• "How AI is Transforming Marketing in 2024"
• "The Future of AI in Advertising"
• "Top 5 AI Tools for Marketers"

Topics We Cover:
• AI Marketing Strategies
• Automation Best Practices
• Industry Trends & Analysis
• Case Studies & Success Stories
• Tool Reviews & Comparisons

Visit our blog to stay ahead of the curve! 🚀`
    }
  ];

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages.length === 0) {
      // Add welcome message when opening for the first time
      setTimeout(() => {
        setMessages([{
          text: "👋 Hi! I'm your AI marketing assistant. How can I help you learn more about ADmyBRAND AI Suite?",
          sender: 'bot',
          timestamp: new Date()
        }]);
      }, 500);
    }
  };

  const handleQuickAction = (action: QuickAction) => {
    setMessages(prev => [...prev, {
      text: action.label,
      sender: 'user',
      timestamp: new Date()
    }]);
    
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        text: action.response,
        sender: 'bot',
        timestamp: new Date()
      }]);
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const userMessage = inputValue.trim().toLowerCase();
    setMessages(prev => [...prev, { text: inputValue, sender: 'user', timestamp: new Date() }]);
    setInputValue('');

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      let botResponse = "Thanks for your message! For the best experience, please use the quick action buttons above, or contact our support team for personalized assistance. 🚀";
      
      // Simple keyword matching
      if (userMessage.includes('price') || userMessage.includes('cost') || userMessage.includes('plan')) {
        botResponse = quickActions.find(a => a.id === 'pricing')?.response || botResponse;
      } else if (userMessage.includes('feature') || userMessage.includes('what') || userMessage.includes('capability')) {
        botResponse = quickActions.find(a => a.id === 'features')?.response || botResponse;
      } else if (userMessage.includes('review') || userMessage.includes('testimonial') || userMessage.includes('customer')) {
        botResponse = quickActions.find(a => a.id === 'testimonials')?.response || botResponse;
      } else if (userMessage.includes('help') || userMessage.includes('support') || userMessage.includes('question')) {
        botResponse = quickActions.find(a => a.id === 'faq')?.response || botResponse;
      } else if (userMessage.includes('blog') || userMessage.includes('article') || userMessage.includes('content')) {
        botResponse = quickActions.find(a => a.id === 'blog')?.response || botResponse;
      }

      setMessages(prev => [...prev, { text: botResponse, sender: 'bot', timestamp: new Date() }]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-[60]">
        <Button
          onClick={toggleChatbot}
          size="lg"
          variant="default"
          className="rounded-full w-16 h-16 shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-110 hover:rotate-3 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
          {isOpen ? (
            <X className="w-6 h-6 relative z-10 transition-transform duration-300" />
          ) : (
            <MessageCircle className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:scale-110" />
          )}
        </Button>
      </div>

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-[55] w-80 sm:w-[32rem] max-h-[calc(100vh-180px)]">
          <Card className="glass-card border-border/30 shadow-2xl animate-scale-in rounded-3xl overflow-hidden backdrop-blur-xl bg-background/80 border-2 border-gradient-to-r from-primary/20 to-accent/20">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center animate-pulse shadow-lg">
                    <Sparkles className="w-4 h-4 text-primary-foreground animate-spin" style={{ animationDuration: '3s' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">AI Assistant</h3>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-muted-foreground">Online</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setMessages([])}
                    className="h-9 w-8 p-0"
                  >
                    Clr
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleChatbot}
                    className="h-8 w-8 p-0"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Chat Area: Messages in scrollable area */}
              <div className="h-[22rem] overflow-y-auto space-y-3 scroll-smooth flex flex-col [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {/* Messages */}
                <div className="flex-1 flex flex-col justify-end space-y-3">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm shadow-md ${
                          message.sender === 'user'
                            ? 'bg-gradient-primary text-primary-foreground ml-4 rounded-br-md'
                            : 'bg-accent/80 text-accent-foreground mr-4 rounded-bl-md border border-border/30'
                        } transition-all duration-300 hover:scale-[1.02]`}
                      >
                        <div className="whitespace-pre-wrap break-words">
                          {message.text}
                        </div>
                        <div className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-accent/80 text-accent-foreground rounded-2xl rounded-bl-md px-4 py-3 mr-4 border border-border/30 shadow-md">
                        <div className="flex space-x-1 items-center">
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                          <span className="text-xs text-muted-foreground ml-2">AI is typing...</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {/* Show Quick Actions Button */}
                <div className="flex justify-center mt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowQuickActions((prev) => !prev)}
                    className="rounded-xl px-4 py-2 text-xs hover:bg-accent/50 border-border/30 hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-md"
                  >
                    {showQuickActions ? 'Hide Menu' : 'Show Menu'}
                  </Button>
                </div>
                {/* Quick Actions Menu (toggle) */}
                {showQuickActions && (
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    {quickActions.map((action) => (
                      <Button
                        key={action.id}
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuickAction(action)}
                        className="justify-start gap-2 h-auto py-3 px-4 text-xs hover:bg-accent/50 rounded-xl border-border/30 hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-md group"
                      >
                        <span className="group-hover:scale-110 transition-transform duration-200">{action.icon}</span>
                        <span className="font-medium">{action.label}</span>
                      </Button>
                    ))}
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="flex gap-3">
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 rounded-xl border border-border/30 bg-background/50 px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-1 focus:border-primary/50 transition-all duration-300 backdrop-blur-sm"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="px-4 py-3 rounded-xl hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                  disabled={!inputValue.trim()}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>

              {/* Footer */}
              <div className="text-center">
                <Badge variant="outline" className="text-xs">
                  Powered by ADmyBRAND AI
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default Chatbot;