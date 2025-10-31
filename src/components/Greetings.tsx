interface GreetingsProps {
  name: string;
  surname?: string;
}
export default function Greetings({ name, surname }: GreetingsProps) {
  return (
    <h4>
      Hello {name} {surname}!
    </h4>
  );
}
