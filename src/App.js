import TodoList from "./components/TodoList";
function TodoApp() {
  // Todo:
  //    1. Create an input component that sets an event to the app on enter
  //       Hint: you can get this by having  <input onChange={(event) => setValue(event.target.value)} /> and
  //      <form onSubmit={somethingsometing}> on the submission of the form you need to call event.preventDefault()
  //    2. Show the entered items in the TodoList component
  //    3. bonus: add remove button and remove the item from the list
  return (
    <div className="todo-app">
      <TodoList />
    </div>
  );
}

export default TodoApp;
