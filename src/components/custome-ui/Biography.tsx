import React from 'react';

interface BiographyProps {
  biography: string;
}

const Biography: React.FC<BiographyProps> = ({ biography }) => {
  if (!biography || biography.trim().length === 0) {
    return null;
  }

  return (
    <div>
      {biography.split(/\n\s*\n/).map((paragraph, index) => (
        <span key={index} className="block mb-6">
          {paragraph}
        </span>
      ))}
    </div>
  );
};

export default Biography;
