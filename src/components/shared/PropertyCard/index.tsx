import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';

interface PropertyCardProps {
  item: {
    name: string;
    slug: string;
    location: string;
    rate: string;
    beds: number;
    baths: number;
    area: number;
    images: Array<{
      src: string;
    }>;
    featured?: boolean;
  };
}

const PropertyCard: React.FC<PropertyCardProps> = ({ item }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-dark border border-gray-200 dark:border-white/10 hover:shadow-lg transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={item.images[0]?.src || '/images/placeholder.jpg'}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {item.featured && (
          <div className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {item.name}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 mb-4 flex items-center">
          <Icon icon="mdi:map-marker" className="mr-1" />
          {item.location}
        </p>
        <div className="flex items-center justify-between border-t border-gray-100 dark:border-white/10 pt-4">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Icon icon="mdi:bed-king" className="mr-1" />
            {item.beds} Beds
          </div>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Icon icon="mdi:shower" className="mr-1" />
            {item.baths} Baths
          </div>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Icon icon="mdi:square" className="mr-1" />
            <span className="text-gray-500 dark:text-gray-400">
              {item.area} sqft
            </span>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-gray-500 dark:text-gray-400">$</span>
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            {item.rate}
          </span>
          <Link
            href="#"
            className="text-sm font-medium text-primary hover:underline"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
