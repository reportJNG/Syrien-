import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const ReviewsSection = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Marie Dubois",
      rating: 5,
      comment: "Absolutely amazing! The Mansaf was incredible and the service was exceptional. It felt like being welcomed into a Syrian family home.",
      date: "2 weeks ago",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1e6?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Jean-Pierre Martin",
      rating: 5,
      comment: "The most authentic Syrian food I've had outside of Damascus. The kibbeh reminds me of my travels through the Middle East. Highly recommended!",
      date: "1 month ago",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Sarah Chen",
      rating: 5,
      comment: "Every dish was a masterpiece. The fattoush was so fresh and the baklava was the perfect ending to our meal. We'll definitely be back!",
      date: "3 weeks ago",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Ahmed Hassan",
      rating: 5,
      comment: "As someone from the region, I can confirm this is the real deal. The flavors are spot on and the hospitality is warm and genuine.",
      date: "1 week ago",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Emily Rodriguez",
      rating: 5,
      comment: "The atmosphere is cozy and the food is outstanding. The shawarma was perfectly seasoned and the hummus was creamy perfection.",
      date: "2 months ago",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
    }
  ];

  // Auto-rotate reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-gold fill-current' : 'text-foreground/30'}`} 
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-4">
            What Our Guests Say
          </h2>
          <div className="w-24 h-1 bg-hero-gradient mx-auto mb-6"></div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our valued customers who have 
            experienced the authentic flavors and warm hospitality of Saraya El Dimachki
          </p>
        </div>

        {/* Featured Review */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-8 md:p-12 bg-card/40 backdrop-blur-sm border-gold/30 relative overflow-hidden">
            {/* Quote Icon */}
            <Quote className="absolute top-4 left-4 w-12 h-12 text-gold/20" />
            
            {/* Review Content */}
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                {renderStars(reviews[currentReview].rating)}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-center text-foreground/90 leading-relaxed mb-8 font-light italic">
                "{reviews[currentReview].comment}"
              </blockquote>
              
              <div className="flex items-center justify-center gap-4">
                <img 
                  src={reviews[currentReview].image} 
                  alt={reviews[currentReview].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gold/30"
                />
                <div>
                  <div className="text-lg font-semibold text-gold">
                    {reviews[currentReview].name}
                  </div>
                  <div className="text-sm text-foreground/60">
                    {reviews[currentReview].date}
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-hero-gradient rounded-full opacity-10"></div>
          </Card>

          {/* Review Navigation Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentReview 
                    ? 'bg-gold scale-125' 
                    : 'bg-foreground/30 hover:bg-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Review Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card 
              key={review.id}
              className={`p-6 bg-card/60 backdrop-blur-sm border-gold/20 hover:border-gold/40 transition-all duration-300 hover:shadow-warm cursor-pointer ${
                index === currentReview ? 'ring-2 ring-gold/50' : ''
              }`}
              onClick={() => setCurrentReview(index)}
            >
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={review.image} 
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground">{review.name}</div>
                  <div className="flex items-center gap-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
              </div>
              
              <p className="text-foreground/80 text-sm leading-relaxed mb-3">
                "{review.comment}"
              </p>
              
              <div className="text-xs text-foreground/60">
                {review.date}
              </div>
            </Card>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-card/40 backdrop-blur-sm rounded-lg px-8 py-4 border border-gold/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-gold">4.9</div>
              <div className="flex items-center justify-center gap-1 mb-1">
                {renderStars(5)}
              </div>
              <div className="text-sm text-foreground/60">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-gold/30"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold">500+</div>
              <div className="text-sm text-foreground/60 mt-1">Happy Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;