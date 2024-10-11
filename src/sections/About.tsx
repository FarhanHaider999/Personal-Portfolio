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
import tailwindIcon from "@/assets/icons/tailwind-css.svg";
import gsapIcon from "@/assets/icons/gsap.svg";
import proficepic from "@/assets/images/dp.jpg"
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
    title: "Tailwind CSS",
    iconType: tailwindIcon,
  },
  {
    title: "GSAP",
    iconType: gsapIcon,
  },
  {
    title: "Redux",
    iconType: reduxIcon,
  },
  {
    title: "Express",
    iconType: expressIcon,
  },
  {
    title: "Figma",
    iconType: figmaIcon,
  },
  
];


export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-10 lg:py-20">
      <div className="container" id="About">
        <SectionHeader eyebrow="About Me" />
        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
          <Card className="p-8 md:col-span-5 lg:col-span-3 bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-400 shadow-lg rounded-lg">
            <div className="flex flex-col lg:flex-row items-center lg:items-center gap-8">
              <div className="lg:w-1/3 flex justify-center lg:justify-center">
                <div className="relative">
                  <Image 
                    src={proficepic} 
                    alt={"Your Profile"} 
                    width={150} 
                    height={150} 
                    className="rounded-full shadow-xl object-cover border-4 border-amber-600"
                  />
                </div>
              </div>
              <div className="lg:w-2/3 text-gray-900 space-y-4 text-center lg:text-left">
                <h2 className="text-3xl font-bold">Hi, I&apos;m Farhan Haider</h2>
                <p className="text-lg text-justify tracking-tighter">
                  I&apos;m a <span className="font-bold text-amber-700">Web Developer</span> skilled in creating visually engaging and user-centered experiences, with a strong focus on <span className="font-bold text-amber-700">UI/UX Design</span> that transforms ideas into dynamic and interactive interfaces.
                </p>
                <p className="text-justify">
                  My journey began with a Bachelor&apos;s degree in Information Technology, and I&apos;ve since honed my skills in both design and coding. Whether designing captivating user experiences or implementing dynamic features, I tackle each project with a blend of creativity and meticulousness.
                </p>
                <p className="text-justify">
                  Based in Pakistan, I&apos;m always eager to connect with potential collaborators. If you&apos;re looking for someone who&apos;s as dedicated to web development as they are to crafting delightful user experiences, let&apos;s get in touch!
                </p>
              </div>
            </div>
          </Card>
        </div>
        <div className="mt-10 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-4 lg:col-span-3">
              <CardHeader title="Frameworks and Tools I Work With" className="" />
              <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]" />
              <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:20s]" />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            {/* Additional content can go here */}
          </div>
        </div>
      </div>
    </div>
  );
};

