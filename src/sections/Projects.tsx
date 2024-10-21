import EcommerceProject from "@/assets/images/ecommerce pic.png";
import projectPic from "@/assets/images/Projectmanagement.png";
import clientpic from "@/assets/images/clientsite.png";
import fararpic from "@/assets/images/farar.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const WebportfolioProjects = [
  {
    company: "Independent Project",
    year: "2024",
    title: "Ecommerce Store",
    results: [
      {
        title:
          "E-commerce platform using the MERN stack, featuring dynamic product listings and secure user authentication",
      },
      { title: "Implemented PayPal integration for secure transactions." },
    ],
    link: "https://github.com/FarhanHaider999/E-Commerce-Store.git",
    image: EcommerceProject,
  },
  {
    company: "Independent Project",
    year: "2024",
    title: "Project Management Application",
    results: [
      {
        title:
          "Responsive dashboard built using Next.js, featuring advanced data handling with Material UI Data Grid.",
      },
      {
        title:
          "Scalable backend using Node.js, PostgreSQL, and Prisma, with monitoring through PgAdmin.",
      },
    ],
    link: "https://github.com/FarhanHaider999/Project-Management-Application.git",
    image: projectPic,
  },
  {
    company: "Client Project",
    year: "2024",
    title: "Client Portfolio Website",
    results: [
      {
        title:
          "Built a modern portfolio using Next.js and Acternity UI, showcasing the client's projects effectively.",
      },
      {
        title:
          "Ensured a seamless experience across devices with a fully responsive design and easy navigation.",
      },
    ],
    link: "https://maryam-hassan.vercel.app/",
    image: clientpic,
  },
  {
    company: "Startup Project",
    year: "2024",
    title: "Farerforge",
    results: [
      {
        title:
          "Developed my own company website for a web development and design firm, incorporating smooth animations and motion to create a dynamic experience.",
      },
      {
        title:
          "Delivered a fully responsive site, tailored to meet both technical and creative needs.",
      },
    ],
    link: "https://farerforge.netlify.app/",
    image: fararpic,
  },
];

export const WebProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container" id="projects">
        <SectionHeader
          title="Selected Projects"
          description="Featuring interactive web applications."
        />
        <div className="flex flex-col mt-8 md:mt-12 gap-20">
          {WebportfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className=" px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-amber-300 to-orange-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm md:text-base lg:text-base text-white/50 text-justify tracking-tighter"
                      >
                        <CheckCircleIcon className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 flex-shrink-0" />
                        <span className="flex-1">{result.title}</span>{" "}
                        {/* Allow text to grow */}
                      </li>
                    ))}
                  </ul>

                  <a href={project.link}>
                    <button className="bg-white text-yellow-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 ">
                      <span>View More Details</span>
                      <ArrowUpRightIcon ClassName="size-4 " />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
