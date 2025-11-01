export interface Dork {
  operator: string;
  description: string;
  example: string;
}

export interface DorkCategory {
  title: string;
  description: string;
  dorks: Dork[];
  emoji?: string;
}

export interface OsintResource {
  name: string;
  description: string;
  url: string;
}