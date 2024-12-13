"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {

    const url = usePathname()
    console.log(url)

    const home = "/"
  const [isSticky, setIsSticky] = useState(false); // State to track the scroll position
  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/career", label: "Career" },
    { href: "/our-talents", label: "Our Talents" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
  ];



  useEffect(() => {
    // Function to check scroll position
    const handleScroll = () => {
      if (window.scrollY > 100) {  // Trigger sticky behavior when the user scrolls more than 100px
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Listen to the scroll event
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`transition-all duration-300 ease-in-out fixed top-0 left-0 w-full z-50 ${url != home ?  "border-b border-[#474747]" : "bg-[#202020]"} bg-opacity-70 backdrop-blur-sm shadow-md ${isSticky ? "sticky" : "absolute"}`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-16">
        {/* Logo */}
        <Link href="/" aria-label="Home">
          <Image
            className="dark:invert"
            src="/images/companyLogo.svg"
            alt="Company Logo"
            width={110}
            height={104}
            priority
          />
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-8 text-sm lg:text-base tracking-wide">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white hover:text-gray-300 transition-colors duration-200"
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
