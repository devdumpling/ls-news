import { fetcher, GNewsArticle } from "lsn-core";

export default function Home({ articles }: { articles: GNewsArticle[] }) {
  console.log({ articles });

  return (
    <div>
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
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetcher();
  const { articles } = data;
  return {
    props: {
      articles,
    },
  };
}
