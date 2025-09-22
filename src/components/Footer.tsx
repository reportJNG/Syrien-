import React from 'react';
import { Phone, MapPin, Clock, Mail, Facebook, Instagram, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Menu', id: 'menu' },
    { name: 'About', id: 'about' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'Contact', id: 'contact' }
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Livraison',
      content: '0553473931',
      link: 'tel:0553473931'
    },
    {
      icon: Phone,
      title: 'Réservation',
      content: '0792277618',
      link: 'tel:0792277618'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@sarayaeldimachki.com',
      link: 'mailto:info@sarayaeldimachki.com'
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Daily: 11:00 AM - 11:00 PM',
      link: null
    }
  ];

  return (
    <footer className="bg-background border-t border-gold/20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Restaurant Info */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-gold tracking-wider mb-2">
                SARAYA
              </h3>
              <p className="text-xl text-gold-light font-light mb-4">El Dimachki</p>
              <p className="text-foreground/80 leading-relaxed">
                Authentic Syrian cuisine in the heart of the city. Experience the 
                rich flavors and warm hospitality that Syria is famous for.
              </p>
            </div>
            
            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gold">Follow Us</h4>
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-gold/30 hover:bg-gold hover:text-primary-foreground p-2"
                >
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-gold/30 hover:bg-gold hover:text-primary-foreground p-2"
                >
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-gold/30 hover:bg-gold hover:text-primary-foreground p-2"
                >
                  <Star className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gold">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-foreground/80 hover:text-gold transition-colors duration-200 text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gold">Contact Info</h4>
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = info.link ? (
                  <a 
                    href={info.link} 
                    className="text-foreground/80 hover:text-gold transition-colors duration-200"
                  >
                    {info.content}
                  </a>
                ) : (
                  <span className="text-foreground/80">{info.content}</span>
                );

                return (
                  <div key={index} className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-foreground">{info.title}</div>
                      <div className="text-sm">{content}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Newsletter/Location */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gold">Visit Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-foreground">Location</div>
                  <div className="text-sm text-foreground/80">
                    City Center, Damascus Quarter
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <Button 
                  variant="hero" 
                  className="w-full"
                  onClick={() => window.open('https://www.google.com/maps/place/Restaurant+Sarayaeldimachki', '_blank')}
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  View on Maps
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full border-gold/30 text-gold hover:bg-gold hover:text-primary-foreground"
                  onClick={() => scrollToSection('contact')}
                >
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/20 bg-card/30">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-foreground/60">
              © 2024 Restaurant Saraya El Dimachki. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-foreground/60">
              <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-gold fill-current" />
                <span className="font-medium">4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;