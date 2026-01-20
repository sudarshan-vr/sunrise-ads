import Hero from '@/components/Home/Hero'
import FeaturedProperty from '@/components/Home/FeaturedProperty'
import Testimonial from '@/components/Home/Testimonial'
import Gallery from '@/components/Home/Gallery'

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="py-20">
        <FeaturedProperty />
      </section>
      <section className="py-20 bg-gray-50 dark:bg-dark/50">
        <Testimonial />
      </section>
      <section id="gallery" className="py-20">
        <Gallery />
      </section>
    </main>
  )
}
