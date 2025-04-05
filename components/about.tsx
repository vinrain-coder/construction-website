"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import AboutImage from "@/public/images/about.jpg";

export default function AboutUs() {
  return (
    <section id="about" className="w-full bg-muted/50 py-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-[300px] md:h-[400px] w-full rounded-xl overflow-hidden shadow-lg">
          <Image
            src={AboutImage}
            alt="AboutImage"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-5">
          <Badge
            variant="outline"
            className="text-primary border-primary uppercase"
          >
            About Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">
            Built on Trust, Powered by Experience
          </h2>
          <p className="text-lg">
            We are a leading construction company dedicated to delivering
            exceptional residential, commercial, and infrastructure projects.
            With over a decade of experience, our skilled team is committed to
            precision, safety, and customer satisfaction.
          </p>
          <ul className="space-y-3">
            <li>✅ 10+ Years of Industry Experience</li>
            <li>✅ Certified Engineers & Licensed Contractors</li>
            <li>✅ 100+ Completed Projects</li>
            <li>✅ Safety-First Construction Standards</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
