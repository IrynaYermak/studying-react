import "./App.css";
import Counter from "./Counter";
import Form from "./Form";
import ParentComponent from "./ParentComponent";

function App() {
  return (
    <>
      <h1 className="page-header">Props from Zero to Hero</h1>
      <Form />
      <Counter />
      <ParentComponent />
    </>
  );
}

export default App;
