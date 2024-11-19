"use client"
import React from 'react';
import { Timeline } from './ui/timeline';
import Image from 'next/image';
interface TimelineEntry {
    title: string;
    content: React.ReactNode;
  };
import Heading from './Heading';
  
const eduData:TimelineEntry[]=[
    {
        title:"2024",
        content:(
            <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-xl font-normal mb-4">
            Government College of Engineering Aurangabad
            </p>
            <p className='text-neutral-800 dark:text-neutral-300 text-md md:text-lg font-normal mb-2'> Master of Computer Applications - MCAMaster of Computer Applications - MCA
            </p>
            <p className='text-neutral-800 dark:text-neutral-500 text-sm md:text-md font-normal mb-2'>
            From: Sep 2024 To: May 2026
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/gecaLogo.png"
                alt="geca logo"
                width={300}
                height={300}
                className="rounded-lg bg-white object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
            </div>
        )
    },
    {
        title:"2021",
        content:(
            <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-xl font-normal mb-4">
            Dr. Babasaheb Ambedkar Marathwada University, Aurangabad
            </p>
            <p className='text-neutral-800 dark:text-neutral-300 text-md md:text-lg font-normal mb-2'> 
            Bachelor of Computer ScienceBachelor of Computer Science
            </p>
            <p className='text-neutral-800 dark:text-neutral-500 text-sm md:text-md font-normal mb-2'>
                From: Oct 2021 To: Jun 2024
            </p>
            <p className='text-neutral-800 dark:text-neutral-300 text-sm md:text-md font-normal mb-2'>
                CGPA: 8.3
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/bamuLogo.jpeg"
                alt="bamu logo"
                width={300}
                height={300}
                className="rounded-lg bg-white object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
            </div>
        )
    },
    {
        title:"2019",
        content:(
            <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-xl font-normal mb-4">
                Maulana Azad College of Arts,commerce & Science, Roza Baug
            </p>
            <p className='text-neutral-800 dark:text-neutral-300 text-md md:text-lg font-normal mb-2'> 
                Higher Secondary , Science
            </p>
            <p className='text-neutral-800 dark:text-neutral-500 text-sm md:text-md font-normal mb-2'>
                From: Jun 2019 To: Jun 2021
            </p>
            <p className='text-neutral-800 dark:text-neutral-300 text-sm md:text-md font-normal mb-2'>
                Percentage: 91.67%
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/azadLogo.webp"
                alt="azad logo"
                width={300}
                height={300}
                className="rounded-lg object-contain bg-white h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
            </div>
        )
    },
]
function Education() {
  return (
    <div className="px-10 py-32 w-full h-full bg-neutral-200 dark:bg-black dark:bg-dot-white/[0.2] bg-dot-neutral-700/[0.2]" id='Education'>
          <Heading>Education</Heading>
        <Timeline data={eduData} />
    </div>
  )
}

export default Education