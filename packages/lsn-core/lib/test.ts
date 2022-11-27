import { fetchArticles } from "./fetchers";

// Quick test function to make sure the fetcher works
export const test = async () => {
  const data = await fetchArticles();

  const { articles } = data;

  for (const article of articles) {
    console.log(article.title);
    console.log(article.description);
  }
};

test();
