"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Facebook from "@/public/icons/facebook.svg";
import LinkedIn from "@/public/icons/linkedin.svg";
import Instagram from "@/public/icons/instagram.svg";
import X from "@/public/icons/x.svg";
import WhatsApp from "@/public/icons/whatsapp.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-primary">🏗️ BuildPro</h3>
          <p className="text-sm">
            Building Kenya's future with quality construction, trusted
            expertise, and on-time delivery.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="#projects" className="hover:underline">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-primary" />{" "}
              <span>+254 712 345 678</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-primary" />{" "}
              <span>info@buildpro.co.ke</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />{" "}
              <span>Nairobi, Kenya</span>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
          <div className="flex space-x-4">
            <Link href="#" target="_blank">
              <Image
                src={X}
                alt="X/Twitter"
                width={24}
                height={24}
                className="bg-white rounded-sm"
              />
            </Link>
            <Link href="#" target="_blank">
              <Image src={LinkedIn} alt="LinkedIn" width={24} height={24} />
            </Link>
            <Link href="#" target="_blank">
              <Image src={Facebook} alt="Facebook" width={24} height={18} />
            </Link>
            <Link href="#" target="_blank">
              <Image src={Instagram} alt="Instagram" width={24} height={24} />
            </Link>
            <Link href="#" target="_blank">
              <Image src={WhatsApp} alt="WhatsApp" width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t mt-6 pt-4 text-center text-sm ">
        &copy; {new Date().getFullYear()} BuildPro Construction. All rights
        reserved.
      </div>
    </footer>
  );
}
