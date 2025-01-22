import React from 'react';
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />


    {/* Hero Section */}
    <section className="bg-gradient-to-b from-gray-900 to-black py-16 px-6 text-center shadow-lg">
      <h1 className="text-5xl font-extrabold text-orange-400 flex justify-center items-center">
        Welcome to Volleyball Simplified
      </h1>
      <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
        Explore the basics of volleyball with our beginner-friendly guide. Whether you're new to the sport or looking to brush up on the fundamentals, our easy-to-follow resources will help you get started with confidence.
      </p>
    </section>


      {/* Features Section */}
      <section className="py-16 px-6 container mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          What You’ll Learn
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-700 transition-all duration-200">
            <h3 className="text-xl font-bold text-orange-400 mb-4 text-center">
              Rules and Gameplay
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Understand the core rules, scoring systems, and rotations to master the fundamentals of volleyball.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-700 transition-all duration-200">
            <h3 className="text-xl font-bold text-orange-400 mb-4 text-center">
              Player Positions
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Explore the roles and responsibilities of key positions, from the powerful Outside Hitter to the agile Libero.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-700 transition-all duration-200">
            <h3 className="text-xl font-bold text-orange-400 mb-4 text-center">
              Key Volleyball Terms
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Learn essential volleyball terms like "ace," "set," and "block" to improve your understanding of the game.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-orange-500 py-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Start?
        </h2>
        <p className="text-gray-100 text-lg mb-6">
          Begin your journey into volleyball with our easy-to-follow guides and tips.
        </p>
        <a
          href="/basics"
          className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
        >
          Get Started
        </a>
      </section>
    </div>
  );
};

export default HomePage;
