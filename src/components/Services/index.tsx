'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: 'Hoardings',
    description: 'High-impact outdoor advertising solutions that capture attention and maximize brand visibility in high-traffic areas.',
    image: 'https://cdn.gamma.app/dcr8q2isiem5xdc/imports/pptx/73e44e08c87f52506b262017b7725d78/v2/fbf9590d54c04b138b086686f3649042/extracted/ppt/media/image17.png',
    link: '/services/hoardings'
  },
  {
    id: 2,
    title: 'Pole Kiosks',
    description: 'Strategic urban advertising placements that deliver your message at eye level in busy pedestrian areas.',
    image: 'https://cdn.gamma.app/dcr8q2isiem5xdc/imports/pptx/73e44e08c87f52506b262017b7725d78/v2/fbf9590d54c04b138b086686f3649042/extracted/ppt/media/image30.jpeg',
    link: '/services/pole-kiosks'
  },
  {
    id: 3,
    title: 'Gantry Branding',
    description: 'Large-scale branding solutions for maximum visibility on highways and major roadways.',
    image: 'https://cdn.gamma.app/dcr8q2isiem5xdc/imports/pptx/73e44e08c87f52506b262017b7725d78/v2/fbf9590d54c04b138b086686f3649042/extracted/ppt/media/image8.jpeg',
    link: '/services/gantry-branding'
  },
  {
    id: 4,
    title: 'Bus Shelter Branding',
    description: 'Strategic advertising in high footfall areas that combines visibility with extended dwell time.',
    image: 'https://cdn.gamma.app/dcr8q2isiem5xdc/imports/pptx/73e44e08c87f52506b262017b7725d78/v2/fbf9590d54c04b138b086686f3649042/extracted/ppt/media/image26.jpeg',
    link: '/services/bus-shelter-branding'
  },
  // Add more services as needed
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ServicesSection() {
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {services.map((service) => (
        <motion.div 
          key={service.id} 
          className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          variants={item}
        >
          <div className="relative h-48 w-full">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-dark dark:text-white mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {service.description}
            </p>
            <Link 
              href={service.link}
              className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1.5 transition-colors"
            >
              Learn more
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </Link>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
