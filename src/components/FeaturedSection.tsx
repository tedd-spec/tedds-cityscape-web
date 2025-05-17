
import { useState } from 'react';
import StoreCard, { Store } from './StoreCard';
import { Link } from 'react-router-dom';

// Mock data
const featuredStores: Store[] = [
  {
    id: 1,
    name: "Fashion Forward",
    category: "Apparel",
    description: "Latest trends in men's and women's clothing with brands from around the world.",
    logo: "https://images.unsplash.com/photo-1507553532144-b9df5e38c8d1?q=80&w=400&auto=format&fit=crop",
    featured: true
  },
  {
    id: 2,
    name: "Tech Universe",
    category: "Electronics",
    description: "Cutting-edge technology, gadgets, and accessories for tech enthusiasts.",
    logo: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=400&auto=format&fit=crop",
    featured: true
  },
  {
    id: 3,
    name: "Home Elegance",
    category: "Home Decor",
    description: "Beautiful furniture and home accessories to make your space special.",
    logo: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=400&auto=format&fit=crop",
    featured: true
  },
  {
    id: 4,
    name: "Culinary Corner",
    category: "Dining",
    description: "Delicious international cuisine in an elegant setting with stunning views.",
    logo: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=400&auto=format&fit=crop",
    featured: true
  }
];

const FeaturedSection = () => {
  const [stores] = useState<Store[]>(featuredStores);

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">
            Featured <span className="text-mall-gold">Stores</span>
          </h2>
          <Link 
            to="/stores" 
            className="text-mall-navy dark:text-mall-gold font-medium hover:underline"
          >
            View All Stores
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stores.map((store) => (
            <StoreCard key={store.id} store={store} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
