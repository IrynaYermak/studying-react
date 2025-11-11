import { useState } from "react";

export default function Form() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <form>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>
        Our input text: <i style={{ color: "violet" }}>{inputValue}</i>
      </p>
    </form>
  );
}
