import React, { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star, Heart } from 'lucide-react';

const MenuGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Sample menu items with placeholder images
  const menuItems = [
    {
      id: 1,
      name: "Mansaf",
      description: "Traditional Jordanian dish with lamb and yogurt sauce",
      price: "€18",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop&crop=center",
      rating: 4.9,
      isSpecial: true
    },
    {
      id: 2,
      name: "Kibbeh",
      description: "Fried bulgur and meat croquettes with pine nuts",
      price: "€12",
      image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqXTa4X0zDz_fvxIzYcC660Fc3tQobdn-pmEa8axXmBosa0mbGUQ-Rgx5fDp4CZHz4-vxOGNOB8LR0dTPMoyIk7gNMFXKCg3QkJgrYWUMITieExIEsd18u8h_q6d0HnTgcvsTw=w344-h448-p-k-no",
      rating: 4.8,
      isSpecial: false
    },
    {
      id: 3,
      name: "Fattoush",
      description: "Fresh mixed salad with crispy pita bread",
      price: "€10",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop&crop=center",
      rating: 4.7,
      isSpecial: false
    },
    {
      id: 4,
      name: "Shawarma",
      description: "Marinated meat wrapped in fresh pita bread",
      price: "€14",
      image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4no3eINdxgSIriu4IwkIDk5QXIP3IfCHv_dsd-le1_LWjOymlbuGr8ANsC9KJ6ulhd3ZBKeaQZD67yDskd-PyxV1-x3ZWTMJMCaXs1JtT6Q9e7yzPLQot6kWCcwtFGt5nkyKiYk2=w344-h448-p-k-no",
      rating: 4.9,
      isSpecial: true
    },
    {
      id: 5,
      name: "Ice Cream",
      description: "Sweet pastry with nuts and honey syrup",
      price: "€8",
      image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npZxrRBG9OMpbpcffZywHnhU1S7ui_5e2MNZwRs1ni_KPNg1tNDaqfIBnzTNnpYPthYlxK6lLPkQk_gj9PDKYnh7jRCxLjOIsk72JGEQgkLdCiiXh1M9TpdtUtiXJN8bfa8NPP_pA=w344-h448-p-k-no",
      rating: 4.8,
      isSpecial: false
    },
    {
      id: 6,
      name: "Falafel",
      description: "Creamy chickpea dip with olive oil and tahini",
      price: "€7",
      image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4noXRMk0_NHhlWk6Qy2EoMLvkLC8OB23zNUTEfHQW439MhVkxY0dJ26b56m3XllkMw4ToAMHPUCu2gpjf5GIX0XlcezD3qVysYhrg8VDyb1YARWMvVK_Akev_6VjusQWfbhrDCtS=w344-h448-p-k-no",
      rating: 4.6,
      isSpecial: false
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % menuItems.length);
      }, 4000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, menuItems.length]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + menuItems.length) % menuItems.length);
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % menuItems.length);
    setIsAutoPlaying(false);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % menuItems.length;
      items.push({ ...menuItems[index], position: i });
    }
    return items;
  };

  return (
    <section id="menu" className="py-20 px-6 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-4">
            Our Signature Dishes
          </h2>
          <div className="w-24 h-1 bg-hero-gradient mx-auto mb-6"></div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Discover the authentic flavors of Syria with our carefully crafted traditional dishes, 
            prepared with love and the finest ingredients
          </p>
        </div>

        {/* 3D Carousel */}
        <div 
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="relative h-96 flex items-center justify-center perspective-1000">
            {getVisibleItems().map((item, idx) => {
              const isCenter = idx === 1;
              const isLeft = idx === 0;
              const isRight = idx === 2;
              
              return (
                <Card 
                  key={`${item.id}-${currentIndex}`}
                  className={`absolute transition-all duration-700 ease-in-out cursor-pointer
                    ${isCenter 
                      ? 'z-30 scale-110 translate-x-0 opacity-100 shadow-elegant rotate-y-0' 
                      : isLeft 
                      ? 'z-20 scale-90 -translate-x-48 opacity-70 shadow-warm rotate-y-12' 
                      : 'z-20 scale-90 translate-x-48 opacity-70 shadow-warm -rotate-y-12'
                    }
                    bg-card/90 backdrop-blur-sm border-gold/30 hover:border-gold/60 w-80 h-80`}
                  onClick={() => !isCenter && handleDotClick((currentIndex + idx) % menuItems.length)}
                >
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    {item.isSpecial && (
                      <div className="absolute top-3 right-3 bg-gold text-primary-foreground px-2 py-1 rounded-full text-xs font-bold">
                        SPECIAL
                      </div>
                    )}
                    <div className="absolute top-3 left-3 flex items-center gap-1 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Star className="w-3 h-3 text-gold fill-current" />
                      <span className="text-xs font-medium text-foreground">{item.rating}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gold">{item.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-foreground">{item.price}</span>
                        <Heart className="w-5 h-5 text-burgundy/60 hover:text-burgundy hover:fill-current transition-colors cursor-pointer" />
                      </div>
                    </div>
                    <p className="text-foreground/70 text-sm mb-4">{item.description}</p>
                    <Button 
                      variant="hero" 
                      size="sm" 
                      className="w-full"
                      disabled={!isCenter}
                    >
                      Order Now
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="sm"
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-background/80 backdrop-blur-sm border-gold/30 hover:bg-gold hover:text-primary-foreground"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-background/80 backdrop-blur-sm border-gold/30 hover:bg-gold hover:text-primary-foreground"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {menuItems.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-gold scale-125' 
                  : 'bg-foreground/30 hover:bg-foreground/50'
              }`}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="flex justify-center mt-4">
          <div className={`text-xs text-foreground/60 flex items-center gap-2 ${
            isAutoPlaying ? 'animate-pulse' : ''
          }`}>
            <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-gold' : 'bg-foreground/30'}`}></div>
            {isAutoPlaying ? 'Auto-scrolling active' : 'Auto-scroll paused'}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuGallery;