import React from 'react';
import { OsintResource } from '../types';
import ResourceCard from './ResourceCard';

interface OsintResourcesSectionProps {
  resources: OsintResource[];
}

const OsintResourcesSection: React.FC<OsintResourcesSectionProps> = ({ resources }) => {
  return (
    <section>
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold text-cyan-400">Helpful OSINT Resources</h2>
        <p className="text-slate-400 mt-2 max-w-2xl mx-auto">
          Beyond Google Dorking, these tools and websites are essential for any OSINT investigator's toolkit.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {resources.map((resource) => (
          <ResourceCard key={resource.name} resource={resource} />
        ))}
      </div>
    </section>
  );
};

export default OsintResourcesSection;