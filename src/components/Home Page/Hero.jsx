
import Image from '../../assets/Training.png';

const HeroSection = () => {
    return (
      <section className="relative h-[60vh] flex items-center justify-center text-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${Image})` }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
  
        {/* Content */}
        <div className="relative z-10 px-4">
          <h1 className="text-white text-3xl md:text-5xl font-extrabold mb-4">
            Welcome to Volleyball Simplified
          </h1>
          <p className="text-white text-md md:text-lg max-w-3xl mx-auto">
            Explore the basics of volleyball with our beginner-friendly guide. Whether you're new to the sport or looking to brush up on the fundamentals, our easy-to-follow resources will help you get started with confidence.
          </p>
        </div>
      </section>
    )
  }
  
  export default HeroSection;
  
  



