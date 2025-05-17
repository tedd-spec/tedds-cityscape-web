
import { useState, useEffect } from "react";
import EventCard, { Event } from "../components/EventCard";

// Mock data
const allEvents: Event[] = [
  {
    id: 1,
    title: "Summer Fashion Show",
    date: "June 15, 2025",
    time: "6:00 PM - 8:00 PM",
    location: "Central Court",
    description: "Join us for a spectacular showcase of summer collections from our top fashion retailers.",
    image: "https://images.unsplash.com/photo-1596466107728-8e793f0a2ff0?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Weekend Food Festival",
    date: "June 22-23, 2025",
    time: "11:00 AM - 9:00 PM",
    location: "Food Court",
    description: "Sample delicious cuisine from around the world with special tasting menus and chef demonstrations.",
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Kids Day Fun Zone",
    date: "July 1, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Level 2 Play Area",
    description: "A fun-filled day for children with games, face painting, balloon artists, and special performances.",
    image: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Tech & Gaming Expo",
    date: "July 8-10, 2025",
    time: "10:00 AM - 8:00 PM",
    location: "Event Hall",
    description: "Experience the latest in technology and gaming with interactive displays and competitions.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Book Signing: Local Author",
    date: "July 15, 2025",
    time: "2:00 PM - 4:00 PM",
    location: "Books & Beyond",
    description: "Meet bestselling author Jane Smith for a reading and book signing of her latest novel.",
    image: "https://images.unsplash.com/photo-1549122728-f519709caa9c?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Fitness Boot Camp",
    date: "Every Saturday",
    time: "8:00 AM - 9:00 AM",
    location: "Mall Walking Track",
    description: "Join our certified trainers for a free morning workout session before the mall opens.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=500&auto=format&fit=crop"
  }
];

// Month filter options
const months = [
  "All",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const Events = () => {
  const [events, setEvents] = useState<Event[]>(allEvents);
  const [selectedMonth, setSelectedMonth] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter events based on selected month and search query
  useEffect(() => {
    let filteredEvents = allEvents;

    // Apply month filter
    if (selectedMonth !== "All") {
      filteredEvents = filteredEvents.filter(event => 
        event.date.includes(selectedMonth)
      );
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredEvents = filteredEvents.filter(event => 
        event.title.toLowerCase().includes(query) || 
        event.description.toLowerCase().includes(query) ||
        event.location.toLowerCase().includes(query)
      );
    }

    setEvents(filteredEvents);
  }, [selectedMonth, searchQuery]);

  return (
    <div className="min-h-screen py-12">
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Upcoming Events</h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          Stay updated with the latest happenings at Tedd's City Mall. From seasonal celebrations to special performances, there's always something exciting going on.
        </p>

        {/* Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-12">
          <div className="flex flex-col md:flex-row gap-4 md:items-center">
            <div className="w-full md:w-1/3">
              <label className="block text-sm font-medium mb-2">Search Events</label>
              <input
                type="text"
                placeholder="Search events..."
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-mall-gold"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/3">
              <label className="block text-sm font-medium mb-2">Filter by Month</label>
              <select
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-mall-gold bg-white dark:bg-gray-800"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
              >
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        {events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium mb-2">No events found</h3>
            <p className="text-gray-600 dark:text-gray-400">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
