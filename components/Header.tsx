
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-900/70 backdrop-blur-lg border-b border-slate-800 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-2xl md:text-3xl font-bold text-center">
          <span className="text-cyan-400">Google Dorks</span>
          <span className="text-slate-300"> OSINT Guide</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
