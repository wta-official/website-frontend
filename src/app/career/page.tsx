import CareerPage from '@/components/Career'
import React from 'react'

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career",
};

const Career:React.FC = () => {
  return (
    <CareerPage />
  )
}

export default Career