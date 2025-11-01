import React from 'react';
import GlobeIcon from './icons/GlobeIcon';

interface TargetUrlInputProps {
  targetUrl: string;
  setTargetUrl: (url: string) => void;
}

const TargetUrlInput: React.FC<TargetUrlInputProps> = ({ targetUrl, setTargetUrl }) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <GlobeIcon className="h-5 w-5 text-slate-500" />
      </div>
      <input
        type="text"
        placeholder="Enter a target site (e.g., example.com)"
        value={targetUrl}
        onChange={(e) => setTargetUrl(e.target.value)}
        className="block w-full bg-slate-800 border border-slate-700 rounded-lg py-3 pl-10 pr-4 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
        aria-label="Target Site URL"
      />
    </div>
  );
};

export default TargetUrlInput;