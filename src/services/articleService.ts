import type { Article } from "../types/article";
import axios from "axios";

interface ArticleHttpResponse {
  hits: Article[];
  nbPages: number;
}

export const fetchArticles = async (
  topic: string,
  page: number
): Promise<ArticleHttpResponse> => {
  const response = await axios.get<ArticleHttpResponse>(
    "https://hn.algolia.com/api/v1/search",
    {
      params: { query: topic, page },
    }
  );
  return response.data;
};
