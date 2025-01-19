"use client";

import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { useState } from "react";
import { ourTalents } from "@/data/data";
import TalentsCard from "./TalentsCard";

const AlphabetSearch = ({ onFilter }: { onFilter: (letter: string) => void }) => {
  return (
    <div className="w-full mx-auto mt-5">
      {/* Alphabet Buttons */}
      <div className="flex items-center justify-center space-x-2 flex-wrap">
        <p className="self-start my-2 text-center w-full md:w-auto">#</p>
        <div className="flex flex-wrap justify-center space-x-2">
          {[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((letter) => (
            <button
              key={letter}
              className="px-[5px] py-2 rounded-md text-gray-500 hover:text-white transition duration-200"
              onClick={() => onFilter(letter)}
              aria-label={`Filter by ${letter}`}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const SearchTalents = ({talents}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredData = talents.filter((item) =>
    item.name.toLowerCase().startsWith(searchQuery.toLowerCase())
  );
  return (
    <div>
      {/* Search Bar */}
      <div className="flex items-center border border-gray-400 px-5 w-full">
        <Search className="text-gray-500 hover:text-white" size={20} />
        <Input
          className="border-none focus:ring-0 focus:outline-none w-full"
          placeholder="Search talent"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label="Search talents"
        />
      </div>

      {/* Alphabet Search */}
      <AlphabetSearch onFilter={(letter) => setSearchQuery(letter)} />

      {/* Talent Cards */}
      <div className="mt-6 flex flex-wrap justify-center gap-10">
        {filteredData.length > 0 ? (
          filteredData.map((talent, index) => (
            <TalentsCard key={index} talentInfo={talent} />
          ))
        ) : (
          <div className="text-gray-500">No results found</div>
        )}
      </div>
    </div>
  );
};

export default SearchTalents;
