'use client';
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import Image from "next/image";
import bookImage from "@assets/images/book-cover.png";
import ReactIcon from "@assets/icons/react.svg";
import nextIcon from "@/assets/icons/nextjs.svg";
import nodeIcon from "@/assets/icons/nodejs.svg";
import expressIcon from "@/assets/icons/expressjs.svg";
import mongodbIcon from "@/assets/icons/mongodb.svg";
import reduxIcon from "@/assets/icons/redux.svg";
import figmaIcon from "@/assets/icons/figma-svgrepo-com.svg";
import threeIcon from "@/assets/icons/Three.js.svg";
import mapImage from "@assets/images/map.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import {motion} from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Next.js",
    iconType: nextIcon,
  },
  {
    title: "Node.js",
    iconType: nodeIcon,
  },
  {
    title: "Express.js",
    iconType: expressIcon,
  },
  {
    title: "MongoDB",
    iconType: mongodbIcon,
  },
  {
    title: "Three.js",
    iconType: threeIcon,
  },
  {
    title: "Redux",
    iconType: reduxIcon,
  },
  {
    title: "Figma",
    iconType: figmaIcon,
  },
  
];

const hobbies = [
  {
    title: 'Behavioral Analysis',
    emoji: '🎥',
    left: '10%',
    top: '10%',
  },
  {
    title: 'Self-improvement',
    emoji: '🏏',
    left: '40%',
    top: '10%',
  },
  {
    title: 'Travel & Adventure',
    emoji: '✈️',
    left: '40%',
    top: '30%',
  },
  {
    title: 'Fitness',
    emoji: '🏋️‍♂️',
    left: '15%',
    top: '40%',
  },
  {
    title: 'Acting & Filmography',
    emoji: '🌌',
    left: '35%',
    top: '45%',
  },
  {
    title: 'Cryptography & Code Breaking',
    emoji: '🤖',
    left: '10%',
    top: '65%',
  },
  {
    title: 'Business & Storytelling',
    emoji: '📚',
    left: '30%',
    top: '80%',
  },
]

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28">
      <div className="container" id="About">
    <SectionHeader 
    eyebrow="About Me" 
    title="My Expertise and Interests" 
    />
    <div className="mt-20 flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:grid-cols-5 lg:grid-cols-3">
      <Card className="h-[320px] md:col-span-4 lg:col-span-3">
      <CardHeader title="Core Technologies" className=""/>
         <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]" />   
         <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:20s]"  />   
      </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
      <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
      <CardHeader title="Interests Beyond Development" className="px-6 py-6"/>
          <div className="relative flex-1" ref={constraintRef}>
            {hobbies.map(hobby => (
              <motion.div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-amber-300 to-orange-400 rounded-full py-1.5 absolute" style={{
                left: hobby.left,
                top: hobby.top,
              }}
              drag
              dragConstraints={constraintRef}
              >
                <span className="font-medium text-gray-950">{hobby.title}</span>
                

                </motion.div>
            ))}
          </div>
      </Card>
      <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1" >
        <Image src={mapImage} alt="map" className="h-full w-full object-cover transform animate-zoom [animation-duration:2s] "/>
      </Card>
      </div>
    </div>
  </div>
</div>
  );
};
