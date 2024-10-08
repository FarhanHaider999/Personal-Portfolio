import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { WebProjectsSection } from "@/sections/Projects";
import { DesignProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <WebProjectsSection/>
      <DesignProjectsSection/>
      <TapeSection/>
      <AboutSection/>
      <TestimonialsSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}
