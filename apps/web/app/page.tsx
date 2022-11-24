import { ArticlesResponse, GNEWS_URLS } from "lsn-core";

export default async function Home() {
  const { articles } = await getArticles();

  return (
    <main>
      <h1>lsn</h1>
      <p>list just the fucking news</p>
      <div>
        <h2>Breaking US Stories</h2>
        <ul>
          {articles.map((article) => (
            <li key={article.title}>{article.title}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}

async function getArticles() {
  const res = await fetch(GNEWS_URLS.breaking, { next: { revalidate: 21600 } });
  const data: ArticlesResponse = await res.json();

  return data;
}
