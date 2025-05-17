
import { Link } from 'react-router-dom';

export type Store = {
  id: number;
  name: string;
  category: string;
  description: string;
  logo: string;
  featured?: boolean;
};

type StoreCardProps = {
  store: Store;
};

const StoreCard = ({ store }: StoreCardProps) => {
  return (
    <Link to={`/stores/${store.id}`} className="block">
      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md card-hover">
        <div className="p-6 flex flex-col items-center">
          <img 
            src={store.logo} 
            alt={`${store.name} logo`}
            className="w-24 h-24 object-contain mb-4"
          />
          <h3 className="font-bold text-lg mb-2 text-center">{store.name}</h3>
          <span className="text-sm text-mall-gold mb-3">{store.category}</span>
          <p className="text-sm text-gray-600 dark:text-gray-300 text-center line-clamp-2">
            {store.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default StoreCard;
