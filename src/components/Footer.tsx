import { Facebook, Linkedin, Instagram, Github, Mail, Phone, MapPin } from "lucide-react";

// X (Twitter) icon: Just a bold capital X
const XTwitter = (props: React.HTMLAttributes<HTMLSpanElement>) => (
  <span style={{fontWeight: 900, fontSize: '1.25em', fontFamily: 'Inter, Arial, sans-serif', lineHeight: 1, display: 'inline-block'}} {...props}>X</span>
);

const footerSections = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "/#features" },
      { name: "Pricing", href: "/#pricing" },
      { name: "Integrations", href: "/#integrations" },
      { name: "API Documentation", href: "#api" },
      { name: "Security", href: "#security" },
      { name: "Changelog", href: "#changelog" }
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Press Kit", href: "#press" },
      { name: "Partners", href: "#partners" },
      { name: "Investors", href: "#investors" },
      { name: "Blog", href: "/blog" }
    ]
  },
  {
    title: "Resources",
    links: [
      { name: "Help Center", href: "#help" },
      { name: "Community", href: "#community" },
      { name: "Tutorials", href: "#tutorials" },
      { name: "Webinars", href: "#webinars" },
      { name: "Case Studies", href: "#cases" },
      { name: "Templates", href: "#templates" }
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "GDPR", href: "#gdpr" },
      { name: "Compliance", href: "#compliance" },
      { name: "Accessibility", href: "#accessibility" }
    ]
  }
];

const socialLinks = [
  { icon: XTwitter, href: "#", name: "X" },
  { icon: Linkedin, href: "#", name: "LinkedIn" },
  { icon: Facebook, href: "#", name: "Facebook" },
  { icon: Instagram, href: "#", name: "Instagram" },
  { icon: Github, href: "#", name: "GitHub" }
];

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-gradient-secondary">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">A</span>
                </div>
                <span className="text-2xl font-bold text-gradient-primary">ADmyBRAND</span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
                Transform your marketing with AI-powered campaigns that drive real results. 
                Join thousands of brands already growing with our platform.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="w-5 h-5" />
                  <span>official@admybrand.ai</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="w-5 h-5" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="w-5 h-5" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Stay Updated</h4>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <button className="px-6 py-3 bg-gradient-primary text-primary-foreground rounded-r-xl hover:shadow-glow transition-all duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index} className="lg:col-span-1">
                <h4 className="font-semibold text-lg mb-6">{section.title}</h4>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:underline"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-muted-foreground mb-4 md:mb-0">
              © 2024 ADmyBRAND AI Suite. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 glass-button rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;