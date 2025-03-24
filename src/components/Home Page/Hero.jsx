import Image from '../../assets/Training.png';
import PrimaryButton from '../PrimaryButton';

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${Image})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-4xl text-white animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
          Simplify Your Volleyball Journey
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Learn the basics. Master rotations. Elevate your game.
        </p>

        <PrimaryButton to="/basics" size="lg">
          Get Started
        </PrimaryButton>

      </div>
    </section>
  );
};

export default HeroSection;
