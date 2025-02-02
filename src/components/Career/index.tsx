'use client';

import Images from '@/components/custome-ui/Images';
import { useState } from 'react';
import Button from '@/components/custome-ui/Button';
import { ArrowUpRight, Clock5, MapPin } from 'lucide-react';
import Expandable from '@/components/custome-ui/Expandable';

type CareerData = {
  title: string;
  description: string;
};

type Job = {
  title: string;
  description: string;
  type: string;
  schedule: string;
};

type CardProps = {
  title: string;
  description: string;
  isJobCard: boolean;
  type?: string;
  schedule?: string;
};

const CAREER_DATA: CareerData[] = [
  {
    title: 'Innovative Environment',
    description: `Be part of a dynamic and forward-thinking team that is always striving to push boundaries and set new industry standards.`,
  },
  {
    title: 'Professional Growth',
    description: `We invest in the development of our employees, offering numerous opportunities for training, mentorship, and career advancement.`,
  },
  {
    title: 'Collaborative Culture',
    description: `Work alongside talented and passionate professionals in a supportive and inclusive environment where your ideas and contributions are valued.`,
  },
  {
    title: 'Impactful Work',
    description: `Contribute to the success and growth of talented individuals, helping them achieve their dreams and make a lasting impact in the entertainment industry.`,
  },
];

const JOBS: Job[] = [
  {
    title: 'Talent Agent',
    description: `We are seeking an experienced Talent Agent to join our team. The ideal candidate will have a strong network within the entertainment industry, excellent negotiation skills, and a passion for discovering and representing new talent.`,
    type: 'Hybrid',
    schedule: 'Full-time',
  },
  {
    title: 'Public Relations Specialist',
    description: `We are looking for a creative and strategic Public Relations Specialist to join our PR team. The ideal candidate will have a proven track record of successful PR campaigns, excellent writing skills, and the ability to build strong media relationships.`,
    type: 'Hybrid',
    schedule: 'Full-time',
  },
  {
    title: 'Career Development Coach',
    description: `We are seeking a dedicated Career Development Coach to support our talent in achieving their professional goals. The ideal candidate will have experience in coaching or mentoring, strong interpersonal skills, and a passion for helping others succeed.`,
    type: 'Hybrid',
    schedule: 'Full-time',
  },
];

const Card: React.FC<CardProps> = ({
  title,
  description,
  isJobCard,
  type,
  schedule,
}) => (
  <div
    className={`space-y-6 p-${
      isJobCard ? '4 md:p-8' : '12 md:p-16'
    } rounded-lg hover:shadow-lg transition-shadow duration-300 ${
      isJobCard
        ? 'bg-[#202020]'
        : 'bg-gradient-to-tr from-black via-black via-85% to-gray-800 to-100%'
    } w-full`}
  >
    <h2
      className={`text-2xl md:text-4xl font-semibold ${
        !isJobCard ? 'text-center' : 'text-left'
      } text-white`}
    >
      {title}
    </h2>
    <p
      className={`text-base md:text-lg text-gray-400 ${
        !isJobCard ? 'text-center' : 'text-left'
      }`}
    >
      {description}
    </p>
    {isJobCard && (
      <div className="space-y-16">
        <div className="flex space-x-4">
          <Button
            bg="bg-gray-600"
            className="px-10 flex items-center justify-center"
          >
            <MapPin className="mr-2" /> {type}
          </Button>
          <Button
            bg="bg-gray-600"
            className="px-10 flex items-center justify-center"
          >
            <Clock5 className="mr-2" /> {schedule}
          </Button>
        </div>
        <Button
          bg="bg-white"
          textColor="text-gray-700"
          className="px-10 py-4 flex items-center justify-center"
        >
          Apply Now{' '}
          <ArrowUpRight className="ml-4 bg-gray-800 text-white size-8 rounded-full" />
        </Button>
      </div>
    )}
  </div>
);

const CareerPage: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // const toggleExpanded = () => setIsExpanded(!isExpanded);

  return (
    <div className="bg-[#131313]">
      {/* Hero Section */}
      <Images imageUrl="/images/services/image1.png">
        <div className="flex-grow w-full flex items-end">
          <p className="p-16 text-4xl">Career</p>
        </div>
      </Images>

      {/* Intro Section */}

      <Expandable
        title="Join our Team and Shape the Future of Talent"
        firstPart="At Working Talent Agency, we are always looking for passionate and
            talented individuals to join our team. Our work is dedicated to
            discovering, nurturing, and promoting exceptional talent, and we
            believe that our success is driven by the creativity, dedication,
            and expertise of our staff."
        expandedPart="If you are excited about the entertainment industry and eager to
              make a difference, we invite you to explore our career
              opportunities."
      />

      {/* Career Highlights Section */}
      <section className="px-6 md:px-16 lg:px-20">
        <h1 className="text-4xl text-white">Why Working Talent Agency?</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12">
          {CAREER_DATA.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              isJobCard={false}
            />
          ))}
        </div>
      </section>

      {/* Job Opportunities Section */}
      <section className="px-6 md:px-16 lg:px-20 py-12">
        <h1 className="text-4xl text-white">Explore Our Job Opportunities</h1>
        <div className="space-y-4 py-12">
          {JOBS.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              isJobCard={true}
              type={item.type}
              schedule={item.schedule}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
