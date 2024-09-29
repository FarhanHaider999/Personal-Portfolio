import EcommerceProject from "@/assets/images/ecommerce pic.png";
import  ChatBotPic from "@/assets/images/Ai-Chatbot.png";
import FizziLandingPage from "@/assets/images/fiizipage.png";
import carpic from "@/assets/images/figmaios.png";
import fashion from "@/assets/images/fashionf.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Independent Project",
    year: "2024",
    title: "Ecommerce Store",
    results: [
      { title: "Feature-rich e-commerce website (MERN stack)" },
      { title: "Comprehensive e-commerce functionalities" },
      { title: "Secure PayPal integration" },
    ],
    link: "#",
    image: EcommerceProject,
  },
  {
    company: "Independent Project",
    year: "2024",
    title: "Modern AI-Chatbot",
    results: [
      { title: "Built with Next.js, Vercel AI SDK, and RAGChat SDK" },
      { title: "Real-time website interaction with AI" },
      { title: "Serverless architecture for optimized operations" },
    ],
    link: "#",
    image: ChatBotPic,
  },
  {
    company: "Independent Project",
    year: "2024",
    title: "Scroll Animated Website",
    results: [
      { title: "Applied Three.js for advanced 3D rendering" },
      { title: "Implemented GSAP and React for animation" },
    ],
    link: "https://fizzi-demo.vercel.app/",
    image: FizziLandingPage,
  },
  {
    company: "Independent Project",
    year: "2024",
    title: "iOS 18 Car Control App Design",
    results: [
      { title: "Designed a car control app with complex layouts" },
      { title: "Used Apple’s guidelines and SF Symbols" },
    ],
    link: "https://www.figma.com/design/EdmXRztk0dVB3gz6E1WZue/ios-18-design?node-id=0-1&t=qRl9ayhHWvInDjcI-1",
    image: carpic,
  },
  {
    company: "Independent Project",
    year: "2024",
    title: "Fashion Website",
    results: [
      { title: "Designed a fashion e-commerce website focusing on vibrant visuals." },
      { title: "user navigation with strategic placements for intuitive shopping experience" },
    ],
    link: "https://www.figma.com/design/yPnovcH72BwYJ3N9vCDRyU/Fashion-Site-Design?node-id=0-1&t=C4Tciw36OZDu2eNl-1",
    image: fashion,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container" id="projects">
        <SectionHeader eyebrow="Real-world Applications" title="Recent Projects" description="Explore my creations in design and development"/>
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
             key={project.title} className=" px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky" style= {{
              top: `calc(64px + ${projectIndex * 40}px`,
             }}>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16"> 
                <div className="lg:pb-16">
              <div className="bg-gradient-to-r from-amber-300 to-orange-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
              </div> 
              <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
              <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
              <ul className="flex flex-col gap-4 mt-4 md:mt-5">
              {project.results.map((result, index) => (
  <li 
    key={index} // Use the index as the key
    className="flex gap-2 text-sm md:text-base lg:text-base text-white/50"
  >
    <CheckCircleIcon className="size-5 md:size-6 lg:size-7"/>
    <span>{result.title}</span>
  </li>
))}

              </ul>
              <a href={project.link}>
              <button className="bg-white text-yellow-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 ">
                <span>Visit Live Site</span>
                <ArrowUpRightIcon ClassName="size-4 "/>
                </button>
              </a>
              </div>
              <div className="relative">
              <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
              </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
