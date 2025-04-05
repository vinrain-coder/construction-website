"use client";

import { Hammer, Building, Wrench, Home, HardHat, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Residential Construction",
    description:
      "From foundations to final finishes—we build strong, stylish, and energy-efficient homes.",
    icon: <Home className="w-8 h-8 text-primary" />,
  },
  {
    title: "Commercial Projects",
    description:
      "Offices, warehouses, and retail spaces designed and constructed to fit your business needs.",
    icon: <Building className="w-8 h-8 text-primary" />,
  },
  {
    title: "Renovation & Remodeling",
    description:
      "Breathe new life into existing spaces with expert renovation solutions.",
    icon: <Wrench className="w-8 h-8 text-primary" />,
  },
  {
    title: "Road & Infrastructure",
    description:
      "We build durable roads, bridges, and drainage systems with strict quality controls.",
    icon: <Truck className="w-8 h-8 text-primary" />,
  },
  {
    title: "Civil Engineering",
    description:
      "Comprehensive civil works from earthworks to structural builds with full compliance.",
    icon: <HardHat className="w-8 h-8 text-primary" />,
  },
  {
    title: "Project Management",
    description:
      "Efficient planning, scheduling, and execution for stress-free project delivery.",
    icon: <Hammer className="w-8 h-8 text-primary" />,
  },
];

export default function Services() {
  return (
    <section id="sevices" className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
          Our Services
        </h2>
        <p className="mb-12 text-lg">
          Delivering high-quality construction solutions across residential,
          commercial, and infrastructure projects.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-md transition-shadow h-full"
            >
              <CardContent className="p-6 flex flex-col text-center gap-4">
                <div className="bg-muted p-3 rounded-full inline-flex justify-center items-center mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
