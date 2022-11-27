import { ArticlesResponse, GNEWS_URLS } from "lsn-core";
import Link from "next/link";

export default async function Home() {
  const { articles } = await getArticles();

  return (
    <main>
      <h1>lsn</h1>
      <p>list just the fucking news</p>
      <div>
        <h2>Breaking Stories (US)</h2>
        <ul>
          {articles.map((article) => (
            <li key={article.title}>
              <details>
                <summary>
                  {article.title}
                </summary>
                <p>{article.description}</p>
                <Link href={article.url}>{article.source.name}</Link>
              </details>
            </li>
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
