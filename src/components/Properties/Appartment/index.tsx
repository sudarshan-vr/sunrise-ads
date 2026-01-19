import PropertyCard from '@/components/shared/PropertyCard'
import { propertyHomes } from '@/app/api/propertyhomes'

const Appartment: React.FC = () => {
    return (
        <section className='pt-0!'>
            <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
                    {propertyHomes.slice(6, 9).map((item, index) => (
                        <div key={index} className=''>
                            <PropertyCard item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Appartment;
