
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-mall-navy text-white">
      {/* Hero image with overlay */}
      <div 
        className="absolute inset-0 bg-black opacity-40 z-10"
        aria-hidden="true"
      ></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581541234269-311f93b8f3d4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&w=2000')] bg-cover bg-center"
        aria-hidden="true"
      ></div>

      <div className="container-custom relative z-20 py-20 md:py-32 lg:py-40">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Welcome to <span className="text-mall-gold">Tedd's City Mall</span>
          </h1>
          
          <p className="text-xl mb-8 max-w-lg animate-slide-up">
            Your premier shopping destination with over 200 stores, restaurants, and entertainment options for the whole family.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/stores" className="btn-secondary">
              Explore Stores
            </Link>
            <Link to="/events" className="btn-primary bg-white/20 hover:bg-white/30 backdrop-blur-sm">
              Upcoming Events
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
