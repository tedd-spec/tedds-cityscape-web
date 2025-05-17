
import { useState } from 'react';
import EventCard, { Event } from './EventCard';
import { Link } from 'react-router-dom';

// Mock data
const upcomingEvents: Event[] = [
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
  }
];

const EventsSection = () => {
  const [events] = useState<Event[]>(upcomingEvents);

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">
            Upcoming <span className="text-mall-gold">Events</span>
          </h2>
          <Link 
            to="/events" 
            className="text-mall-navy dark:text-mall-gold font-medium hover:underline"
          >
            View All Events
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
