export default function TodoList({ todos, onRemove }) {
  function handleRemove(index) {
    onRemove(index);
  }

  const list = todos.map(function (value, index) {
    return (
      <li key={index}>
        {value}
        <button className="remove-button" onClick={() => handleRemove(index)}>
          Remove
        </button>
      </li>
    );
  });

  if (todos.length) {
    return <ul className="todo-rows">{list}</ul>;
  }
  return <></>;
}
