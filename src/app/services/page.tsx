import ServicesPage from '@/components/Services'
import React from 'react'

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
};

const Services: React.FC  = () => {
  return (
    <ServicesPage />
  )
}

export default Services