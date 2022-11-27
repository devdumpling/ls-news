import { GNEWS_URLS } from "./constants";
import { ArticlesResponse } from "./types";

export interface FetchArticlesOptions {
  url?: string;
  init?: RequestInit;
}

// Pass fetch init in your application to specify caching strategy
// https://beta.nextjs.org/docs/data-fetching/fundamentals
export const fetchArticles = async ({
  url,
  init,
}: FetchArticlesOptions = {}) => {
  const fetchUrl = url || GNEWS_URLS.breaking;

  const res = await fetch(fetchUrl, init);
  const data: ArticlesResponse = await res.json();

  return data;
};
