"use client";

import { useParams } from "next/navigation";
import React, { useMemo } from "react";
import { ourTalents } from "@/data/data";
import NotFound from "@/app/not-found";
import Images from "@/components/custome-ui/Images";
import { ArrowRight, Facebook, Instagram, Linkedin, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Biography from "@/components/custome-ui/Biography";
import Image from "next/image";
import Carousel from "@/components/custome-ui/Carousel";

type SocialLink = {
  href: string;
  ariaLabel: string;
  Icon: React.ComponentType<{ className?: string }>;
};

type TalentDetails = {
  gallery: string[];
  biography: string;
  attributes: Record<string, string>[];
  expertise: string[];
  partnerships: Record<string, string>[];
  filmography: { type: string; titles: Record<string, string> }[];
  nickName: string;
};

type Talent = {
  name: string;
  details: TalentDetails;
};

const SOCIAL_LINKS: SocialLink[] = [
  { href: "https://instagram.com", ariaLabel: "Instagram", Icon: Instagram },
  { href: "https://facebook.com", ariaLabel: "Facebook", Icon: Facebook },
  { href: "https://twitter.com", ariaLabel: "Twitter", Icon: X },
  { href: "https://linkedin.com", ariaLabel: "LinkedIn", Icon: Linkedin },
];

const TalentPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const talent = useMemo(() => {
    return ourTalents.find(
      (talent) => talent.name.replace(/\s+/g, "").toLowerCase() === id
    );
  }, [id]);

  if (!talent) return <NotFound />;

  const { details } = talent;
  const {
    gallery,
    biography,
    attributes,
    expertise,
    partnerships,
    filmography,
    nickName,
  } = details;

  return (
    <div>
      {/* Hero Section */}
      <Images imageUrl={gallery[0]}>
        <div className="w-full flex justify-center items-end bg-gradient-to-t from-black/80 via-black/50 to-transparent">
          <div className="p-6 md:p-10 lg:p-20 flex flex-col items-center space-y-6 text-white">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
              {nickName}
            </h1>
            <div className="flex gap-4 md:gap-6 mt-4">
              {SOCIAL_LINKS.map(({ href, ariaLabel, Icon }) => (
                <a
                  key={ariaLabel}
                  href={href}
                  aria-label={ariaLabel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  <Icon className="text-xl md:text-2xl lg:text-3xl" />
                </a>
              ))}
            </div>
            <Button className="px-6 py-2 md:px-8 md:py-3 border rounded-full hover:bg-gray-800 hover:text-white transition">
              BOOK THIS ARTIST <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </Images>

      {/* Biography Section */}
      <div className="px-4 md:px-8 lg:px-20 py-8 md:py-10">
        <div className="text-center text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose">
          <Biography biography={biography} />
        </div>
      </div>

      {/* Attributes Section */}
      <div className="px-4 md:px-10 lg:px-16 mb-10">
        <div className="flex flex-wrap justify-center gap-4 md:gap-10">
          {attributes.map((attribute, index) => {
            const [key, value] = Object.entries(attribute)[0];
            return (
              <p
                key={index}
                className="text-base md:text-lg lg:text-xl text-gray-300"
              >
                {key.toUpperCase()} <span>: </span>
                <span className="font-bold text-white">
                  {value.toUpperCase()}
                </span>
              </p>
            );
          })}
        </div>
      </div>

      {/* Expertise Section */}
      <Images imageUrl={gallery[1]}>
        <div className="w-full flex justify-center items-end bg-gradient-to-t from-black/80 via-black/50 to-transparent">
          <div className="px-4 md:px-10 lg:px-16 py-6">
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {expertise.map((item, index) => (
                <p
                  key={index}
                  className="text-base md:text-lg lg:text-xl text-gray-300"
                >
                  {item.toUpperCase()}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Images>

      {/* Partnerships Section */}
      {partnerships && (
        <div className="w-full px-4 md:px-8 lg:px-16 py-10">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-200 mb-6">
            Partnerships
          </h1>
          <hr className="border-t border-gray-600 mb-8" />
          <Carousel>
            <div className="flex justify-center gap-0 md:gap-4 lg:hidden">
              {partnerships?.map((partners, index) => {
                const [key, value] = Object.entries(partners)[0];
                return (
                  <div
                    key={index}
                    className="flex items-center justify-center min-w-[8rem] h-32"
                  >
                    <Image
                      src={value}
                      alt={key}
                      width={100}
                      height={50}
                      className="object-cover border-gray-400 rounded"
                    />
                  </div>
                );
              })}
            </div>
          </Carousel>

          <div className="hidden lg:flex flex-wrap justify-center gap-4">
            {partnerships?.map((partners, index) => {
              const [key, value] = Object.entries(partners)[0];
              return (
                <div
                  key={index}
                  className="flex items-center justify-center h-32"
                >
                  <Image
                    src={value}
                    alt={key}
                    width={100}
                    height={50}
                    className="object-cover border-gray-400 rounded"
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Filmography Section */}
      <div className="w-full px-4 md:px-8 lg:px-16 mb-10 md:mb-16 lg:mb-20">
        {filmography?.map((filmographyItem, index) => (
          <div key={index} className="p-6 rounded-lg shadow-lg w-full">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              {`Filmography (${filmographyItem.type})`}
            </h2>
            <hr className="border-t mb-6" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
              {Object.entries(filmographyItem.titles).map(([key, value]) => (
                <div key={key} className="">
                  <img
                    src={value}
                    alt={key}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TalentPage;