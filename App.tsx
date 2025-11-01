import React, { useState, useMemo } from 'react';
import { DORK_CATEGORIES } from './constants';
import { Dork, DorkCategory } from './types';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategorySection from './components/CategorySection';
import Modal from './components/Modal';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDork, setSelectedDork] = useState<Dork | null>(null);

  const filteredCategories = useMemo(() => {
    if (!searchTerm.trim()) {
      return DORK_CATEGORIES;
    }

    const lowercasedFilter = searchTerm.toLowerCase();
    const newFilteredCategories: DorkCategory[] = [];

    DORK_CATEGORIES.forEach(category => {
      const filteredDorks = category.dorks.filter(
        dork =>
          dork.operator.toLowerCase().includes(lowercasedFilter) ||
          dork.description.toLowerCase().includes(lowercasedFilter) ||
          dork.example.toLowerCase().includes(lowercasedFilter)
      );

      if (filteredDorks.length > 0) {
        newFilteredCategories.push({
          ...category,
          dorks: filteredDorks,
        });
      }
    });

    return newFilteredCategories;
  }, [searchTerm]);

  const handleDorkSelect = (dork: Dork) => {
    setSelectedDork(dork);
  };

  const handleCloseModal = () => {
    setSelectedDork(null);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-slate-400 mb-8">
            An interactive cheat sheet for Google Dorking. Use these operators to refine your searches for OSINT research, finding specific information, and uncovering hidden data.
          </p>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          <div className="space-y-12 mt-10">
            {filteredCategories.length > 0 ? (
              filteredCategories.map(category => (
                <CategorySection
                  key={category.title}
                  category={category}
                  onDorkSelect={handleDorkSelect}
                />
              ))
            ) : (
                <div className="text-center py-16">
                    <p className="text-2xl text-slate-500">No dorks found for "{searchTerm}"</p>
                    <p className="text-slate-600 mt-2">Try a different search term.</p>
                </div>
            )}
          </div>
        </div>
      </main>
      <footer className="text-center p-6 text-slate-600 border-t border-slate-800 mt-12">
        <p>For educational and research purposes only.</p>
      </footer>
      {selectedDork && (
        <Modal dork={selectedDork} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;