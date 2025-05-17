
import { useState } from 'react';

interface Level {
  id: string;
  name: string;
  mapImage: string;
}

const levels: Level[] = [
  {
    id: 'level1',
    name: 'Level 1',
    mapImage: 'https://images.unsplash.com/photo-1524055988636-436cfa46e59e?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'level2',
    name: 'Level 2',
    mapImage: 'https://images.unsplash.com/photo-1577742353639-5c83e01a8679?q=80&w=1000&auto=format&fit=crop'
  }
];

const MallMap = () => {
  const [activeLevel, setActiveLevel] = useState<string>(levels[0].id);

  return (
    <section className="bg-white dark:bg-gray-900 py-12">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Mall <span className="text-mall-gold">Map</span>
        </h2>
        
        {/* Level selector tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            {levels.map((level) => (
              <button
                key={level.id}
                className={`px-6 py-2 font-medium transition-colors ${
                  activeLevel === level.id
                    ? 'bg-mall-navy text-white'
                    : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                onClick={() => setActiveLevel(level.id)}
              >
                {level.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Map display */}
        <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 relative">
          {levels.map((level) => (
            <div
              key={level.id}
              className={`${
                activeLevel === level.id ? 'block' : 'hidden'
              } aspect-[16/9] bg-gray-100 dark:bg-gray-800 overflow-hidden`}
            >
              <img
                src={level.mapImage}
                alt={`${level.name} Map`}
                className="w-full h-full object-cover"
              />
              {/* Interactive map overlay would go here */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <p className="text-white text-xl font-bold">Interactive Map Coming Soon</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Store directory link */}
        <div className="mt-8 text-center">
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Looking for a specific store? Check our store directory.
          </p>
          <a
            href="/stores"
            className="btn-primary inline-block"
          >
            View Store Directory
          </a>
        </div>
      </div>
    </section>
  );
};

export default MallMap;
