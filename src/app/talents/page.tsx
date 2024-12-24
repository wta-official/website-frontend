import TalentsPage from "@/components/Talents";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talents",
};

const Talents: React.FC = () => {
  return (
    <TalentsPage />
  )
}

export default Talents