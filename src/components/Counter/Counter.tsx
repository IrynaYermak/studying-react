import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>
        We clicked <strong>{count}</strong> times
      </p>
      <button
        type="button"
        className="button "
        onClick={() => setCount(count + 1)}
      >
        Add 1 value
      </button>
    </>
  );
}
