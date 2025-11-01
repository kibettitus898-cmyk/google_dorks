
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
        operator: 'OR or |',
        description: 'Searches for one term OR another. Must be in uppercase.',
        example: 'passwords OR credentials',
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
];
