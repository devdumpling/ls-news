import { fetcher } from "./fetcher";

// Quick test function to make sure the fetcher works
export const test = async () => {
  const data = await fetcher();

  const { articles } = data;

  for (const article of articles) {
    console.log(article.title);
    console.log(article.description);
  }
};

test();
