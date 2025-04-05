"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const projects = [
  {
    title: "Modern Office Complex",
    description:
      "A state-of-the-art commercial building in Nairobi’s tech district.",
    image: "/images/project-1.jpg",
  },
  {
    title: "Luxury Apartments",
    description:
      "High-end residential apartments with a rooftop garden and smart systems.",
    image: "/images/project-2.jpg",
  },
  {
    title: "Highway Expansion",
    description:
      "Completed 30km of dual carriageway under strict timelines and safety standards.",
    image: "/images/project-3.jpg",
  },
  {
    title: "Bridge Construction",
    description:
      "Engineering a strong and sustainable bridge over the Nyando River.",
    image: "/images/project-4.jpg",
  },
  {
    title: "Retail Center Renovation",
    description:
      "Complete interior and exterior renovation of a city shopping center.",
    image: "/images/project-5.jpg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <p className="mt-2 text-lg">
            Explore some of our recent work across commercial, residential, and
            infrastructure sectors.
          </p>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="text-sm">{project.description}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
