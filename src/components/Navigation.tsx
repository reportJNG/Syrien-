import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, MapPin, Utensils, Coffee, Users, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', id: 'home', icon: Utensils },
    { name: 'Menu', id: 'menu', icon: Coffee },
    { name: 'About', id: 'about', icon: Users },
    { name: 'Reviews', id: 'reviews', icon: Star },
    { name: 'Contact', id: 'contact', icon: MapPin },
  ];

  return (
    <>
      {/* Main Navigation */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-elegant border-b border-gold/20" 
          : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('home')}>
              <h1 className="text-2xl font-bold text-gold tracking-wider">
                SARAYA
                <span className="text-sm block text-gold-light font-light">El Dimachki</span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className="text-foreground/80 hover:text-gold px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                  >
                    {item.name}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Buttons - Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button variant="outline" size="sm" className="border-gold/30 text-gold hover:bg-gold hover:text-primary-foreground">
                <Phone className="w-4 h-4 mr-2" />
                Order
              </Button>
              <Button variant="hero" size="sm">
                <MapPin className="w-4 h-4 mr-2" />
                Reserve
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="text-gold hover:bg-gold/20"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-gold/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center w-full text-left text-foreground/80 hover:text-gold hover:bg-gold/10 px-3 py-2 text-base font-medium transition-colors duration-200"
                  >
                    <Icon className="w-4 h-4 mr-3" />
                    {item.name}
                  </button>
                );
              })}
              <div className="border-t border-gold/20 pt-4 space-y-2">
                <Button 
                  variant="outline" 
                  className="w-full border-gold/30 text-gold hover:bg-gold hover:text-primary-foreground"
                  onClick={() => window.open('tel:0553473931')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Order: 0553473931
                </Button>
                <Button 
                  variant="hero" 
                  className="w-full"
                  onClick={() => window.open('tel:0792277618')}
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Reserve: 0792277618
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="h-16"></div>
    </>
  );
};

export default Navigation;