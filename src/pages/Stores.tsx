
import { useState, useEffect } from "react";
import StoreCard, { Store } from "../components/StoreCard";

// Mock data
const allStores: Store[] = [
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
  },
  {
    id: 5,
    name: "Sporty Gear",
    category: "Sports & Fitness",
    description: "Equipment and apparel for every sport and fitness activity.",
    logo: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Books & Beyond",
    category: "Books & Gifts",
    description: "A vast collection of books, stationery, and unique gift items.",
    logo: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 7,
    name: "Health Haven",
    category: "Health & Beauty",
    description: "Premium skincare, cosmetics, and wellness products.",
    logo: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 8,
    name: "Toy World",
    category: "Children",
    description: "Educational and entertaining toys for children of all ages.",
    logo: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=400&auto=format&fit=crop"
  }
];

// Category options
const categories = [
  "All",
  "Apparel",
  "Electronics",
  "Home Decor",
  "Dining",
  "Sports & Fitness",
  "Books & Gifts",
  "Health & Beauty",
  "Children"
];

const Stores = () => {
  const [stores, setStores] = useState<Store[]>(allStores);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter stores based on selected category and search query
  useEffect(() => {
    let filteredStores = allStores;

    // Apply category filter
    if (selectedCategory !== "All") {
      filteredStores = filteredStores.filter(store => store.category === selectedCategory);
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredStores = filteredStores.filter(store => 
        store.name.toLowerCase().includes(query) || 
        store.description.toLowerCase().includes(query)
      );
    }

    setStores(filteredStores);
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen py-12">
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Our Stores</h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          Discover a diverse collection of retail, dining, and entertainment options at Tedd's City Mall.
        </p>

        {/* Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-12">
          <div className="flex flex-col md:flex-row gap-4 md:items-center">
            <div className="w-full md:w-1/3">
              <label className="block text-sm font-medium mb-2">Search Stores</label>
              <input
                type="text"
                placeholder="Search by name..."
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-mall-gold"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/3">
              <label className="block text-sm font-medium mb-2">Filter by Category</label>
              <select
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-mall-gold bg-white dark:bg-gray-800"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Store Grid */}
        {stores.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {stores.map((store) => (
              <StoreCard key={store.id} store={store} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium mb-2">No stores found</h3>
            <p className="text-gray-600 dark:text-gray-400">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stores;
