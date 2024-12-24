"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const Header = () => {
  const url = usePathname();
  const home = "/";
  // const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/career", label: "Career" },
    { href: "/talents", label: "Our Talents" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
  ];

  // Scroll handling for sticky header
  // const handleScroll = () => {
  //   if (window.scrollY > 100) {
  //     setIsSticky(true);
  //   } else {
  //     setIsSticky(false);
  //   }
  // };

  // // Attaching scroll event listener on mount and cleanup on unmount
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <header
      className={clsx(
        "transition-all duration-300 ease-in-out fixed top-0 left-0 w-full z-50",
        url !== home ? "border-b border-[#474747]" : "bg-[#202020]",
        "bg-opacity-70 backdrop-blur-sm shadow-md",
        // isSticky ? "sticky" : "absolute"
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Menu Drawer */}
        <div
          className={clsx(
            isMobileMenuOpen ? "translate-x-0 fixed top-0 right-0 w-2/3 md:w-1/3 h-[100vh] bg-[#202020] backdrop-blur-md transform transition-transform duration-300 ease-in-out" : "hidden translate-x-full",
            "z-40"
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav>
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
