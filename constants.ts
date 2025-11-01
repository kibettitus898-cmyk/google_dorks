import { DorkCategory } from './types';

export const DORK_CATEGORIES: DorkCategory[] = [
  {
    title: 'Filetype Operators',
    description: 'Restrict searches to specific file types. Useful for finding reports, documents, and spreadsheets.',
    dorks: [
      {
        operator: 'filetype:pdf',
        description: 'Finds Adobe PDF files.',
        example: 'filetype:pdf "annual security report" 2023',
      },
      {
        operator: 'filetype:xls OR filetype:xlsx',
        description: 'Finds Microsoft Excel spreadsheets.',
        example: 'filetype:xlsx "employee contact list"',
      },
      {
        operator: 'filetype:doc OR filetype:docx',
        description: 'Finds Microsoft Word documents.',
        example: 'filetype:docx "confidential meeting notes"',
      },
      {
        operator: 'filetype:ppt OR filetype:pptx',
        description: 'Finds Microsoft PowerPoint presentations.',
        example: 'filetype:pptx "internal marketing strategy"',
      },
      {
        operator: 'filetype:log',
        description: 'Finds log files, which can contain sensitive information.',
        example: 'filetype:log "password" OR "pass"',
      },
    ],
  },
  {
    title: 'Site & URL Operators',
    description: 'Focus your search on specific websites, domains, or parts of a URL.',
    dorks: [
      {
        operator: 'site:',
        description: 'Restricts results to a specific website or domain.',
        example: 'site:github.com "api key"',
      },
      {
        operator: 'inurl:',
        description: 'Finds pages with a specific word in the URL.',
        example: 'inurl:admin login',
      },
      {
        operator: 'allinurl:',
        description: 'Finds pages with all specified words in the URL.',
        example: 'allinurl:etc/passwd',
      },
      {
        operator: 'related:',
        description: 'Finds sites that are related to a specific URL.',
        example: 'related:google.com',
      },
      {
        operator: 'cache:',
        description: "Shows Google's cached version of a page.",
        example: 'cache:example.com',
      },
      {
        operator: 'info:',
        description: 'Shows information about a specific URL, including cache, related pages, and links.',
        example: 'info:example.com',
      },
       {
        operator: 'link:',
        description: 'Finds pages that link to a specified URL. (Note: Largely deprecated by Google).',
        example: 'link:microsoft.com',
      },
    ],
  },
  {
    title: 'Content & Text Operators',
    description: 'Control how Google searches for text within the page content and title.',
    dorks: [
      {
        operator: 'intitle:',
        description: 'Finds pages with a specific word in the title.',
        example: 'intitle:"index of" "private"',
      },
      {
        operator: 'allintitle:',
        description: 'Finds pages with all specified words in the title.',
        example: 'allintitle:"security camera" "live"',
      },
      {
        operator: 'intext:',
        description: 'Searches for a word within the body of the page.',
        example: 'intext:"confidential information"',
      },
      {
        operator: 'allintext:',
        description: 'Searches for all specified words within the body of the page.',
        example: 'allintext:"username" "password" "login"',
      },
       {
        operator: 'inanchor:',
        description: 'Searches for text within the anchor text of links.',
        example: 'inanchor:"click here for details"',
      },
      {
        operator: 'AROUND(X)',
        description: 'Finds pages where two words are within X words of each other. A proximity search.',
        example: 'security AROUND(5) breach',
      },
    ],
  },
  {
    title: 'Advanced Operators & Syntax',
    description: 'Combine operators and use special syntax for more complex and powerful queries.',
    dorks: [
      {
        operator: '" "',
        description: 'Forces an exact-match search for a phrase.',
        example: '"highly sensitive document"',
      },
      {
        operator: '*',
        description: 'Acts as a wildcard, matching any word.',
        example: '"My password is *"',
      },
      {
        operator: '-',
        description: 'Excludes a word from the search results.',
        example: 'jaguar speed -car -animal',
      },
      {
        operator: 'OR',
        description: 'Searches for one term OR another. Must be in uppercase.',
        example: 'passwords OR credentials',
      },
      {
        operator: '|',
        description: 'Acts as a logical OR, equivalent to the OR operator.',
        example: 'inurl:admin | inurl:login',
      },
      {
        operator: '..',
        description: 'Searches within a range of numbers.',
        example: 'price $50..$100',
      },
       {
        operator: 'before: & after:',
        description: 'Filters results to before or after a specific date (YYYY-MM-DD).',
        example: 'site:example.com "data breach" after:2023-01-01 before:2023-12-31',
      },
    ],
  },
  {
    title: 'Specialized Search Operators',
    description: 'These operators perform specific actions or retrieve specialized information directly in the search results.',
    dorks: [
      {
        operator: 'define:',
        description: 'Provides the definition of a word from various sources.',
        example: 'define:phishing',
      },
      {
        operator: 'weather:',
        description: 'Displays the weather forecast for a specific location.',
        example: 'weather:london',
      },
      {
        operator: 'stocks:',
        description: 'Retrieves stock market information for a specific ticker symbol.',
        example: 'stocks:googl',
      },
      {
        operator: 'map:',
        description: 'Shows a map of a specified location.',
        example: 'map:silicon valley',
      },
      {
        operator: 'movie:',
        description: 'Finds information about a specific movie, including showtimes if available.',
        example: 'movie:the matrix',
      },
      {
        operator: 'source:',
        description: 'Restricts news searches to a specific source within Google News.',
        example: 'malware source:wired',
      },
    ]
  }
];