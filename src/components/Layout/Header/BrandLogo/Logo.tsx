import Image from 'next/image'

const Logo: React.FC = () => {
  return (
    <div className="relative h-12 w-12">
      <Image
        src='/images/hero/logo.svg'
        alt='Sunrise Advertising Logo'
        fill
        style={{ marginTop: '-0.22rem' }}
        className='object-contain'
        unoptimized={true}
        priority
      />
    </div>
  )
}

export default Logo
