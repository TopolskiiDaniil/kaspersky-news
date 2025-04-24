import { IData_SnippetNews } from "../types/data";

const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

function generateRandomNewsDuplicates(news: IData_SnippetNews): IData_SnippetNews[] {
  const { TI, DP, LANG, AU, FAV, REACH, CNTR, CNTR_CODE } = news;
  const randomLength = Math.floor(Math.random() * 10);
  const sampleDomains = [
    'techcrunch.com',
    'bbc.co.uk',
    'cnn.com',
    'theverge.com',
    'nytimes.com',
    'wired.com',
    'globalsecuritymag.com',
    'forbes.com',
    'reuters.com'
  ];

  const getRandomDomain = () => sampleDomains[Math.floor(Math.random() * sampleDomains.length)];
  const getRandomId = () => Math.floor(Math.random() * 1_000_000_000);
  const getRandomTitle = () => `Random news headline #${Math.floor(Math.random() * 1000)}`;
  const getRandomUrl = (domain: string) =>
    `https://${domain}/article-${Math.floor(Math.random() * 100000)}.html`;

  const newsArray = Array.from({ length: randomLength }, () => {
    const domain = getRandomDomain();
    return {
      ID: getRandomId(),
      TI: TI,
      URL: getRandomUrl(domain),
      DP: DP,
      DOM: domain,
      LANG: LANG,
      AU: AU,
      FAV: FAV,
      REACH: REACH,
      CNTR: CNTR,
      CNTR_CODE: CNTR_CODE
    };
  });

  return newsArray;
}

export { capitalizeFirstLetter,  generateRandomNewsDuplicates };