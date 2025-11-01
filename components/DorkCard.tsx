import React, { useState } from 'react';
import { Dork } from '../types';
import CopyIcon from './icons/CopyIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';

interface DorkCardProps {
  dork: Dork;
  onSelect: () => void;
}

const DorkCard: React.FC<DorkCardProps> = ({ dork, onSelect }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(dork.example);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTryIt = (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = `https://www.google.com/search?q=${encodeURIComponent(dork.example)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 flex flex-col h-full hover:border-cyan-500 transition-all shadow-lg cursor-pointer"
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelect()}
    >
      <div className="flex-grow">
        <h3 className="font-mono text-lg text-cyan-400 bg-slate-900 px-2 py-1 rounded inline-block">{dork.operator}</h3>
        <p className="text-slate-300 mt-3 mb-4">{dork.description}</p>
      </div>
      <div>
        <div className="bg-slate-900 rounded-md p-3 mt-2">
          <p className="text-sm text-slate-400 mb-1">Example:</p>
          <p className="font-mono text-sm text-emerald-400 break-words">{dork.example}</p>
        </div>
        <div className="flex items-center space-x-2 mt-4">
          <button
            onClick={handleCopy}
            className={`flex-1 flex items-center justify-center text-sm px-3 py-2 rounded-md transition-all duration-150 ${
              copied
                ? 'bg-green-600 text-white'
                : 'bg-slate-700 hover:bg-slate-600 text-slate-300'
            }`}
          >
            <CopyIcon className="w-4 h-4 mr-2" />
            {copied ? 'Copied!' : 'Copy'}
          </button>
          <button
            onClick={handleTryIt}
            className="flex-1 flex items-center justify-center text-sm px-3 py-2 rounded-md bg-cyan-700 hover:bg-cyan-600 text-white transition-colors"
          >
            <ExternalLinkIcon className="w-4 h-4 mr-2" />
            Try it
          </button>
        </div>
      </div>
    </div>
  );
};

export default DorkCard;