"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const advertisingServices = [
  {
    id: 1,
    title: "Outdoor Advertising",
    description: "High-impact outdoor advertising solutions that capture attention and maximize brand visibility in high-traffic areas.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    features: ["Billboards", "Hoardings", "Transit Media", "Street Furniture"]
  },
  {
    id: 2,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies to grow your online presence and reach your target audience effectively.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    features: ["SEO", "Social Media", "PPC", "Content Marketing"]
  },
  {
    id: 3,
    title: "Branding & Design",
    description: "Creative branding solutions that tell your unique story and create lasting impressions.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    features: ["Logo Design", "Brand Identity", "Print Collateral", "Packaging"]
  }
];

const FeaturedProperty: React.FC = () => {
  const [api, setApi] = React.useState<CarouselApi | undefined>(undefined);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  
  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1));
  }, [api]);

  const handleDotClick = (index: number) => api?.scrollTo(index);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Our Advertising Solutions
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Innovative advertising strategies to elevate your brand
          </p>
        </div>
        
        {/* Mobile Carousel (hidden on md and up) */}
        <div className="md:hidden">
          <Carousel setApi={setApi} opts={{ loop: true }}>
            <CarouselContent>
              {advertisingServices.map((service) => (
                <CarouselItem key={service.id}>
                  <ServiceCard service={service} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center mt-6 gap-4">
              <button
                onClick={() => api?.scrollPrev()}
                className="p-2 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-md"
                aria-label="Previous service"
              >
                <Icon icon="ph:caret-left" className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                {Array.from({ length: count }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      current === index + 1 ? "bg-primary w-4" : "bg-gray-300 dark:bg-gray-600"
                    }`}
                    aria-label={`Go to service ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => api?.scrollNext()}
                className="p-2 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-md"
                aria-label="Next service"
              >
                <Icon icon="ph:caret-right" className="w-5 h-5" />
              </button>
            </div>
          </Carousel>
        </div>

        {/* Desktop Grid (hidden on mobile) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advertisingServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        <div className="lg:pt-10 px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose Our Advertising Solutions?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            At Sunrise Advertising, we combine creativity with data-driven strategies to deliver exceptional results for your brand. Our team of experts is dedicated to helping you reach your target audience effectively.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Icon icon="ph:target" className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Targeted Reach</h3>
                <p className="text-gray-600 dark:text-gray-400">Precision targeting to reach your ideal customers.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Icon icon="ph:chart-line-up" className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Proven Results</h3>
                <p className="text-gray-600 dark:text-gray-400">Data-driven strategies that deliver measurable outcomes.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Icon icon="ph:lightbulb" className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Creative Excellence</h3>
                <p className="text-gray-600 dark:text-gray-400">Innovative designs that make your brand stand out.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-10">
            <Button asChild size="lg">
              <Link href="/contact" className="gap-2">
                Get a Free Consultation
                <Icon icon="ph:arrow-right" className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Service Card Component
const ServiceCard = ({ service }: { service: typeof advertisingServices[0] }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
    <div className="relative h-64 w-full">
      <Image
        src={service.image}
        alt={service.title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
    <div className="p-6 flex-1 flex flex-col">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        {service.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {service.description}
      </p>
      <div className="mt-auto">
        <div className="flex flex-wrap gap-2 mb-4">
          {service.features.map((feature, idx) => (
            <span key={idx} className="text-sm px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-200">
              {feature}
            </span>
          ))}
        </div>
        <Button asChild variant="outline" className="w-full">
          <Link href="/contact">
            Get Started
          </Link>
        </Button>
      </div>
    </div>
  </div>
);

export default FeaturedProperty;
