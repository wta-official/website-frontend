'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const Header = () => {
  const url = usePathname();
  const home = '/';

  const isFormPage = Boolean(url.split('/').includes('form'));

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/about', label: 'About' },
    // { href: "/career", label: "Career" },
    { href: '/talents', label: 'Talents' },
    // { href: "/services", label: "Services" },
    { href: '/blogs', label: 'Blog' },
  ];

  return (
    <header
      className={clsx(
        'transition-all duration-300 ease-in-out fixed top-0 left-0 w-full z-50',
        url === home || isFormPage
          ? 'bg-[#202020]'
          : 'border-b border-[#474747]',
        'bg-opacity-70 backdrop-blur-sm shadow-md'
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-6 relative">
        {/* Logo */}
        <Link href="/" aria-label="Home">
          <Image
            className="dark:invert w-12 md:w-20 lg:w-28"
            src="/images/companyLogo.svg"
            alt="Company Logo"
            width={110}
            height={104}
            priority
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle Mobile Menu"
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Mobile Menu Drawer */}
        <div
          className={clsx(
            'fixed top-0 right-0 h-[100vh] w-2/3 md:w-1/3 bg-[#202020] bg-opacity-90 backdrop-blur-md z-40 transition-all duration-300 ease-in-out transform',
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex justify-end p-6">
            <button
              aria-label="Close Mobile Menu"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav className="-mt-20 flex-grow flex items-center justify-center h-full">
            <ul className="flex flex-col items-center space-y-6 text-lg text-white">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-gray-300 transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label={link.label}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-row items-center space-x-8 text-sm lg:text-base tracking-wide">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white hover:text-gray-300 transition-colors duration-200"
                  aria-label={link.label}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
