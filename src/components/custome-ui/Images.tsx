import { ReactNode } from 'react';

interface ImagesProps {
  children: ReactNode;
  imageUrl: string;
}

const Images: React.FC<ImagesProps> = ({ children, imageUrl }) => {
  return (
    <section
      className="relative bg-cover bg-top w-full min-h-[400px] md:min-h-[700px] lg:max-h-screen text-white z-10 flex"
      aria-labelledby="about-hero-heading"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {children}
    </section>
  );
};

export default Images;
