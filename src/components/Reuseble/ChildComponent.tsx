interface ChildComponentProps {
  name: string;
  age: number;
}

export default function ChildComponent({ name, age }: ChildComponentProps) {
  return (
    <>
      <h2>Child component</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </>
  );
}
