import { Metadata } from 'next';
import GallerySection from '@/components/Gallery';

export const metadata: Metadata = {
  title: 'Our Gallery - Sunrise Advertising',
  description: 'Explore our portfolio of stunning advertising campaigns and installations',
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen pt-24">
      <section className="py-20 bg-white dark:bg-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-dark dark:text-white mb-4">
              Our Gallery
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our collection of successful advertising campaigns and installations
            </p>
          </div>
          <GallerySection />
        </div>
      </section>
    </main>
  );
}
