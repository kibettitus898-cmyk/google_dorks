import React from 'react';

const categories = [
    {
        title: 'Kali Linux tools',
        color: 'bg-slate-600',
        tools: [
            { name: 'holehe', url: 'https://github.com/megadose/holehe', description: 'Check if an email is used on different sites.' },
            { name: 'Sherlock', url: 'https://github.com/sherlock-project/sherlock', description: 'Hunt down social media accounts by username.' },
            { name: 'Gumshoe', url: 'https://github.com/joule-consulting/gumshoe', description: 'API-based framework for OSINT investigations.' },
            { name: 'maigret', url: 'https://github.com/soxoj/maigret', description: 'Collect a dossier on a person by username.' },
            { name: 'blackbird', url: 'https://github.com/p1ngul1n0/blackbird', description: 'Search for a username on social networks.' }
        ]
    },
    {
        title: 'Online tools',
        color: 'bg-blue-800',
        tools: [
            { name: 'Whatsmyname', url: 'https://whatsmyname.app/', description: 'Enumerate usernames across many services.' },
            { name: 'user-searcher', url: 'https://user-searcher.com/', description: 'Find user profiles on forums and social networks.' },
            { name: 'namecheckup', url: 'https://www.namecheckup.com/', description: 'Check username availability across domains.' },
            { name: 'Namecheckr', url: 'https://www.namecheckr.com/', description: 'Check username availability across social sites.' },
            { name: 'Namechk', url: 'https://namechk.com/', description: 'Check username and domain availability.' }
        ]
    },
    {
        title: 'Paid Tools',
        color: 'bg-blue-600',
        tools: [
            { name: 'Epios', url: 'https://epieos.com/', description: 'Find information from an email or a phone number.' },
            { name: 'OSINT Industries', url: 'https://osintindustries.com/', description: 'Managed OSINT investigation platform.' },
            { name: 'Seon.io', url: 'https://seon.io/', description: 'Social media intelligence and fraud prevention.' },
            { name: 'digitalfootprint check', url: 'https://www.digitalfootprint.com/', description: 'Services for monitoring digital footprints.' }
        ]
    }
];

const OnlineProfilingSection: React.FC = () => {
    return (
        <section className="mt-20">
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-slate-100">Online Profiling</h2>
                <p className="text-slate-400 mt-2 max-w-3xl mx-auto">
                    A collection of tools for username enumeration and online profiling to build a digital identity of a target.
                </p>
            </div>
            <div className="max-w-6xl mx-auto bg-slate-800/50 border border-slate-700 rounded-lg p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map(category => (
                        <div key={category.title}>
                            <h3 className={`text-lg font-semibold text-white px-4 py-2 rounded-md mb-4 text-center ${category.color}`}>
                                {category.title}
                            </h3>
                            <ul className="space-y-4">
                                {category.tools.map(tool => (
                                    <li key={tool.name} className="bg-slate-900 border border-slate-700 rounded-md p-3 text-center transition-all hover:border-slate-500">
                                        {tool.url ? (
                                            <a href={tool.url} target="_blank" rel="noopener noreferrer" className="text-cyan-400 font-semibold hover:text-cyan-300">
                                                {tool.name}
                                            </a>
                                        ) : (
                                            <span className="text-slate-200 font-semibold">{tool.name}</span>
                                        )}
                                        <p className="text-xs text-slate-500 mt-1">{tool.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OnlineProfilingSection;