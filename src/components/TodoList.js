export default function TodoList({ todos }) {
  const list = todos.map(function (value, index) {
    return <li key={index}>{value}</li>;
  });

  if (todos.length) {
    return <ul>{list}</ul>;
  }
  return <></>;
}
