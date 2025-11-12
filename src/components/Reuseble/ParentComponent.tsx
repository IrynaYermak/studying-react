import { useState } from "react";
import ChildComponent from "./ChildComponent";

export default function ParentComponent() {
  const [nameProp, setNameProp] = useState<string>("");
  const [inputName, setInputName] = useState<string>("");
  const [ageProp, setAgeProp] = useState<number>(0);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(event.target.value);
  };
  const updateName = () => {
    setNameProp(inputName);
  };

  return (
    <>
      <h2>Parent component</h2>
      <input
        type="text"
        className="input-text"
        value={inputName}
        onChange={handleNameChange}
        placeholder="enter name"
      />

      <button type="button" className="button" onClick={updateName}>
        Give new name
      </button>
      <button
        type="button"
        className="button"
        onClick={() => setAgeProp(ageProp + 1)}
      >
        Set age
      </button>

      <ChildComponent name={nameProp} age={ageProp} />
    </>
  );
}
