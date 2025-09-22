import React from 'react';
import { Card } from '@/components/ui/card';
import { Award, Clock, Heart, Users } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Heart,
      title: "Family Recipe",
      description: "Authentic recipes passed down through generations of Syrian culinary masters"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Only the finest ingredients sourced from local farmers and trusted suppliers"
    },
    {
      icon: Clock,
      title: "Fresh Daily",
      description: "Every dish prepared fresh daily with traditional cooking methods"
    },
    {
      icon: Users,
      title: "Warm Hospitality",
      description: "Experience the legendary Syrian hospitality in every visit"
    }
  ];

  const stats = [
    { number: "15+", label: "Years of Excellence" },
    { number: "10k+", label: "Happy Customers" },
    { number: "50+", label: "Signature Dishes" },
    { number: "4.9", label: "Average Rating" }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-warm-gradient">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-4">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-hero-gradient mx-auto mb-6"></div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            From the heart of Damascus to your table, we bring you the authentic taste of Syria 
            with every carefully crafted dish
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gold">
                A Culinary Journey Through Syria
              </h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Saraya El Dimachki was born from a deep passion for preserving and sharing 
                the rich culinary heritage of Syria. Our founder, Ahmad Al-Dimachki, brought 
                his family's treasured recipes from the ancient city of Damascus to create 
                an authentic dining experience that transports you to the bustling souks 
                and warm family gatherings of Syria.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Every spice blend, every cooking technique, and every presentation reflects 
                the centuries-old traditions that make Syrian cuisine one of the world's 
                most beloved. We take pride in maintaining these authentic flavors while 
                creating a modern, welcoming atmosphere for our guests.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-foreground/70 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gold mb-8 text-center lg:text-left">
              Why Choose Saraya El Dimachki
            </h3>
            <div className="grid gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card 
                    key={index} 
                    className="p-6 bg-card/60 backdrop-blur-sm border-gold/20 hover:border-gold/40 transition-all duration-300 hover:shadow-warm group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gold/20 rounded-lg group-hover:bg-gold/30 transition-colors">
                        <Icon className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-foreground mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-foreground/70">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-card/30 backdrop-blur-sm rounded-lg p-12 border border-gold/20">
          <h3 className="text-3xl font-bold text-gold mb-4">
            Experience Authentic Syrian Hospitality
          </h3>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable culinary journey that celebrates the rich traditions 
            and flavors of Syrian cuisine in a warm, welcoming atmosphere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0792277618"
              className="inline-flex items-center justify-center px-8 py-3 bg-gold-gradient text-primary-foreground font-semibold rounded-md shadow-warm hover:shadow-elegant hover:scale-[1.02] transition-all duration-300"
            >
              <Users className="w-5 h-5 mr-2" />
              Book Your Table
            </a>
            <a 
              href="tel:0553473931"
              className="inline-flex items-center justify-center px-8 py-3 bg-burgundy text-white border border-gold/30 hover:bg-burgundy-light hover:border-gold transition-all duration-300 shadow-md hover:shadow-warm rounded-md font-semibold"
            >
              <Clock className="w-5 h-5 mr-2" />
              Order for Delivery
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;