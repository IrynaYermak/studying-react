import "./App.css";
import Counter from "./Counter";
import Form from "./Form";
import Greetings from "./Greetings";
import ParentComponent from "./ParentComponent";
import ThemeToggle from "./ThemeToggle";

function App() {
  return (
    <>
      <h1 className="page-header">Props from Zero to Hero</h1>
      <Greetings name="Simon" surname="Tomson" />
      <Greetings name="Sandi" />
      <Greetings name="Jessy" />
      <ThemeToggle />
      <Form />
      <Counter />
      <ParentComponent />
    </>
  );
}

export default App;
