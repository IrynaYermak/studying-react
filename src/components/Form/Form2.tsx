export default function form2() {
  const handleSubmit = (formData: FormData) => {
    const username = formData.get("username") as string;
    console.log("Username:", username);
    console.log("Form submitted");
  };

  return (
    <form action={handleSubmit}>
      <input type="text" name="username" defaultValue={"My name"} />
      <button type="submit">Submit</button>
    </form>
  );
}
