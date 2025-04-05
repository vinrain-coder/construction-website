"use client";

import { CheckCircle, Clock, ShieldCheck, HardHat } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    title: "Licensed & Insured Contractors",
    description:
      "Work with certified professionals who follow national safety and quality standards.",
    icon: <HardHat className="text-primary w-7 h-7" />,
  },
  {
    title: "On-Time Delivery",
    description:
      "We value your schedule. Projects are completed on time — every time.",
    icon: <Clock className="text-primary w-7 h-7" />,
  },
  {
    title: "Quality Guaranteed",
    description:
      "Top-tier materials, skilled workmanship, and strict quality control on every job.",
    icon: <ShieldCheck className="text-primary w-7 h-7" />,
  },
  {
    title: "Trusted by Clients",
    description:
      "Backed by testimonials, repeat business, and a strong reputation in the industry.",
    icon: <CheckCircle className="text-primary w-7 h-7" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-muted/50 py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <Badge
          variant="outline"
          className="text-primary border-primary uppercase mb-4"
        >
          Why Choose Us
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Trusted. Reliable. Built to Last.
        </h2>
        <p className="text-lg mb-12">
          We don’t just build structures — we build trust, safety, and long-term
          value.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="h-full hover:shadow-md transition-shadow"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="bg-muted p-3 rounded-full inline-flex justify-center items-center mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
