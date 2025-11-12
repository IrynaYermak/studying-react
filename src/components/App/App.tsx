import "./App.css";
// import axios from "axios";
// import { useQuery, keepPreviousData } from "@tanstack/react-query";
// import SearchForm from "../Form/SearchForm";
// import { useState } from "react";
// import { useEffect } from "react";
// import type { Article } from "../types/article";
// import ArticleList from "../ArticleList";
// import { fetchArticles } from "../../services/articleService";
// import ReactPaginate from "react-paginate";
import OrderFormFormik from "../Form/OrderFormFormik";
// import Timer from "../Timer";
// import Modal from "../Modal/Modal";

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

// -------------App component with React Query----------

// const fetchPerson = async (id: string) => {
//   const response = await axios.get(`https://swapi.info/api/people/${id}`);
//   return response.data;
// };

// import { useQuery } from "@tanstack/react-query";

// function App() {
// const [count, setCount] = useState(1);
// const [characterId, setCharacterId] = useState("");

// const { data, isLoading, isError, error } = useQuery({
//   queryKey: ["person", characterId],
//   queryFn: () => fetchPerson(characterId),
//   enabled: characterId !== "",
// });

//   const [topic, setTopic] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const { isLoading, isError, data, error, isSuccess } = useQuery({
//     queryKey: ["articles", topic, currentPage],
//     queryFn: () => fetchArticles(topic, currentPage),
//     enabled: topic !== "",
//     placeholderData: keepPreviousData,
//   });

//   const handleSearch = async (newTopic: string) => {
//     setTopic(newTopic);
//     setCurrentPage(1);
//   };
//   const totalPages = data?.nbPages ?? 0;

//   return (
//     <>
//       <SearchForm onSubmit={handleSearch} />
//       {isSuccess && totalPages > 1 && (
//         <ReactPaginate
//           pageCount={totalPages}
//           pageRangeDisplayed={2}
//           marginPagesDisplayed={3}
//           onPageChange={({ selected }) => setCurrentPage(selected + 1)}
//           forcePage={currentPage - 1}
//           // containerClassName={css.pagination}
//           // activeClassName={css.active}
//           nextLabel="→"
//           previousLabel="←"
//         />
//       )}

//       {isLoading && <p>Loading...</p>}
//       {isError && <p>Oops,an error occured: {error.message}</p>}
//       {data && data.hits.length > 0 && <ArticleList items={data.hits} />}
//     </>
//   );
// }

// _______________strict mode___________________________

// function App() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <div>
//       <h1>Main content of the page</h1>
//       <button onClick={openModal}>Open modal</button>
//       {isModalOpen && (
//         <Modal onClose={closeModal}>
//           <h2>Custom Modal Content</h2>
//           <p>This is a reusable modal with dynamic content.</p>
//         </Modal>
//       )}
//     </div>
//   );
// }

// -------------- lesson 7 react-----------------------------
// import { fetchPerson } from "../../services/swapiService";

// export default function App() {
//   const [counter, setCounter] = useState(0);
//   const { data, isError, isLoading } = useQuery({
//     queryKey: ["character", counter],
//     queryFn: () => fetchPerson(counter),
//     enabled: counter > 0,
//     staleTime: 60 * 1000,
//     // placeholderData:
//   });

//   return (
//     <>
//       <button
//         style={{ backgroundColor: "white", color: "black" }}
//         onClick={() => setCounter((prevCounter) => prevCounter + 1)}
//       >
//         +
//       </button>
//       <p>{counter}</p>
//       <button
//         style={{ backgroundColor: "white", color: "black" }}
//         onClick={() => setCounter((prevCounter) => prevCounter - 1)}
//       >
//         -
//       </button>
//       {isLoading && <p>Loading...</p>}
//       {isError && <p>Oops....</p>}
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </>
//   );
// }
// -----------------------------------------------
// export default App;

{
  /* -----------pagination--------------- */
}
{
  /* <p>
        Current page {currentPage} | Total pages {totalPages}
      </p>
      <button
        onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        Next
      </button> */
}
// -------------------formik study---------------

export default function App() {
  return <OrderFormFormik />;
}
