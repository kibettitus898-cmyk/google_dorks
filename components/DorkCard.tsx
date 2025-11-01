import React, { useState, useMemo } from 'react';
import { Dork } from '../types';
import CopyIcon from './icons/CopyIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';
import CheckIcon from './icons/CheckIcon';

interface DorkCardProps {
  dork: Dork;
  onSelect: () => void;
  targetUrl: string;
  isChecklistMode: boolean;
  isSelected: boolean;
}

const DorkCard: React.FC<DorkCardProps> = ({ dork, onSelect, targetUrl, isChecklistMode, isSelected }) => {
  const [copied, setCopied] = useState(false);

  const finalExample = useMemo(() => {
    if (!targetUrl.trim()) return dork.example;
    
    const siteOperator = `site:${targetUrl.trim()}`;
    const siteRegex = /site:[^\s]+/g;

    if (dork.example.match(siteRegex)) {
      return dork.example.replace(siteRegex, siteOperator);
    }
    
    return `${siteOperator} ${dork.example}`;
  }, [dork.example, targetUrl]);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(finalExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTryIt = (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = `https://www.google.com/search?q=${encodeURIComponent(finalExample)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  
  const cardClasses = `
    border rounded-lg p-4 flex flex-col h-full 
    transition-all shadow-lg cursor-pointer relative
    ${isChecklistMode 
      ? isSelected 
        ? 'bg-cyan-900/40 border-cyan-500 ring-2 ring-cyan-500' 
        : 'bg-slate-800/50 border-slate-700 hover:border-slate-500'
      : 'bg-slate-800/50 border-slate-700 hover:border-cyan-500'
    }
  `;

  return (
    <div 
      className={cardClasses}
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelect()}
    >
      {isChecklistMode && isSelected && (
        <div className="absolute top-3 right-3 bg-cyan-500 rounded-full p-1 text-white">
          <CheckIcon className="w-4 h-4" />
        </div>
      )}
      <div className="flex-grow">
        <h3 className="font-mono text-lg text-cyan-400 bg-slate-900 px-2 py-1 rounded inline-block">{dork.operator}</h3>
        <p className="text-slate-300 mt-3 mb-4">{dork.description}</p>
      </div>
      <div>
        <div className="bg-slate-900 rounded-md p-3 mt-2">
          <p className="text-sm text-slate-400 mb-1">Example:</p>
          <p className="font-mono text-sm text-emerald-400 break-words">{finalExample}</p>
        </div>
        <div className="flex items-center space-x-2 mt-4">
          <button
            onClick={handleCopy}
            disabled={isChecklistMode}
            className={`flex-1 flex items-center justify-center text-sm px-3 py-2 rounded-md transition-all duration-150 ${
              copied
                ? 'bg-green-600 text-white'
                : 'bg-slate-700 hover:bg-slate-600 text-slate-300'
            } disabled:bg-slate-800 disabled:text-slate-500 disabled:cursor-not-allowed`}
          >
            <CopyIcon className="w-4 h-4 mr-2" />
            {copied ? 'Copied!' : 'Copy'}
          </button>
          <button
            onClick={handleTryIt}
            disabled={isChecklistMode}
            className="flex-1 flex items-center justify-center text-sm px-3 py-2 rounded-md bg-cyan-700 hover:bg-cyan-600 text-white transition-colors disabled:bg-slate-800 disabled:text-slate-500 disabled:cursor-not-allowed"
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