import { Icon } from '@iconify/react';
import Image from 'next/image';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ: React.FC = () => {
    return (
        <section id='faqs'>
            <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>
                <div className="grid lg:grid-cols-2 gap-10 ">
                    <div className='lg:mx-0 mx-auto'>
                        <Image
                            src="/images/faqs/faq-image.png"
                            alt='image'
                            width={680}
                            height={644}
                            className='lg:w-full'
                            unoptimized={true}
                        />
                    </div>
                    <div className='lg:px-12'>
                        <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2">
                            <Icon icon="ph:house-simple-fill" className="text-2xl text-primary " />
                            FAQs
                        </p>
                        <h2 className='lg:text-52 text-40 leading-[1.2] font-medium text-dark dark:text-white'>
                            Everything about Homely homes
                        </h2>
                        <p className='text-dark/50 dark:text-white/50 pr-20'>
                            We know that buying, selling, or investing in real estate can be overwhelming. Here are some frequently asked questions to help guide you through the process
                        </p>
                        <div className="my-8">
                            <Accordion type="single" defaultValue="item-1" collapsible className="w-full flex flex-col gap-6">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>1. Can I personalize my homely home?</AccordionTrigger>
                                    <AccordionContent>
                                        Discover a diverse range of premium properties, from luxurious apartments to spacious villas, tailored to your needs.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>2. Where can I find homely homes?</AccordionTrigger>
                                    <AccordionContent>
                                        Discover a diverse range of premium properties, from luxurious apartments to spacious villas, tailored to your needs.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>3. What steps to buy a homely?</AccordionTrigger>
                                    <AccordionContent>
                                        Discover a diverse range of premium properties, from luxurious apartments to spacious villas, tailored to your needs.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
