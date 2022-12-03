export interface Quote {
  category: string;
  description: string;
  author: string;
  id?: string;
}

export interface Category {
  title: string;
  id: string;
}

export interface QuotesList {
  [id: string]: Quote;
}