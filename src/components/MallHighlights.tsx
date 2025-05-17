
import { Store, Calendar, Users } from 'lucide-react';

const MallHighlights = () => {
  const highlights = [
    {
      title: "200+ Stores",
      description: "Featuring a diverse mix of retail, dining, and entertainment options for all preferences.",
      icon: Store
    },
    {
      title: "Regular Events",
      description: "From seasonal celebrations to celebrity visits, there's always something happening.",
      icon: Calendar
    },
    {
      title: "Family Friendly",
      description: "Dedicated play areas, family restrooms, and activities for all ages.",
      icon: Users
    },
  ];

  return (
    <section className="bg-mall-navy text-white py-16">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Why Visit <span className="text-mall-gold">Tedd's City Mall</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="bg-white/10 p-8 rounded-lg text-center hover:bg-white/15 transition-colors">
              <div className="flex justify-center mb-6">
                <item.icon size={48} className="text-mall-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MallHighlights;
