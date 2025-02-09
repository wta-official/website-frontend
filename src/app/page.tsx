import Homepage from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Working Talent Agency (WTA) - Home",
  description: "Welcome to the realm of The Working Talent Agency (WTA), where Africa’s brightest stars find their home. Explore our talents, services, and latest news!"
};

const Home: React.FC = () => {
  return (
        <Homepage />
  );
};

export default Home;
