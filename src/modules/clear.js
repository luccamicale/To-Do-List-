export default function clearTasks() {
  const toDos = JSON.parse(localStorage.getItem('toDos'));
  const filter = toDos.filter((toDo) => toDo.completed === false);
  localStorage.setItem('toDos', JSON.stringify(filter));
}