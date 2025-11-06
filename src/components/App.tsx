import "./App.css";
// import axios from "axios";
// import SearchForm from "./SearchForm";
import { useState } from "react";
import { useEffect } from "react";
// import type { Article } from "../types/article";
// import ArticleList from "./ArticleList";
import Timer from "./Timer";
import Modal from "./Modal/Modal";

// function App() {
//   const [articles, setArticles] = useState<Article[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);

//   const handleSearch = async (topic: string) => {
//     try {
//       setIsLoading(true);
//       setIsError(false);
//       const response = await axios.get<ArticleHttpResponse>(
//         `https://hn.algolia.com/api/v1/search?query=${topic}`
//       );
//       setArticles(response.data.hits);
//     } catch {
//       setIsError(true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <>
//       <h1 className="page-header">Find the article :</h1>

//       <SearchForm onSubmit={handleSearch} />
//       {isLoading && <p>Loading data, please wait...</p>}
//       {isError && <p>Whoops,something went wrong! Please try again!</p>}
//       {articles.length > 0 && <ArticleList items={articles} />}
//     </>
//   );
// }

// new App component

// function App() {
//   const [person, setPerson] = useState(null);
//   const [count, setCount] = useState(1);

//   useEffect(() => {
//     async function fetchCharacters() {
//       const response = await axios.get(
//         `https://swapi.info/api/people/${count}`
//       );
//       setPerson(response.data);
//     }
//     fetchCharacters();
//   }, [count]);

//   console.log("App renderd!");

//   return (
//     <>
//       <h2>The count is {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Get next character</button>
//       <pre>{JSON.stringify(person, null, 2)}</pre>
//     </>
//   );
// }

// strict mode

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <h1>Main content of the page</h1>
      <button onClick={openModal}>Open modal</button>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          {" "}
          <h2>Custom Modal Content</h2>
          <p>This is a reusable modal with dynamic content.</p>
        </Modal>
      )}
    </div>
  );
}

export default App;
