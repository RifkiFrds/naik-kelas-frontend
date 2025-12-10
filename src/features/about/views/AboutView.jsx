import React from 'react';
import HeroSection from '../components/HeroSection';
import VisiMisiSection from '../components/VisiMisiSection';
import OverviewSection from '../components/OverviewSection';

function AboutView() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <VisiMisiSection />
      <OverviewSection />
    </div>
  );
}

export default AboutView;