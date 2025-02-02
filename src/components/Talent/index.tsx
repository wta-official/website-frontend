import NotFound from "@/app/not-found";
import { fetchApi } from "@/utils/api";
import { Metadata } from "next";
import Images from "../custome-ui/Images";
import Socials from "../custome-ui/Socials";
import Biography from "../custome-ui/Biography";
import Carousel from "../custome-ui/Carousel";
import Image from "next/image";
import {
  ArrowRight,
  FacebookIcon,
  Instagram,
  LinkedinIcon,
  X,
} from "lucide-react";
import TriangleLoader from "../custome-ui/Loader";
import Link from "next/link";

// Props Type
type Props = {
  params: { id: string };
};

// Talent Type
type Talent = {
  id: number;
  name: string;
  image: string;
  description: string;
  eye_color: string;
  hair: string;
  height: string;
  dietary_requirements: string;
  instagram: string;
  linkedin: string;
  x: string;
  facebook: string;
  roles: string[];
  partners: { id: number; image: string }[];
  works: { image: string; title: string; category?: { title: string }[] }[];
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Talent: ${params.id}`,
  };
}

const TalentPage = async ({ params }: Props) => {
  const id = Number(params);

  try {
    const talent: Talent = await fetchApi(`talents/${id}`);

    if (!talent) return <NotFound />;

    const attributes = [
      { key: "Eye Color", value: talent.eye_color },
      { key: "Hair", value: talent.hair },
      { key: "Height", value: talent.height },
      { key: "Dietary Requirements", value: talent.dietary_requirements },
    ];

    const groupedWorks = talent.works.reduce(
      (acc: Record<string, Talent["works"]>, work) => {
        const categoryTitle = work.category?.[0]?.title || "Uncategorized";

        if (!acc[categoryTitle]) {
          acc[categoryTitle] = [];
        }
        acc[categoryTitle].push(work);

        return acc;
      },
      {}
    );

    const groupedWorksArray = Object.entries(groupedWorks);

    return (
      <div>
        {/* Hero Section */}
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
              <Link href={`/form/${id}`} className="flex gap-4 px-6 py-2 md:px-8 md:py-3 border rounded-full hover:bg-gray-800 hover:text-white transition">
                BOOK THIS TALENT <ArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </Images>

        {/* Biography Section */}
        <div className="px-4 md:px-8 lg:px-20 py-8 md:py-10">
          <div className="text-center text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose">
            <Biography biography={talent.description} />
          </div>
        </div>

        {/* Attributes Section */}
        <div className="px-4 md:px-10 lg:px-16 mb-10">
          <div className="flex flex-wrap justify-center gap-4 md:gap-10">
            {attributes.map((attribute, index) => (
              <p
                key={index}
                className="text-base md:text-lg lg:text-xl text-gray-300"
              >
                {attribute.key.toUpperCase()} <span>: </span>
                <span className="font-bold text-white">
                  {attribute.value.toUpperCase()}
                </span>
              </p>
            ))}
          </div>
        </div>

        {/* Expertise Section */}
        <div className="px-4 md:px-10 lg:px-16 py-6">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {talent.roles.map((role, index) => (
              <p
                key={index}
                className="text-base md:text-lg lg:text-xl text-gray-300"
              >
                {role.toUpperCase()}
              </p>
            ))}
          </div>
        </div>

        {/* Partnerships Section */}
        {talent.partners && talent.partners.length > 0 && (
          <div className="w-full px-4 md:px-8 lg:px-16 py-10">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-200 mb-6">
              Partnerships
            </h1>
            <hr className="border-t border-gray-600 mb-8" />
            <Carousel>
              <div className="flex justify-center gap-0 md:gap-4 lg:hidden">
                {talent.partners.map((partner) => (
                  <div
                    key={partner.id}
                    className="flex items-center justify-center min-w-[8rem] h-32"
                  >
                    <Image
                      src={partner.image}
                      alt="Partner image"
                      width={100}
                      height={50}
                      className="object-cover border-gray-400 rounded"
                    />
                  </div>
                ))}
              </div>
            </Carousel>

            <div className="hidden lg:flex flex-wrap justify-center gap-4">
              {talent.partners.map((partner) => (
                <div
                  key={partner.id}
                  className="flex items-center justify-center h-32"
                >
                  <Image
                    src={partner.image}
                    alt="Partner image"
                    width={100}
                    height={50}
                    className="object-cover border-gray-400 rounded"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Filmography Section */}
        <div className="w-full px-4 md:px-8 lg:px-16 mb-10 md:mb-16 lg:mb-20">
          {groupedWorksArray.map(([category, works], index) => (
            <div key={index} className="p-6 rounded-lg shadow-lg w-full">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">
                {`Filmography (${category})`}
              </h2>
              <hr className="border-t mb-6" />
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
                {works.map((work, value) => (
                  <div key={value}>
                    <Image
                      src={work.image}
                      alt={work.title}
                      width={300}
                      height={300}
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
  } catch (error) {
    console.error("Error fetching talent data:", error);
    return (
      <div className="flex justify-center items-center min-h-screen text-center">
        <div>
          <div className="pb-10 flex justify-center">
            <TriangleLoader
              visible={true}
              height={80}
              width={80}
              color="#6785A5"
            />
          </div>
          <h1 className="text-2xl font-bold mb-4">Error Loading Data</h1>
          <p className="text-lg">
            Please try refreshing the page or check back later.
          </p>
        </div>
      </div>
    );
  }
};

export default TalentPage;
