
import { Clock, MapPin, Phone } from 'lucide-react';

const HoursAndLocation = () => {
  const regularHours = [
    { day: 'Monday - Friday', hours: '10:00 AM - 9:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 10:00 PM' },
    { day: 'Sunday', hours: '11:00 AM - 7:00 PM' }
  ];

  const specialHours = [
    { day: 'Memorial Day', hours: '10:00 AM - 6:00 PM' },
    { day: 'Independence Day', hours: '10:00 AM - 6:00 PM' },
    { day: 'Labor Day', hours: '10:00 AM - 6:00 PM' }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Hours */}
          <div>
            <div className="flex items-center mb-6">
              <Clock size={24} className="text-mall-gold mr-3" />
              <h2 className="text-2xl md:text-3xl font-bold">Mall Hours</h2>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Regular Hours</h3>
              <table className="w-full">
                <tbody>
                  {regularHours.map((item, index) => (
                    <tr key={index} className="border-b border-gray-200 dark:border-gray-700 last:border-0">
                      <td className="py-3 font-medium">{item.day}</td>
                      <td className="py-3 text-right">{item.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Holiday Hours</h3>
              <table className="w-full">
                <tbody>
                  {specialHours.map((item, index) => (
                    <tr key={index} className="border-b border-gray-200 dark:border-gray-700 last:border-0">
                      <td className="py-3 font-medium">{item.day}</td>
                      <td className="py-3 text-right">{item.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                *Restaurant and department store hours may vary.
              </p>
            </div>
          </div>

          {/* Location */}
          <div>
            <div className="flex items-center mb-6">
              <MapPin size={24} className="text-mall-gold mr-3" />
              <h2 className="text-2xl md:text-3xl font-bold">Location</h2>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              {/* Map image placeholder */}
              <div className="relative w-full h-64 bg-gray-200 dark:bg-gray-700">
                <img 
                  src="https://images.unsplash.com/photo-1506102383123-c8ef1e872756?q=80&w=500&auto=format&fit=crop"
                  alt="Mall location map"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <span className="text-white font-bold">Interactive Map Coming Soon</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Tedd's City Mall</h3>
                <p className="mb-4">
                  123 Shopping Avenue<br />
                  Retail District, City<br />
                  ZIP 12345
                </p>
                
                <div className="flex items-center text-mall-navy dark:text-mall-gold">
                  <Phone size={18} className="mr-2" />
                  <a href="tel:+15551234567" className="hover:underline">(555) 123-4567</a>
                </div>
                
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary mt-6 inline-flex"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoursAndLocation;
