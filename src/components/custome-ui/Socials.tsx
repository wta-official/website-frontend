import React, { ReactNode } from "react";

type SocialsProps = {
  socialLinks: string;
  children: ReactNode;
};

const Socials: React.FC<SocialsProps> = ({ socialLinks, children }) => {
  if (!socialLinks) {
    console.warn("Social link is not provided");
    return null;
  }

  return (
    <a
      href={socialLinks}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-400 transition"
    >
      <div className="text-xl md:text-2xl lg:text-3xl">{children}</div>
    </a>
  );
};

export default Socials;
