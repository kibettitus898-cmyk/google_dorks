import React from 'react';
import SearchIcon from './icons/SearchIcon';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <SearchIcon className="h-5 w-5 text-slate-500" />
      </div>
      <input
        type="text"
        placeholder="Search for a dork (e.g., filetype, inurl...)"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="block w-full bg-slate-800 border border-slate-700 rounded-lg py-3 pl-10 pr-4 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
      />
    </div>
  );
};

export default SearchBar;