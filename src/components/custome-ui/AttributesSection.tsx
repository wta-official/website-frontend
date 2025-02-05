import React from "react";

type Props = {
  attributes: Record<string, string>[];
};

const AttributesSection: React.FC<Props> = ({ attributes }) => (
  <div className="px-4 md:px-10 lg:px-16 mb-10">
    <div className="flex flex-wrap justify-center gap-4 md:gap-10">
      {attributes.map((attribute, index) => {
        const [key, value] = Object.entries(attribute)[0];
        return (
          <p
            key={index}
            className="text-base md:text-lg lg:text-xl text-gray-300"
          >
            {key.toUpperCase()} <span>: </span>
            <span className="font-bold text-white">{value.toUpperCase()}</span>
          </p>
        );
      })}
    </div>
  </div>
);

export default AttributesSection;
