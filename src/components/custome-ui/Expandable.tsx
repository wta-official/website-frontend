import { useState } from "react";

// Define the prop types using TypeScript
interface ExpandableProps {
  title: string;
  firstPart: string;
  expandedPart: string;
}

const Expandable: React.FC<ExpandableProps> = ({
  title,
  firstPart,
  expandedPart,
}) => {
  // State to handle the expand/collapse action
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle the expanded state
  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="text-white flex flex-col lg:flex-row px-6 md:px-12 lg:px-20 py-12 md:py-20 space-y-4 md:space-y-2 lg:space-x-20 bg-[#131313]">
      <h1
        className="text-3xl sm:text-4xl lg:min-w-96 lg:text-5xl leading-tight md:leading-10"
        style={{ lineHeight: "1.3" }}
      >
        {title}
      </h1>

      <div className="text-lg md:text-xl leading-8 md:leading-[40px] text-gray-300">
        <p>
          {firstPart}
          {isExpanded && <span>{expandedPart}</span>}
        </p>

        {/* Expand/Collapse Button */}
        <button
          onClick={toggleExpanded}
          className="mt-4 text-sm md:text-base text-blue-500 underline"
          aria-expanded={isExpanded}
          aria-controls="expandable-content"
        >
          {isExpanded ? "Show Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default Expandable;
