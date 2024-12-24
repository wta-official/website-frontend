import Homepage from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WTA Agency",
};

const Home: React.FC = () => {
  return (
        <Homepage />
  );
};

export default Home;
