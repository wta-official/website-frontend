'use client';
import '../../../src/app/globals.css';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, X, Youtube } from 'lucide-react';
import Carousel from './Carousel';
import { TiktokIcon } from '../icons/TiktokIcon';

// Reusable constants for content
const CONTACT_DETAILS = [
  { label: '+2348186010105', type: 'phone' },
  { label: '+2348134491733', type: 'phone' },
  { label: 'hello@workingtalentagency.com', type: 'email' },
  { label: '48, Awolowo Road, Ikoyi Lagos', type: 'address' },
];

const QUICK_LINKS = [
  { href: '/talents', label: 'Our Talents' },
  { href: '/about', label: 'About Us' },
  // { href: "/service", label: "Services" },
  { href: '/blogs', label: 'Blog' },
  // { href: "/contact", label: "Contact Us" },
];

const SOCIAL_LINKS = [
  {
    href: 'https://www.instagram.com/workingtalentagency?igsh=MWkyOXh0ZGd1OG11MA==',
    ariaLabel: 'Instagram',
    Icon: Instagram,
  },
  {
    href: 'https://youtube.com/@workingtalentagency?si=KGNbG05-BWaOVZL-',
    ariaLabel: 'Youtube',
    Icon: Youtube,
  },
  {
    href: 'https://www.tiktok.com/@workingtalentagency?_t=ZM-8wVdelc3hVY&_r=1',
    ariaLabel: 'TikTok',
    Icon: TiktokIcon,
  },

  // { href: '/', ariaLabel: 'LinkedIn', Icon: Linkedin },
];

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white py-6 lg:py-8 w-full">
      <div className="px-6 sm:px-8 lg:px-16">
        {/* Logo Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between sm:space-x-4 lg:space-x-6 mb-12 lg:mb-16">
          <div className="flex items-center space-x-4">
            <Image
              src="/images/companyLogoBlue.svg"
              alt="footerLogo"
              width={42.53}
              height={42.53}
            />
            <p className="font-bold text-xl lg:text-2xl">
              Working Talents Agency
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-16">
          {/* Subscription Section */}
          <div className="max-w-[787px] lg:w-[40%]">
            <h2 className="font-semibold text-2xl lg:text-3xl mb-6 lg:mb-8 leading-snug">
              Stay Connected with Working Talent Agency
            </h2>
            <form className="w-full relative">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 py-3 bg-gray-200 text-black w-full rounded-md"
              />
              <Button className="absolute right-0 top-0 h-full rounded-none bg-black text-base lg:text-lg hover:bg-gray-900">
                Subscribe to newsletter
              </Button>
            </form>
          </div>

          {/* Quick Links Section */}
          <div className="lg:w-[20%]">
            <h3 className="font-bold text-xl lg:text-2xl mb-6 lg:mb-8">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {QUICK_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:underline text-sm lg:text-base"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="lg:w-[20%]">
            <h3 className="font-bold text-xl lg:text-2xl mb-6 lg:mb-8">
              Contact Us
            </h3>
            {CONTACT_DETAILS.map(({ label, type }, index) => {
              let href = '';

              if (type === 'phone') href = `tel:${label.replace(/\s/g, '')}`;
              if (type === 'email') href = `mailto:${label}`;
              if (type === 'address')
                href =
                  'https://maps.google.com/?q=' + encodeURIComponent(label);

              const isLink =
                type === 'phone' || type === 'email' || type === 'address';

              return isLink ? (
                <a
                  key={index}
                  href={href}
                  target={type === 'address' ? '_blank' : undefined}
                  rel={type === 'address' ? 'noopener noreferrer' : undefined}
                  className="text-sm lg:text-base mb-2 hover:underline hover:text-blue-400 block"
                >
                  {label}
                </a>
              ) : (
                <p key={index} className="text-sm lg:text-base mb-2">
                  {label}
                </p>
              );
            })}
            <div className="flex gap-4 mt-4">
              {SOCIAL_LINKS.map(({ href, ariaLabel, Icon }) => (
                <a
                  key={ariaLabel}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel}
                  className="hover:text-blue-500"
                >
                  <Icon className="text-xl lg:text-2xl" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="mt-8 lg:mt-12">
        <Carousel>
          <p className="leading-[326px] m-0 text-white text-[279px]">
            WORKING TALENT AGENCY
          </p>
        </Carousel>
      </div>

      {/* Footer Bottom Section */}
      <div className="flex flex-col lg:flex-row justify-between text-center text-sm lg:text-base mt-8 border-t border-gray-700 px-4 lg:px-20 pt-4">
        <p>
          &copy; {new Date().getFullYear()} THE WORKING TALENT AGENCY, LLC . ALL
          RIGHTS RESERVED
        </p>

        <div className="flex flex-col lg:flex-row justify-center space-x-4 lg:space-x-10 mt-4 lg:mt-0">
          <Link href="/privacy" className="hover:underline">
            PRIVACY POLICY
          </Link>
          {/* <span className="lg:hidden">.</span>
          <Link href="/privacy" className="hover:underline">
            CLIENT PRIVACY POLICY
          </Link> */}
          <span className="lg:hidden">.</span>
          <Link href="/terms-and-conditions" className="hover:underline">
            TERMS AND CONDITIONS
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
