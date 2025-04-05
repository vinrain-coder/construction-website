import AboutUs from "@/components/about";
import ContactCTA from "@/components/contact";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import WhyChooseUs from "@/components/why-choose-us";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <AboutUs />
      <Projects />
      <WhyChooseUs />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
