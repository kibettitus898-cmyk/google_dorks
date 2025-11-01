import React from 'react';

const validationTools = [
    {
        name: 'Intelx',
        url: 'https://intelx.io/',
        description: 'Intelligence search engine for finding email breaches and more.'
    },
    {
        name: 'Emailchecker.net',
        url: 'https://email-checker.net/',
        description: 'Verify if an email address is real and valid.'
    },
    {
        name: 'Email Hippo',
        url: 'https://tools.emailhippo.com/',
        description: 'Free online tool to check if an email address exists.'
    },
    {
        name: 'Experte Email Finder',
        url: 'https://www.experte.com/email-finder',
        description: 'Find and verify email addresses in bulk.'
    },
    {
        name: 'Mail Tester',
        url: 'https://app.mailtester.com/signin',
        description: 'Check email validity and server health.'
    }
];

const EmailValidationSection: React.FC = () => {
    return (
        <section className="mt-20">
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-slate-100">Validating Emails</h2>
                <p className="text-slate-400 mt-2 max-w-3xl mx-auto">
                    Once you've harvested potential emails, use these tools to verify their authenticity and validity.
                </p>
            </div>
            <div className="max-w-2xl mx-auto bg-slate-800/50 border border-slate-700 rounded-lg p-6 md:p-8">
                 <div>
                    <h3 className="text-lg font-semibold text-white px-4 py-2 rounded-md mb-4 text-center bg-blue-800">
                        Online tools
                    </h3>
                    <ul className="space-y-4">
                        {validationTools.map(tool => (
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
            </div>
        </section>
    );
};

export default EmailValidationSection;