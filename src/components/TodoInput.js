import { useState } from "react";
export default function TodoInput({ onSubmit }) {
  const [value, setValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(value);
    setValue("");
  }

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={value} />
    </form>
  );
}
