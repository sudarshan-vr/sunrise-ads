import React, { FC } from "react";
import { Icon } from "@iconify/react/dist/iconify.js"

interface HeroSubProps {
    title: string;
    description: string;
    badge: string;
}

const HeroSub: FC<HeroSubProps> = ({ title, description, badge }) => {

    return (
        <>
            <section className="text-center bg-cover !pt-40 pb-20 relative overflow-x-hidden" >
                <div className='flex gap-2.5 items-center justify-center'>
                    <span>
                        <Icon
                            icon={'ph:house-simple-fill'}
                            width={20}
                            height={20}
                            className='text-primary'
                        />
                    </span>
                    <p className='text-base font-semibold text-dark/75 dark:text-white/75'>
                        {badge}
                    </p>
                </div>
                <h2 className="text-dark text-52 relative font-bold dark:text-white " >{title}</h2>
                <p className="text-lg text-dark/50 dark:text-white/50 font-normal w-full mx-auto">
                    {description}
                </p>
            </section>
        </>
    );
};

export default HeroSub;