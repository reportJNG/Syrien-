import React from 'react';
import { Card } from '@/components/ui/card';
import { Phone, MapPin, Clock, Star } from 'lucide-react';

const InfoSection = () => {
  return (
    <section className="py-20 px-6 bg-warm-gradient">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-4">
            Contact & Location
          </h2>
          <div className="w-24 h-1 bg-hero-gradient mx-auto mb-6"></div>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Visit us for an authentic Syrian dining experience in the heart of the city
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Delivery Card */}
          <Card className="p-8 bg-card/80 backdrop-blur-sm border-gold/20 hover:border-gold/40 transition-all duration-300 hover:shadow-warm">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gold/20 rounded-lg">
                <Phone className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gold">Livraison</h3>
                <p className="text-foreground/70">Order for delivery</p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-3xl font-bold text-foreground">0553473931</p>
              <p className="text-foreground/60">Available daily from 11:00 AM to 11:00 PM</p>
            </div>
          </Card>

          {/* Reservation Card */}
          <Card className="p-8 bg-card/80 backdrop-blur-sm border-gold/20 hover:border-gold/40 transition-all duration-300 hover:shadow-warm">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-burgundy/20 rounded-lg">
                <Phone className="w-6 h-6 text-burgundy" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-burgundy">Réservation</h3>
                <p className="text-foreground/70">Book your table</p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-3xl font-bold text-foreground">0792277618</p>
              <p className="text-foreground/60">Call ahead to secure your dining experience</p>
            </div>
          </Card>
        </div>

        {/* Location & Map */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Location Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gold/20 rounded-lg">
                <MapPin className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gold">Our Location</h3>
                <p className="text-foreground/70">Find us in the city center</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gold" />
                <div>
                  <p className="font-semibold text-foreground">Opening Hours</p>
                  <p className="text-foreground/70">Daily: 11:00 AM - 11:00 PM</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Star className="w-5 h-5 text-gold" />
                <div>
                  <p className="font-semibold text-foreground">Experience</p>
                  <p className="text-foreground/70">Authentic Syrian flavors & traditional hospitality</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden shadow-elegant border border-gold/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.123456789!2d2.3522219!3d48.8566969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRestaurant+Sarayaeldimachki!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Restaurant Saraya El Dimachki Location"
              ></iframe>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-hero-gradient rounded-full opacity-20 animate-scale-pulse"></div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-xl text-foreground/80 mb-6">
            Ready to taste the authentic flavors of Syria?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0553473931"
              className="inline-flex items-center justify-center px-8 py-3 bg-gold-gradient text-primary-foreground font-semibold rounded-md shadow-warm hover:shadow-elegant hover:scale-[1.02] transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Order Now
            </a>
            <a 
              href="tel:0792277618"
              className="inline-flex items-center justify-center px-8 py-3 bg-burgundy text-white border border-gold/30 hover:bg-burgundy-light hover:border-gold transition-all duration-300 shadow-md hover:shadow-warm rounded-md font-semibold"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Make Reservation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;