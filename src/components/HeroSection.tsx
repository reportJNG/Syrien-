import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MapPin, Utensils } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';
import floatingDishes from '@/assets/floating-dishes.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Restaurant Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-warm-gradient opacity-85"></div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 animate-float">
          <Utensils className="w-12 h-12 text-gold opacity-30" />
        </div>
      
        <div className="absolute top-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-8 h-8 bg-gold rounded-full opacity-20"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in-up">
        {/* Restaurant Logo/Name */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-gold mb-4 tracking-wider">
            SARAYA
          </h1>
          <h2 className="text-3xl md:text-4xl font-elegant text-gold-light mb-2">
            El Dimachki
          </h2>
          <div className="w-24 h-1 bg-hero-gradient mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-foreground/90 font-light italic">
            Authentic Syrian Cuisine
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Button 
            variant="hero" 
            size="lg" 
            className="px-8 py-4 text-lg font-semibold min-w-[200px]"
          >
            <Phone className="w-5 h-5 mr-2" />
            Order Now
          </Button>
          <Button 
            variant="elegant" 
            size="lg" 
            className="px-8 py-4 text-lg font-semibold min-w-[200px]"
          >
            <MapPin className="w-5 h-5 mr-2" />
            Reservation
          </Button>
        </div>

        {/* Quick Info */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center text-foreground/80">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-gold" />
            <span className="font-medium">Livraison: 0553473931</span>
          </div>
          <div className="hidden md:block w-px h-6 bg-gold/30"></div>
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-gold" />
            <span className="font-medium">Réservation: 0792277618</span>
          </div>
        </div>
      </div>

      {/* Decorative Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/20 to-transparent"></div>
    </section>
  );
};

export default HeroSection;