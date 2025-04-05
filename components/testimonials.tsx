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

const testimonials = [
  {
    name: "Jane Doe",
    role: "CEO, NyotaYangu Estates",
    quote:
      "The team was professional, timely, and exceeded our expectations. Our apartment block was delivered ahead of schedule and within budget.",
    image: "/images/female-user.svg",
  },
  {
    name: "John Doe",
    role: "Director, Urbanization Building Ltd.",
    quote:
      "Excellent workmanship and attention to detail. We will definitely work with them again on future projects.",
    image: "/images/male-user.svg",
  },
  {
    name: "Doe John",
    role: "Project Manager, Kileleni Homes",
    quote:
      "Their commitment to quality and safety made them our preferred construction partner.",
    image: "/images/businessman.svg",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          What Our Clients Say
        </h2>
        <p className="text-lg mb-12">
          Real stories from our trusted clients across various industries.
        </p>

        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <Card className="shadow-sm hover:shadow-md transition-shadow h-full">
                  <CardContent className="p-6 flex flex-col items-center gap-4 text-center">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-xs">{testimonial.role}</p>
                    </div>
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
