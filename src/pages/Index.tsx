import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import MenuGallery from '@/components/MenuGallery';
import AboutSection from '@/components/AboutSection';
import ReviewsSection from '@/components/ReviewsSection';
import InfoSection from '@/components/InfoSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div id="home">
        <HeroSection />
      </div>
      <MenuGallery />
      <AboutSection />
      <ReviewsSection />
      <div id="contact">
        <InfoSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
