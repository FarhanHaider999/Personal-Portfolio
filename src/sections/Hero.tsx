"use client";

import memojiImage from '@assets/images/memoji-computer.png';
import Image from 'next/image';
import ArrowDown from '@assets/icons/arrow-down.svg';
import grainImage from '@assets/images/grain.jpg';
import StarIcon from '@assets/icons/star.svg';
import SparkleIcon from '@assets/icons/sparkle.svg'
import { HeroPulse } from '@/components/HeroPulse';

const scrollToProjects = () => {
  console.log('Button clicked'); 
  const element = document.getElementById('projects');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};


const scrollToContact = () => {
  console.log('Connecting button clicked'); 
  const element = document.getElementById('Contact');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const HeroSection = () => {
  return (
    <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
      <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] '>
      <div className='absolute inset-0 -z-30 opacity-5' 
      style={{
        backgroundImage: `url(${grainImage.src})`
      }}>
      </div>
      <div className=' size-[620px] hero-ring' />
      <div className=' size-[820px] hero-ring' />
      <div className=' size-[1020px] hero-ring' />
      <div className=' size-[1220px] hero-ring' />
         {/* <HeroPulse size={430} rotation={-14} shouldOrbit orbitDuration='30s' shouldSpin spinDuration='3s'>
          <SparkleIcon className='size-8 text-amber-300/20' />
         </HeroPulse>
         <HeroPulse size={440} rotation={79} shouldOrbit orbitDuration='32s' shouldSpin spinDuration='3s'>
          <SparkleIcon className='size-5 text-amber-300/20' />
         </HeroPulse>
         <HeroPulse size={520} rotation={-41} shouldOrbit orbitDuration='34s'>
          <div className='size-2 rounded-full bg-amber-300/20' />
         </HeroPulse>
         <HeroPulse size={530} rotation={178} shouldOrbit orbitDuration='36s' shouldSpin spinDuration='3s'>
          <SparkleIcon className='size-10 text-amber-300/20' />
         </HeroPulse>
         <HeroPulse size={550} rotation={20} shouldOrbit orbitDuration='38s' shouldSpin spinDuration='6s'>
          <StarIcon className='size-12 text-amber-300' />
         </HeroPulse>
         <HeroPulse size={590} rotation={98} shouldOrbit orbitDuration='40s' shouldSpin spinDuration='6s'>
          <StarIcon className='size-8 text-amber-300'/>
         </HeroPulse>
         <HeroPulse size={600} rotation={10} shouldOrbit orbitDuration='40s' shouldSpin spinDuration='6s'>
          <StarIcon className='size-8 text-amber-300'/>
         </HeroPulse>
         <HeroPulse size={650} rotation={-5} shouldOrbit orbitDuration='42s'>
          <div className='size-2 rounded-full bg-amber-300/20' />
         </HeroPulse>
         <HeroPulse size={710} rotation={144} shouldOrbit orbitDuration='44s'>
          <SparkleIcon className='size-14 text-amber-300/20' />
         </HeroPulse>
         <HeroPulse size={690} rotation={80} shouldOrbit orbitDuration='40s' shouldSpin spinDuration='3s'>
          <SparkleIcon className='size-14 text-amber-300/20' />
         </HeroPulse>
         <HeroPulse size={800} rotation={-72} shouldOrbit orbitDuration='48s' shouldSpin spinDuration='6s'>
        <StarIcon className='size-28 text-amber-300' />
         </HeroPulse>  */}

<HeroPulse size={420} rotation={-10} shouldOrbit orbitDuration='30s' shouldSpin spinDuration='4s'>
  <SparkleIcon className='size-6 text-amber-300/20' />
</HeroPulse>
<HeroPulse size={450} rotation={60} shouldOrbit orbitDuration='32s' shouldSpin spinDuration='5s'>
  <SparkleIcon className='size-7 text-amber-300/20' />
</HeroPulse>
<HeroPulse size={500} rotation={-30} shouldOrbit orbitDuration='34s'>
  <div className='size-4 rounded-full bg-amber-300/20' />
</HeroPulse>
<HeroPulse size={540} rotation={160} shouldOrbit orbitDuration='36s' shouldSpin spinDuration='4s'>
  <SparkleIcon className='size-10 text-amber-300/20' />
</HeroPulse>
<HeroPulse size={560} rotation={25} shouldOrbit orbitDuration='38s' shouldSpin spinDuration='5s'>
  <StarIcon className='size-12 text-amber-300' />
</HeroPulse>
<HeroPulse size={590} rotation={100} shouldOrbit orbitDuration='40s' shouldSpin spinDuration='6s'>
  <StarIcon className='size-10 text-amber-300'/>
</HeroPulse>
<HeroPulse size={620} rotation={15} shouldOrbit orbitDuration='42s' shouldSpin spinDuration='5s'>
  <StarIcon className='size-10 text-amber-300'/>
</HeroPulse>
<HeroPulse size={660} rotation={-8} shouldOrbit orbitDuration='44s'>
  <div className='size-4 rounded-full bg-amber-300/20' />
</HeroPulse>
<HeroPulse size={700} rotation={150} shouldOrbit orbitDuration='46s'>
  <SparkleIcon className='size-12 text-amber-300/20' />
</HeroPulse>
<HeroPulse size={730} rotation={70} shouldOrbit orbitDuration='48s' shouldSpin spinDuration='5s'>
  <SparkleIcon className='size-14 text-amber-300/20' />
</HeroPulse>
<HeroPulse size={800} rotation={-65} shouldOrbit orbitDuration='50s' shouldSpin spinDuration='6s'>
  <StarIcon className='size-28 text-amber-300' />
</HeroPulse>


         </div>
      <div className="container">
        <div className='flex flex-col items-center'>
        <Image src={memojiImage} className="size-[100px]" alt="Person Laptop avatar" />
        <div className='bg-gray-950 border border-gray-900 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
          <div className='bg-green-500 size-2.5 rounded-full relative'>
            <div className='bg-green-500 absolute inset-0 rounded-full animate-ping-large'></div>
          </div>
          <div className='text-sm font-medium'>Available</div>
        </div>
      </div>
        <div className='max-w-lg mx-auto'>
        <h1 className='font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-600 text-3xl md:text-5xl text-center mt-8 tracking-wide leading-tight md:leading-normal'>
  Hey I&apos;m Farhan Haider
</h1>

        <p className='mt-4 text-center text-white/60 md:text-lg'>
        Software Engineer with a focus on building engaging & accessible digital experinces.
        </p>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
        <button
            onClick={scrollToProjects}
            style={{ cursor: 'pointer', zIndex: '10' }}
            className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'
          >
            <span className='font-semibold'>Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button onClick={scrollToContact}
            style={{ cursor: 'pointer', zIndex: '10' }} className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl' >
            <span className='font-semibold'>Start a Conversation</span>
          </button>
        </div>
      </div>
    </div>
  );
};
