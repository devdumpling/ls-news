import { GNEWS_URLS } from "./constants";
import { ArticlesResponse } from "./types";

export const fetcher = async (url?: string) => {
  const fetchUrl = url || GNEWS_URLS.breaking;

  const res = await fetch(fetchUrl);
  const data: ArticlesResponse = await res.json();

  return data;
};
