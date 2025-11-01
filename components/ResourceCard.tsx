import React from 'react';
import { OsintResource } from '../types';
import ExternalLinkIcon from './icons/ExternalLinkIcon';

interface ResourceCardProps {
  resource: OsintResource;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 flex flex-col h-full shadow-lg">
      <div className="flex-grow">
        <h3 className="text-lg font-bold text-cyan-400">{resource.name}</h3>
        <p className="text-slate-300 mt-2 mb-4 text-sm">{resource.description}</p>
      </div>
      <div className="mt-auto">
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-sm px-3 py-2 rounded-md bg-slate-700 hover:bg-slate-600 text-slate-300 transition-colors w-full"
        >
          <ExternalLinkIcon className="w-4 h-4 mr-2" />
          Visit Site
        </a>
      </div>
    </div>
  );
};

export default ResourceCard;