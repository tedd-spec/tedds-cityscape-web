
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

export type Event = {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
};

type EventCardProps = {
  event: Event;
};

const EventCard = ({ event }: EventCardProps) => {
  return (
    <Link to={`/events/${event.id}`}>
      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md h-full card-hover">
        <div className="relative h-48">
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="font-bold text-lg mb-2">{event.title}</h3>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
            <Calendar size={16} className="mr-2 text-mall-gold" />
            <span>{event.date} • {event.time}</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
            {event.location}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
            {event.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
