'use client';

import React from 'react';
import Images from '@/components/custome-ui/Images';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

type Props = {
  gallery: string[];
  nickName: string;
  socialLinks: {
    href: string;
    ariaLabel: string;
    Icon: React.ComponentType<{ className?: string }>;
  }[];
};

const HeroSection: React.FC<Props> = ({ gallery, nickName, socialLinks }) => (
  <Images imageUrl={talent.image}>
    <div className="w-full flex justify-center items-end bg-gradient-to-t from-black/80 via-black/50 to-transparent">
      <div className="p-6 md:p-10 lg:p-20 flex flex-col items-center space-y-6 text-white">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
          {talent.name}
        </h1>
        <div className="flex gap-4 md:gap-6 mt-4">
          <Socials socialLinks={talent.instagram}>
            <Instagram />
          </Socials>
          <Socials socialLinks={talent.linkedin}>
            <LinkedinIcon />
          </Socials>
          <Socials socialLinks={talent.x}>
            <X />
          </Socials>
          <Socials socialLinks={talent.facebook}>
            <FacebookIcon />
          </Socials>
        </div>
        <Button className="px-6 py-2 md:px-8 md:py-3 border rounded-full hover:bg-gray-800 hover:text-white transition">
          BOOK THIS ARTIST <ArrowRight className="ml-2" />
        </Button>
      </div>
    </div>
  </Images>
);

export default HeroSection;
