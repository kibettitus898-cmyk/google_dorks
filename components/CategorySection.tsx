import React from 'react';
import { Dork, DorkCategory } from '../types';
import DorkCard from './DorkCard';

interface CategorySectionProps {
  category: DorkCategory;
  onDorkSelect: (dork: Dork) => void;
  targetUrl: string;
  isChecklistMode: boolean;
  selectedDorksForPlan: Set<string>;
}

const CategorySection: React.FC<CategorySectionProps> = ({ category, onDorkSelect, targetUrl, isChecklistMode, selectedDorksForPlan }) => {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-cyan-400">{category.title}</h2>
        <p className="text-slate-400 mt-1">{category.description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {category.dorks.map((dork, index) => (
          <DorkCard 
            key={index} 
            dork={dork} 
            onSelect={() => onDorkSelect(dork)}
            targetUrl={targetUrl}
            isChecklistMode={isChecklistMode}
            isSelected={selectedDorksForPlan.has(dork.operator)}
          />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;