
import MallMap from "../components/MallMap";

const Map = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Mall Map</h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          Navigate Tedd's City Mall with ease using our interactive mall map. Find your favorite stores, restaurants, restrooms, and other facilities.
        </p>
        
        <MallMap />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Facilities</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="bg-mall-gold w-3 h-3 rounded-full mt-1.5 mr-2"></span>
                <span><strong>Restrooms:</strong> Located on all levels near the food court and main entrances</span>
              </li>
              <li className="flex items-start">
                <span className="bg-mall-navy w-3 h-3 rounded-full mt-1.5 mr-2"></span>
                <span><strong>Elevators:</strong> Central atrium and each corner of the mall</span>
              </li>
              <li className="flex items-start">
                <span className="bg-gray-500 w-3 h-3 rounded-full mt-1.5 mr-2"></span>
                <span><strong>Information Desks:</strong> Main entrance and Level 2 central area</span>
              </li>
              <li className="flex items-start">
                <span className="bg-red-500 w-3 h-3 rounded-full mt-1.5 mr-2"></span>
                <span><strong>First Aid:</strong> Next to security office on Level 1</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 w-3 h-3 rounded-full mt-1.5 mr-2"></span>
                <span><strong>ATMs:</strong> Food court, main entrance, and Level 2 central area</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Mall Directory</h2>
            <p className="mb-4">For a complete list of stores and their locations, please visit our stores page or ask at any information desk.</p>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Level 1</h3>
                <p className="text-gray-600 dark:text-gray-400">Fashion, Electronics, Home Goods, Food Court</p>
              </div>
              <div>
                <h3 className="font-medium">Level 2</h3>
                <p className="text-gray-600 dark:text-gray-400">Kids Zone, Entertainment, Dining, Health & Beauty</p>
              </div>
            </div>
            <div className="mt-6">
              <a href="/stores" className="btn-primary">View Store Directory</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
