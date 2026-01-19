import { Metadata } from 'next';
import ServicesSection from '@/components/Services';

export const metadata: Metadata = {
  title: 'Our Services - Sunrise Advertising',
  description: 'Explore our comprehensive range of outdoor advertising solutions and services',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-24">
      <section className="py-20 bg-gray-50 dark:bg-dark/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-dark dark:text-white mb-4">
              Our Services
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive outdoor advertising solutions tailored to your brand&apos;s needs
            </p>
          </div>
          <ServicesSection />
        </div>
      </section>
    </main>
  );
}
