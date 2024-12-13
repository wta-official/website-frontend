"use client";
import "../../../src/app/globals.css";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, X } from "lucide-react";
import Carousel from "./Carousel";

// Reusable constants for content
const CONTACT_DETAILS = [
  "08186010105, 08134491733",
  "hello@workingtalentagency.com",
  "48, Awolowo Road, Ikoyi Lagos",
];

const QUICK_LINKS = [
  { href: "/our-talents", label: "Our Talents" },
  { href: "/about", label: "About Us" },
  { href: "/service", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
];

const SOCIAL_LINKS = [
  { href: "#", ariaLabel: "Instagram", Icon: Instagram },
  { href: "#", ariaLabel: "Facebook", Icon: Facebook },
  { href: "#", ariaLabel: "Twitter", Icon: X },
  { href: "#", ariaLabel: "LinkedIn", Icon: Linkedin },
];

// Carousel Component

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white py-8 w-full">
      <div className="px-16">
        {/* Logo Section */}
        <div className="flex items-center space-x-6 mb-16">
          <Image
            src="/images/companyLogoBlue.svg"
            alt="footerLogo"
            width={42.53}
            height={42.53}
          />
          <p className="font-bold text-xl">Working Talents Agency</p>
        </div>

        <div className="flex justify-between">
          {/* Subscription Section */}
          <div className="max-w-[787px]">
            <h2 className="font-semibold text-[40px] mb-8 leading-snug">
              Stay Connected with Working Talent Agency
            </h2>
            <form className="w-full relative">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 py-4 bg-gray-200 text-black w-full"
              />
              <Button className="absolute right-0 top-0 h-full rounded-none bg-black text-lg hover:bg-gray-900">
                Subscribe to newsletter
              </Button>
            </form>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="font-bold text-xl mb-8">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {QUICK_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="hover:underline">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-bold text-xl mb-8">Contact Us</h3>
            {CONTACT_DETAILS.map((detail, index) => (
              <p key={index} className="text-sm md:text-base mb-2">
                {detail}
              </p>
            ))}
            <div className="flex gap-4 mt-4">
              {SOCIAL_LINKS.map(({ href, ariaLabel, Icon }) => (
                <a
                  key={ariaLabel}
                  href={href}
                  aria-label={ariaLabel}
                  className="hover:text-blue-500"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="mt-8">
        <Carousel />
      </div>

      {/* Footer Bottom Section */}
      <div className="flex justify-between text-center text-sm mt-8 border-t border-gray-700 px-20 pt-4">
        <p>
          &copy; {new Date().getFullYear()} THE WORKING TALENT AGENCY, LLC . ALL
          RIGHTS RESERVED
        </p>

        <div className="flex justify-center space-x-10">
          <Link href="/privacy" className="hover:underline">PRIVACY POLICY</Link>
          <span>.</span>
          <Link href="/privacy" className="hover:underline">CLIENT PRIVACY POLICY</Link>
          <span>.</span>
          <Link href="/privacy" className="hover:underline">TERMS AND CONDITIONS</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
