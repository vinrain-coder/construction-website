"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/public/images/hero.jpg";

export default function Hero() {
  return (
    <section className="w-full bg-muted pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-primary">
            Building Your Vision
            <br />
            With Excellence & Precision
          </h1>
          <p className="text-lg">
            We bring years of construction experience to deliver reliable, safe,
            and top-quality projects—on time and on budget.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/quote">Get a Free Quote</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="relative h-[300px] md:h-[400px] w-full rounded-xl overflow-hidden shadow-lg">
          <Image
            src={HeroImage}
            alt="Construction site"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
