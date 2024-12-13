import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Page Not Found",
};

const NotFound: React.FC = () => {
  return (
        <div className="h-[700px] bg-gray-700 text-white flex items-center justify-center">
            Not found
        </div>
  );
};

export default NotFound;