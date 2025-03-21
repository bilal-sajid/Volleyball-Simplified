import React from 'react';
import Navbar from '../components/Navbar';
import Image from '../assets/Training.png';

// Info Section Data
import InfoSection from '../components/InfoSection';
import homeData from '../data/homeData';

const HomePage = () => {
  return (
    <div className="bg-page-bg min-h-screen text-white">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-b from-gray-900 to-black py-24 px-6 text-center shadow-lg bg-cover bg-center"
        style={{ backgroundImage: `url(${Image})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-hero-bgOverlay opacity-60"></div>

        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold text-hero-title flex justify-center items-center mb-4">
            Welcome to Volleyball Simplified
          </h1>
          <p className="text-lg text-hero-text max-w-3xl mx-auto">
            Explore the basics of volleyball with our beginner-friendly guide. Whether you're new to the sport or looking to brush up on the fundamentals, our easy-to-follow resources will help you get started with confidence.
          </p>
        </div>
      </section>

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
        <a
          href="/basics"
          className="bg-button-primary hover:bg-button-hover text-button-text font-semibold py-3 px-6 rounded-lg transition-all duration-200"
        >
          Get Started
        </a>
      </section>
    </div>
  );
};

export default HomePage;
