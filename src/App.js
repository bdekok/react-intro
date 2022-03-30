import { useState } from "react";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
function TodoApp() {
  // Todo:
  //    1. Create an input component that sets an event to the app on enter
  //       Hint: you can get this by having  <input onChange={(event) => setValue(event.target.value)} /> and
  //      <form onSubmit={somethingsometing}> on the submission of the form you need to call event.preventDefault()
  //    2. Show the entered items in the TodoList component
  //    3. bonus: add remove button and remove the item from the list
  const [todos, setTodos] = useState([]);

  function handleSubmit(value) {
    setTodos([...todos, value]);
  }
  function handleRemove(removedIndex) {
    const filteredList = todos.filter(function (_, index) {
      return index !== removedIndex;
    });
    setTodos(filteredList);
  }

  return (
    <div className="todo-app">
      <TodoInput onSubmit={handleSubmit} />
      <TodoList todos={todos} onRemove={handleRemove} />
    </div>
  );
}

export default TodoApp;
