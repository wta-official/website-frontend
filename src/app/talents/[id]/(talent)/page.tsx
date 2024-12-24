import TalentPage from '@/components/Talent'
import React from 'react'

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talents",
};


const Talent: React.FC = () => {
  return (
   <TalentPage />
  )
}

export default Talent