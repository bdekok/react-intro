export default function TodoList() {
  // todo: remove these hardcoded values
  const names = ["Bas", "Brent", "Nicole", "Ronald", "Sean"];
  const list = names.map(function (value, index) {
    return <li key={index}>{value}</li>;
  });

  return <ul>{list}</ul>;
}
