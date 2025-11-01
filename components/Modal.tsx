import React, { useState, useEffect, useCallback } from 'react';
import { Dork } from '../types';
import CopyIcon from './icons/CopyIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';
import CloseIcon from './icons/CloseIcon';

interface ModalProps {
  dork: Dork;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ dork, onClose }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(dork.example);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTryIt = () => {
    const url = `https://www.google.com/search?q=${encodeURIComponent(dork.example)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [handleKeyDown]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dork-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-slate-800 border border-slate-700 rounded-lg p-6 w-full max-w-lg relative shadow-2xl animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-slate-200 transition-colors"
          aria-label="Close modal"
        >
          <CloseIcon className="w-6 h-6" />
        </button>

        <div className="flex-grow pr-8">
            <h3 id="dork-modal-title" className="font-mono text-xl text-cyan-400 bg-slate-900 px-3 py-1.5 rounded inline-block">{dork.operator}</h3>
            <p className="text-slate-300 mt-4 mb-5 text-base">{dork.description}</p>
        </div>
        <div>
            <div className="bg-slate-900 rounded-md p-4">
                <p className="text-sm text-slate-400 mb-1">Example:</p>
                <p className="font-mono text-base text-emerald-400 break-words">{dork.example}</p>
            </div>
            <div className="flex items-center space-x-3 mt-5">
                <button
                    onClick={handleCopy}
                    className={`flex-1 flex items-center justify-center text-sm px-4 py-2 rounded-md transition-all duration-150 ${
                    copied
                        ? 'bg-green-600 text-white'
                        : 'bg-slate-700 hover:bg-slate-600 text-slate-300'
                    }`}
                >
                    <CopyIcon className="w-4 h-4 mr-2" />
                    {copied ? 'Copied!' : 'Copy Example'}
                </button>
                <button
                    onClick={handleTryIt}
                    className="flex-1 flex items-center justify-center text-sm px-4 py-2 rounded-md bg-cyan-700 hover:bg-cyan-600 text-white transition-colors"
                >
                    <ExternalLinkIcon className="w-4 h-4 mr-2" />
                    Try it
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;