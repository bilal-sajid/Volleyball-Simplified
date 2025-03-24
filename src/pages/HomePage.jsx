import React from 'react';
import Navbar from '../components/Navbar';


// Info Section Data
import InfoSection from '../components/InfoSection';
import homeData from '../data/homeData';
import HeroSection from '../components/Home Page/Hero';

import SecondaryButton from '../components/SecondaryButton';

const HomePage = () => {
  return (
    <div className="bg-page-bg min-h-screen text-white">
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-16 px-6 container mx-auto">
        <InfoSection
          title={homeData.title}
          terms={homeData.terms}
          gridCols="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        />
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-highlightSection-bg py-12 text-center">
        <h2 className="text-3xl font-bold text-infoCard-title mb-8">
          Ready to Start?
        </h2>
        <p className=" text-infoCard-text text-lg mb-6">
          Begin your journey into volleyball with our easy-to-follow guides and tips.
        </p>
        <SecondaryButton to="/basics" size="sm" extraClasses="">
          Learn More
        </SecondaryButton>
      </section>
    </div>
  );
};

export default HomePage;
