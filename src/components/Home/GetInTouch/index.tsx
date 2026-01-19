import Link from 'next/link';

const GetInTouch: React.FC = () => {
    return (
        <section>
            <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>
                <div className="relative rounded-t-2xl overflow-hidden">
                    <video
                        className="w-full absolute top-0 left-0 object-cover -z-10"
                        autoPlay
                        loop
                        muted
                        aria-label="Video background showing luxurious real estate"
                    >
                        <source src="https://videos.pexels.com/video-files/7233782/7233782-hd_1920_1080_25fps.mp4" type="video/mp4" />
                    </video>

                    <div className="bg-black/30 lg:py-64 md:py-28 py-10">
                        <div className="flex flex-col items-center gap-8">
                            <h2 className='text-white lg:text-52 md:text-40 text-3xl max-w-3/4 text-center font-medium'>
                                Enter a realm where exquisite design and
                                timeless luxury come together.
                            </h2>
                            <Link href="#" className='bg-white py-4 px-8 rounded-full text-dark hover:bg-dark hover:text-white duration-300'>
                                Get In Touch
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full py-5 bg-primary rounded-b-2xl overflow-hidden">
                    <div className="flex items-center gap-40 animate-slide">
                        <p className='text-white whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-3 after:-right-32'>
                            GET A FREE PROPERTY VALUATION—SELL YOUR HOME WITH CONFIDENCE!
                        </p>
                        <p className='text-white whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-3 after:-right-32'>
                            BROWSE THOUSANDS OF LISTINGS IN PRIME LOCATIONS AT GREAT PRICES!
                        </p>
                        <p className='text-white whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-3 after:-right-32'>
                            GET A FREE PROPERTY VALUATION—SELL YOUR HOME WITH CONFIDENCE!
                        </p>
                        <p className='text-white whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-3 after:-right-32'>
                            BROWSE THOUSANDS OF LISTINGS IN PRIME LOCATIONS AT GREAT PRICES!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetInTouch;