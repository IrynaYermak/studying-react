interface SearchFormProps {
  onSubmit: (topic: string) => void;
}

export default function SearchForm({ onSubmit }: SearchFormProps) {
  const handleSubmit = (formData: FormData) => {
    const topic = formData.get("toppic") as string;

    if (topic === "") {
      alert("Please enter a topic");
      return;
    }
    onSubmit(topic);
  };

  return (
    <form action={handleSubmit}>
      <input type="text" name="topic" />
      <button type="submit" style={{ marginLeft: "5px" }}>
        Search
      </button>
    </form>
  );
}
