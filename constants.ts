// FIX: The original file contained placeholder text, causing build errors.
// It has been replaced with the actual constant data required by the application.
import { DorkCategory } from './types';

export const DORK_CATEGORIES: DorkCategory[] = [
  {
    title: 'Filetype Searching',
    description: 'Find specific file types that may contain sensitive information.',
    emoji: '📄',
    dorks: [
      {
        operator: 'filetype:pdf',
        description: 'Searches for PDF documents. Useful for finding reports, manuals, and internal documents.',
        example: 'site:example.com filetype:pdf "confidential"',
      },
      {
        operator: 'filetype:log',
        description: 'Locates log files, which can contain usernames, passwords, and other sensitive data.',
        example: 'site:example.com filetype:log "password reset"',
      },
      {
        operator: 'filetype:sql',
        description: 'Finds SQL database dumps, which can expose entire databases.',
        example: 'site:example.com filetype:sql "dump" "password"',
      },
      {
        operator: 'filetype:xls OR filetype:xlsx',
        description: 'Finds Microsoft Excel spreadsheets. Often contain financial data, contact lists, or credentials.',
        example: 'site:example.com filetype:xlsx "employee salaries"',
      },
      {
        operator: 'ext: (operator)',
        description: 'An alternative to filetype:. Use "ext:" to find files with a specific extension.',
        example: 'site:example.com ext:env "DB_PASSWORD"',
      }
    ],
  },
  {
    title: 'URL & Text Operators',
    description: 'Refine searches based on content found in URLs, titles, or body text.',
    emoji: '✍️',
    dorks: [
      {
        operator: 'inurl:admin',
        description: 'Finds pages with "admin" in their URL, often leading to login portals.',
        example: 'inurl:admin login',
      },
      {
        operator: 'intitle:"index of"',
        description: 'Finds open directory listings on servers, potentially exposing files.',
        example: 'intitle:"index of" "backup"',
      },
      {
        operator: 'intext:"password"',
        description: 'Searches for the exact phrase "password" within the body of pages.',
        example: 'site:example.com intext:"password"',
      },
      {
        operator: 'allintext:username password email',
        description: 'Finds pages containing all specified keywords in the text.',
        example: 'allintext:username password email filetype:log',
      },
    ],
  },
  {
    title: 'Site & Domain Operators',
    description: 'Limit your search to specific websites or find related domains.',
    emoji: '🌐',
    dorks: [
      {
        operator: 'site:example.com',
        description: 'Restricts search to a single domain. The foundation of targeted OSINT.',
        example: 'site:example.com "api_key"',
      },
      {
        operator: 'related:example.com',
        description: 'Finds sites that are related to a given domain.',
        example: 'related:github.com',
      },
      {
        operator: 'site:*.example.com -www',
        description: 'Finds all subdomains of a site, excluding the main www subdomain.',
        example: 'site:*.google.com -www',
      },
    ],
  },
    {
    title: 'People OSINT & Social Media',
    description: 'Dorks to find information about individuals, social media profiles, and personal data.',
    emoji: '👥',
    dorks: [
      {
        operator: 'site:linkedin.com | site:facebook.com | site:twitter.com',
        description: 'Searches for a person\'s name across major social media platforms.',
        example: 'site:linkedin.com | site:twitter.com "John Doe" "Engineer"',
      },
      {
        operator: 'intitle:resume OR intitle:cv filetype:pdf',
        description: 'Locates resumes or CVs in PDF format, often containing contact details and work history.',
        example: '(intitle:resume OR intitle:cv) "Jane Smith" "software developer" filetype:pdf -jobs',
      },
      {
        operator: 'intext:"@gmail.com" OR intext:"@outlook.com"',
        description: 'Uncovers email addresses by searching for a person\'s name alongside common email domains.',
        example: '"John Doe" intext:"@gmail.com" ',
      },
      {
        operator: 'allintext:"username" "JohnDoe123"',
        description: 'Finds pages where a specific username appears, useful for tracking a person across different platforms.',
        example: 'allintext:"JohnDoe123" "gaming forum"',
      },
      {
        operator: '"John Doe" "about me"',
        description: 'Finds personal websites or "About Me" pages associated with a name.',
        example: '"Jane Smith" "my personal blog"',
      },
      {
        operator: 'filetype:pdf author:"John Doe"',
        description: 'Finds PDF documents where the specified person is listed as the author in the metadata.',
        example: 'filetype:pdf author:"Jane Smith" "research paper"',
      },
       {
        operator: 'site:reddit.com/user/',
        description: 'Searches for a person\'s activity and comments on Reddit if you know their username.',
        example: 'site:reddit.com/user/SomeUser "commented on"',
      },
      {
        operator: 'site:instagram.com | site:flickr.com | site:pinterest.com',
        description: 'Finds photo profiles on popular image-sharing sites for a given name.',
        example: 'site:instagram.com "Jane Smith" travel',
      },
       {
        operator: 'intext:"John Doe" AND ("phone" OR "contact")',
        description: 'Attempts to find phone numbers listed on public web pages. Use ethically.',
        example: 'filetype:xls intext:"Doe" "contact"',
      },
       {
        operator: 'site:github.com "John Doe"',
        description: 'Finds user profiles and code repositories on GitHub.',
        example: 'site:github.com "Jane Smith" "project portfolio"',
      },
    ],
  },
  {
    title: 'Advanced Operators & Syntax',
    description: 'Combine operators for more precise and powerful searches.',
    emoji: '⚙️',
    dorks: [
      {
        operator: '"search query"',
        description: 'Forces an exact-match search for the phrase inside the quotes.',
        example: '"internal company presentation"',
      },
      {
        operator: 'OR',
        description: 'Broadens searches to find pages that include either of the keywords.',
        example: 'confidential OR proprietary',
      },
      {
        operator: '| (pipe)',
        description: 'Identical to the OR operator. Can be used to find multiple types of login pages.',
        example: 'inurl:login | inurl:signin',
      },
      {
        operator: '-',
        description: 'Excludes a specific keyword from the search results.',
        example: 'site:example.com -intitle:"Jobs"',
      },
      {
        operator: '*',
        description: 'Acts as a wildcard to match any word or phrase.',
        example: '"welcome to the * page"',
      },
      {
        operator: 'AROUND(X)',
        description: 'Finds pages where two words are within X words of each other. Useful for proximity searches.',
        example: 'passwords AROUND(5) usernames',
      },
    ],
  },
    {
    title: 'Advanced & Information Operators',
    description: 'Use advanced operators for cached pages and information gathering.',
    emoji: 'ℹ️',
    dorks: [
      {
        operator: 'cache:example.com',
        description: "Shows Google's cached version of a page. Useful for viewing recently deleted pages.",
        example: 'cache:example.com/sensitive-info.html',
      },
      {
        operator: 'info:example.com',
        description: 'Provides a page of links to more information about a specific URL, including cache, related sites, etc.',
        example: 'info:microsoft.com',
      },
      {
        operator: 'link:example.com',
        description: 'Finds pages that link to the specified domain. (Note: Largely deprecated by Google).',
        example: 'link:example.com',
      },
    ],
  },
   {
    title: 'Specialized Search Operators',
    description: 'Use special keywords for specific types of information like weather, stocks, or definitions.',
    emoji: '⭐',
    dorks: [
      {
        operator: 'define:',
        description: 'Provides the definition of a word from various online sources.',
        example: 'define:phishing',
      },
      {
        operator: 'stocks:',
        description: 'Retrieves stock market information for a given ticker symbol.',
        example: 'stocks:GOOGL',
      },
      {
        operator: 'weather:',
        description: 'Shows the weather forecast for a specific location.',
        example: 'weather:San Francisco',
      },
      {
        operator: 'source:',
        description: 'Finds news articles from a specific source in Google News.',
        example: 'cybersecurity source:wired',
      },
    ],
  },
  {
    title: 'Vulnerability Scanning Dorks',
    description: 'Find potential web vulnerabilities. Use these dorks responsibly and ethically.',
    emoji: '🛡️',
    dorks: [
      {
        operator: 'inurl:".php?id="',
        description: 'Finds URLs with a ".php?id=" parameter, a common entry point for SQL injection.',
        example: 'inurl:".php?id=1"',
      },
      {
        operator: 'inurl:"?id="',
        description: 'Finds URLs with generic ID parameters, a common vector for SQL injection across various web technologies.',
        example: 'inurl:"/products/item.asp?id="',
      },
      {
        operator: 'intext:"sql syntax near"',
        description: 'Searches for common SQL error messages exposed on web pages.',
        example: 'intext:"sql syntax near" OR intext:"syntax error has occurred"',
      },
      {
        operator: 'inurl:?search= OR inurl:?query=',
        description: 'Finds search parameters that could be vulnerable to Cross-Site Scripting (XSS).',
        example: 'site:example.com inurl:?search=',
      },
      {
        operator: 'filetype:ini "mysql"',
        description: 'Looks for configuration files (.ini) that might contain database credentials.',
        example: 'filetype:ini "mysql" "password"',
      },
    ],
  },
];