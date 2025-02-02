'use client';

import Expandable from '@/components/custome-ui/Expandable';
import Images from '@/components/custome-ui/Images';
import Image from 'next/image';
import { useState } from 'react';

const ServicesPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // const toggleExpanded = () => {
  //   setIsExpanded(!isExpanded);
  // };
  return (
    <div>
      <Images imageUrl="/images/services/image1.png">
        <div className="flex-grow w-full flex items-end">
          <p className="p-16 text-4xl">Our Services</p>
        </div>
      </Images>

      <Expandable
        title=" Elevating Talents to New Heights"
        firstPart="   At Working Talent Agency, we take pride in representing a diverse
            and dynamic roster of talent. Our clients are the driving force
            behind our success, and we are dedicated to showcasing their unique
            skills and abilities."
        expandedPart="  Whether you're looking for a captivating actor, a chart-topping
                musician, or a stunning model, you'll find the perfect match
                here."
      />

      <div className="p-4 md:px-12 lg:px-20 space-y-4">
        <div className="flex gap-2 md:gap-5">
          <div>
            <Image
              src="/images/services/image2.png"
              alt="service1"
              width={10000}
              height={1000}
            />
            <h2 className="mt-4 text-lg md:text-xl lg:text-2xl font-medium text-white">
              REPRESENTATION
            </h2>
          </div>

          <div>
            <Image
              src="/images/services/image3.png"
              alt="service1"
              width={10000}
              height={1000}
            />
            <h1 className="mt-4 text-lg md:text-xl lg:text-2xl font-medium text-white">
              CAREER DEVELOPMENT
            </h1>
          </div>
        </div>
        <div>
          <Image
            src="/images/services/image4.png"
            alt="service1"
            width={10000}
            height={1000}
          />
          <h1 className="mt-4 text-lg md:text-xl lg:text-2xl font-medium text-white">
            PUBLIC RELATIONS
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
