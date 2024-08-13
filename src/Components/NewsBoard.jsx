import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

// eslint-disable-next-line react/prop-types
export default function NewsBoard({ category, mode, searchQuery }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsdata.io/api/1/latest?country=eg&category=${category}&apikey=${
      import.meta.env.VITE_API_KEY
    }`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setArticles(data.results));
  }, [category]);

  return (
    <div
      style={{
        backgroundColor: mode ? "rgba(23, 25, 35, 1)" : "white",
      }}
    >
      <h2
        className={`
          text-center p-3
          text-${mode ? "light" : "dark"}
      `}
      >
        آخر <span className="badge bg-danger">الأخبار</span>
      </h2>
      {articles
        .filter((article) => {
          // eslint-disable-next-line react/prop-types
          return searchQuery.toLowerCase() === ""
            ? article
            : article.title.toLowerCase().includes(searchQuery);
        })
        .map((article) => (
          <NewsItem
            key={article.title}
            title={article.title}
            description={article.description}
            src={article.image_url}
            url={article.link}
            mode={mode}
          />
        ))}
    </div>
  );
}
