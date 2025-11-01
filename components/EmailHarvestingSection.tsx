import React from 'react';

const categories = [
    {
        title: 'Kali Linux tools',
        color: 'bg-slate-600',
        tools: [
            { name: 'theHarvester', url: 'https://github.com/laramies/theHarvester', description: 'Gather emails, subdomains, hosts, etc.' },
            { name: 'emailharvester', url: 'https://github.com/maldevel/EmailHarvester', description: 'Retrieve emails from a specific domain.' }
        ]
    },
    {
        title: 'Online tools',
        color: 'bg-blue-800',
        tools: [
            { name: 'Hunter.io', url: 'https://hunter.io/', description: 'Find professional emails by domain.' },
            { name: 'Phonebook.cz', url: 'https://phonebook.cz/', description: 'Free search for emails by domain.' },
            { name: 'voilanorbert.com', url: 'https://www.voilanorbert.com/', description: 'Find and verify email addresses.' },
            { name: 'breach.vip', description: 'Legacy tool for searching data breaches.' }
        ]
    },
    {
        title: 'Browser Extensions',
        color: 'bg-black',
        tools: [
            { name: 'clearbit.com', url: 'https://www.clearbit.com/platform/connect', description: 'Find emails from within your inbox.' },
            { name: 'Email Hunter', url: 'https://chromewebstore.google.com/detail/email-hunter/mbindhfolmpijhodmgkloeeppmkhpmhc?hl=en&pli=1', description: 'Find email addresses from anywhere on the web.' }
        ]
    },
    {
        title: 'Manual',
        color: 'bg-blue-600',
        tools: [
            { name: 'LinkedIn', url: 'https://www.linkedin.com/', description: 'Search profiles for contact info.' },
            { name: 'Google Dorking', description: 'Use dorks to find exposed emails.' },
            { name: 'Contact us', description: 'Check a website\'s contact page.' }
        ]
    }
];

const EmailHarvestingSection: React.FC = () => {
    return (
        <section className="mt-20">
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-slate-100">Harvesting Emails</h2>
                <p className="text-slate-400 mt-2 max-w-3xl mx-auto">
                    A visual guide to popular tools and techniques for discovering email addresses, based on common OSINT methodologies.
                </p>
            </div>
            <div className="max-w-6xl mx-auto bg-slate-800/50 border border-slate-700 rounded-lg p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

export default EmailHarvestingSection;