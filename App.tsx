import React, { useState, useMemo } from 'react';
import { DORK_CATEGORIES } from './constants';
import { OSINT_RESOURCES } from './osintResources';
import { Dork, DorkCategory } from './types';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategorySection from './components/CategorySection';
import Modal from './components/Modal';
import TargetUrlInput from './components/TargetUrlInput';
import OsintResourcesSection from './components/OsintResourcesSection';
import ChecklistActionBar from './components/ChecklistActionBar';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [targetUrl, setTargetUrl] = useState('');
  const [selectedDork, setSelectedDork] = useState<Dork | null>(null);
  const [isChecklistMode, setIsChecklistMode] = useState(false);
  const [selectedDorksForPlan, setSelectedDorksForPlan] = useState<Set<string>>(new Set());

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
    if (isChecklistMode) {
        handleToggleDorkForPlan(dork);
    } else {
        setSelectedDork(dork);
    }
  };
  
  const handleToggleDorkForPlan = (dork: Dork) => {
    const newSelection = new Set(selectedDorksForPlan);
    if (newSelection.has(dork.operator)) {
        newSelection.delete(dork.operator);
    } else {
        newSelection.add(dork.operator);
    }
    setSelectedDorksForPlan(newSelection);
  };

  const handleCloseModal = () => {
    setSelectedDork(null);
  };
  
  const generatePlanContent = () => {
    let content = `# OSINT Investigation Plan\n\n`;
    if (targetUrl) {
      content += `**Target:** \`${targetUrl.trim()}\`\n\n`;
    }
    content += `This document outlines a plan for your OSINT investigation. Use the checkboxes below to track your progress.\n\n---\n\n`;

    DORK_CATEGORIES.forEach(category => {
        const dorksInCategory = category.dorks.filter(dork => selectedDorksForPlan.has(dork.operator));

        if (dorksInCategory.length > 0) {
            content += `## ${category.title}\n\n`;
            dorksInCategory.forEach(dork => {
                const siteOperator = targetUrl.trim() ? `site:${targetUrl.trim()}` : '';
                const siteRegex = /site:[^\s]+/g;
                let finalExample = dork.example;

                if (siteOperator) {
                    if (dork.example.match(siteRegex)) {
                        finalExample = dork.example.replace(siteRegex, siteOperator);
                    } else {
                        finalExample = `${siteOperator} ${dork.example}`;
                    }
                }

                content += `- [ ] **${dork.operator}**: ${dork.description}\n`;
                content += `  - **Example:**\n`;
                content += `    \`\`\`\n    ${finalExample}\n    \`\`\`\n`;
                content += `  - **Notes:**\n`;
                content += "    ```markdown\n\n    ```\n\n";
            });
        }
    });

    return content;
  };

  const handleDownloadPlan = () => {
    const content = generatePlanContent();
    const blob = new Blob([content], { type: 'text/markdown;charset=utf-g' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    const filename = targetUrl.trim() ? `OSINT_Plan_${targetUrl.trim()}.md` : 'OSINT_Plan.md';
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleEnterChecklistMode = () => {
    const currentTarget = targetUrl.trim() || "example.com";
    const urlFromPrompt = window.prompt("Please enter or confirm the target URL for your OSINT investigation:", currentTarget);

    if (urlFromPrompt && urlFromPrompt.trim()) {
      setTargetUrl(urlFromPrompt.trim());
      setIsChecklistMode(true);
    }
  };

  const handleExitChecklistMode = () => {
    setIsChecklistMode(false);
    setSelectedDorksForPlan(new Set());
  };

  return (
    <div className={`min-h-screen bg-slate-900 text-slate-200 font-sans ${isChecklistMode ? 'pb-24' : ''}`}>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-slate-400 mb-8">
            An interactive cheat sheet for Google Dorking. Use these operators to refine your searches for OSINT research, finding specific information, and uncovering hidden data.
          </p>
          <div className="space-y-4">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <TargetUrlInput targetUrl={targetUrl} setTargetUrl={setTargetUrl} />
          </div>
          
          <div className="text-center mt-6">
            <button
              onClick={handleEnterChecklistMode}
              className="px-6 py-2 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-500 transition-colors shadow-md disabled:bg-slate-600 disabled:cursor-not-allowed"
              disabled={isChecklistMode}
            >
              Create a Plan
            </button>
          </div>

          <div className="space-y-12 mt-10">
            {filteredCategories.length > 0 ? (
              filteredCategories.map(category => (
                <CategorySection
                  key={category.title}
                  category={category}
                  onDorkSelect={handleDorkSelect}
                  targetUrl={targetUrl}
                  isChecklistMode={isChecklistMode}
                  selectedDorksForPlan={selectedDorksForPlan}
                />
              ))
            ) : (
                <div className="text-center py-16">
                    <p className="text-2xl text-slate-500">No dorks found for "{searchTerm}"</p>
                    <p className="text-slate-600 mt-2">Try a different search term.</p>
                </div>
            )}
          </div>
          
          <div className="mt-20">
            <OsintResourcesSection resources={OSINT_RESOURCES} />
          </div>

        </div>
      </main>
      <footer className="text-center p-6 text-slate-600 border-t border-slate-800 mt-12">
        <p>For educational and research purposes only.</p>
      </footer>
      {selectedDork && !isChecklistMode && (
        <Modal 
          dork={selectedDork} 
          onClose={handleCloseModal} 
          targetUrl={targetUrl} 
        />
      )}
      {isChecklistMode && (
        <ChecklistActionBar
            selectedCount={selectedDorksForPlan.size}
            onDownload={handleDownloadPlan}
            onCancel={handleExitChecklistMode}
        />
      )}
    </div>
  );
};

export default App;