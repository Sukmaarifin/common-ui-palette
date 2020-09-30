export type SEOType = {
  title: string;
  description: string;
  keywords: Array<string>;
  language: string;
};

export const initialSEOs: SEOType = {
  title: '',
  description: '',
  keywords: [],
  language: 'ID',
};
