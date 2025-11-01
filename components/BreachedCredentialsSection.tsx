import React from 'react';

const freeTools = [
    { name: 'breachdirectory', url: 'https://breachdirectory.org/', description: 'Search engine for breached data.' },
    { name: 'haveibeenpwned', url: 'https://haveibeenpwned.com/', description: 'Check if your email or phone is in a data breach.' },
    { name: 'Proxynova', url: 'https://www.proxynova.com/breach-check/', description: 'Check email addresses against known breaches.' },
    { name: 'Leakpeak', url: 'https://leakpeak.com/', description: 'Data breach search engine for personal and enterprise use.' },
];

const paidTools = [
    { name: 'Dehashed', url: 'https://www.dehashed.com/', description: 'Advanced data breach search with asset monitoring.' },
    { name: 'weleakinfo.io', url: 'https://weleakinfo.to/', description: 'Provides access to multiple data breaches.' },
    { name: 'Snusbase', url: 'https://snusbase.com/', description: 'Stay on top of the latest database breaches.' },
    { name: 'leak-lookup', url: 'https://leak-lookup.com/', description: 'Search across thousands of data breaches.' },
    { name: 'Scattered Secrets', url: 'https://scatteredsecrets.com/', description: 'Data leak search engine focused on OSINT.' },
];

const BreachedCredentialsSection: React.FC = () => {
    return (
        <section className="mt-20">
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-slate-100">Breached Credentials</h2>
                <p className="text-slate-400 mt-2 max-w-3xl mx-auto">
                    Check if credentials have been compromised in known data breaches using these free and paid services.
                </p>
            </div>
            <div className="max-w-4xl mx-auto bg-slate-800/50 border border-slate-700 rounded-lg p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* FREE Tools */}
                    <div>
                        <h3 className="text-xl font-bold text-center text-sky-400 mb-4 bg-sky-900/50 py-2 rounded-lg">
                            FREE
                        </h3>
                        <ul className="space-y-4">
                            {freeTools.map(tool => (
                                <li key={tool.name} className="bg-slate-900 border border-slate-700 rounded-md p-3 text-center transition-all hover:border-sky-500">
                                    <a href={tool.url} target="_blank" rel="noopener noreferrer" className="text-cyan-400 font-semibold hover:text-cyan-300">
                                        {tool.name}
                                    </a>
                                    <p className="text-xs text-slate-500 mt-1">{tool.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* PAID Tools */}
                    <div>
                        <h3 className="text-xl font-bold text-center text-amber-400 mb-4 bg-slate-900/80 py-2 rounded-lg">
                            PAID
                        </h3>
                        <ul className="space-y-4">
                            {paidTools.map(tool => (
                                 <li key={tool.name} className="bg-slate-900 border border-slate-700 rounded-md p-3 text-center transition-all hover:border-amber-500">
                                    <a href={tool.url} target="_blank" rel="noopener noreferrer" className="text-cyan-400 font-semibold hover:text-cyan-300">
                                        {tool.name}
                                    </a>
                                    <p className="text-xs text-slate-500 mt-1">{tool.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BreachedCredentialsSection;