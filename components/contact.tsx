"use client";

import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section id="contact" className="w-full py-20">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          Ready to Build with Us?
        </h2>
        <p className="text-lg">
          Contact us today to request a quote, discuss your project, or schedule
          a consultation.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <Phone size={18} className="text-primary" />{" "}
            <span>+254 712 345 678</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={18} className="text-primary" />{" "}
            <span>info@yourcompany.co.ke</span>
          </div>
        </div>

        {/* CTA Button */}
        <Link href="/contact">
          <Button variant="secondary" size="lg" className="mt-4 cursor-pointer">
            Request a Quote
          </Button>
        </Link>
      </div>
    </section>
  );
}
