import "./App.css";
import axios from "axios";
import SearchForm from "./SearchForm";
import { useState } from "react";
import type { Article } from "../types/article";
import ArticleList from "./ArticleList";

function App() {
  const [articles, setArticles] = useState<Article[]>([]);

  const handleSearch = async (topic: string) => {
    const response = await axios.get<ArticleHttpResponse>(
      `https://hn.algolia.com/api/v1/search?query=${topic}`
    );
    setArticles(response.data.hits);
  };

  return (
    <>
      <h1 className="page-header">Find the article :</h1>

      <SearchForm onSubmit={handleSearch} />
      {articles.length > 0 && <ArticleList items={articles} />}
    </>
  );
}

export default App;
