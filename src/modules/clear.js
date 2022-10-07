export default function clearTasks() {
  const toDos = JSON.parse(localStorage.getItem('toDo'));
  const filter = toDos.filter((toDo) => toDo.completed === false);
  localStorage.setItem('toDo', JSON.stringify(filter));
}