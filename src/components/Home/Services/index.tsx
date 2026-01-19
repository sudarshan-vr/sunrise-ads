import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const Categories = () => {
  return (
    <section className="relative overflow-x-hidden">
      <div className="absolute left-0 top-0">
        <Image
          src="/images/categories/Vector.svg"
          alt="vector"
          width={800}
          height={1050}
          className="dark:hidden"
          unoptimized={true}
        />
        <Image
          src="/images/categories/Vector-dark.svg"
          alt="vector"
          width={800}
          height={1050}
          className="hidden dark:block"
          unoptimized={true}
        />
      </div>
      <div className="container max-w-8xl mx-auto px-4 sm:px-5 2xl:px-0 relative z-10">
        <div className="grid grid-cols-12 items-center gap-10">
          <div className="lg:col-span-6 col-span-12">
            <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2.5">
              <Icon icon="ph:house-simple-fill" className="text-2xl text-primary " />
              About us
            </p>
            <h2 className="lg:text-52 text-40 mt-4 mb-2 lg:max-w-full font-medium leading-[1.2] text-dark dark:text-white">
              Explore best testimonials
              with expert services.
            </h2>
            <p className="text-dark/50 dark:text-white/50 text-lg lg:max-w-full leading-[1.3] md:max-w-3/4">
              Discover a diverse range of premium properties, from luxurious apartments  to spacious villas, tailored to your needs
            </p>
            <Link href="/properties" className="py-4 px-8 bg-primary text-base leading-4 block w-fit text-white rounded-full font-semibold mt-8 hover:bg-dark duration-300">
              View Gallery
            </Link>
          </div>
          <div className="lg:col-span-6 col-span-12">
            <div className="relative rounded-2xl overflow-hidden group w-full">
              <Link href="/residential-homes">
                <Image
                  src="https://cdn.gamma.app/dcr8q2isiem5xdc/imports/pptx/73e44e08c87f52506b262017b7725d78/v2/fbf9590d54c04b138b086686f3649042/extracted/ppt/media/image17.png"
                  alt="villas"
                  width={680}
                  height={386}
                  className="w-full h-auto max-w-full"
                  unoptimized={true}
                />
              </Link>
              <Link href="/residential-homes" className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 duration-500">
                <div className="flex justify-end mt-6 mr-6">
                  <div className="bg-white text-dark rounded-full w-fit p-4">
                    <Icon icon="ph:arrow-right" width={24} height={24} />
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-white text-2xl">
                    Hordings
                  </h3>
                  <p className="text-white/80 text-base leading-6">
                    Experience elegance and comfort with our exclusive luxury villas, designed  for sophisticated living.
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 col-span-12">
            <div className="relative rounded-2xl overflow-hidden group w-full">
              <Link href="/luxury-villa">
                <Image
                  src="https://cdn.gamma.app/dcr8q2isiem5xdc/imports/pptx/73e44e08c87f52506b262017b7725d78/v2/fbf9590d54c04b138b086686f3649042/extracted/ppt/media/image30.jpeg"
                  alt="villas"
                  width={680}
                  height={386}
                  className="w-full h-auto max-w-full"
                  unoptimized={true}
                />
              </Link>
              <Link href="/luxury-villa" className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 duration-500">
                <div className="flex justify-end mt-6 mr-6">
                  <div className="bg-white text-dark rounded-full w-fit p-4">
                    <Icon icon="ph:arrow-right" width={24} height={24} />
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-white text-2xl">
                    Pole Kiosks
                  </h3>
                  <p className="text-white/80 text-base leading-6">
                    Experience elegance and comfort with our exclusive luxury villas, designed for sophisticated living.
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-3 col-span-6 w-full">
            <div className="relative rounded-2xl overflow-hidden group w-full">
              <Link href="/appartment">
                <Image
                  src="https://cdn.gamma.app/dcr8q2isiem5xdc/imports/pptx/73e44e08c87f52506b262017b7725d78/v2/fbf9590d54c04b138b086686f3649042/extracted/ppt/media/image8.jpeg"
                  alt="villas"
                  width={320}
                  height={386}
                  className="w-full h-auto max-w-full"
                  unoptimized={true}
                />
              </Link>
              <Link href="/appartment" className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 duration-500">
                <div className="flex justify-end mt-6 mr-6">
                  <div className="bg-white text-dark rounded-full w-fit p-4">
                    <Icon icon="ph:arrow-right" width={24} height={24} />
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-white text-2xl">
                    Gantry Branding
                  </h3>
                  <p className="text-white/80 text-base leading-6">
                    Experience elegance and comfort with our exclusive luxury villas, designed  for sophisticated living.
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-3 col-span-6 w-full">
            <div className="relative rounded-2xl overflow-hidden group w-full">
              <Link href="/office-spaces">
                <Image
                  src="https://cdn.gamma.app/dcr8q2isiem5xdc/imports/pptx/73e44e08c87f52506b262017b7725d78/v2/fbf9590d54c04b138b086686f3649042/extracted/ppt/media/image26.jpeg"
                  alt="office"
                  width={320}
                  height={370}
                  className="w-full h-auto max-w-full"
                  unoptimized={true}
                />
              </Link>
              <Link href="/office-spaces" className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 duration-500">
                <div className="flex justify-end mt-6 mr-6">
                  <div className="bg-white text-dark rounded-full w-fit p-4">
                    <Icon icon="ph:arrow-right" width={24} height={24} />
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-white text-2xl">
                    Bus Shelter Branding
                  </h3>
                  <p className="text-white/80 text-base leading-6">
                    Experience elegance and comfort with our exclusive luxury villas, designed  for sophisticated living.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
