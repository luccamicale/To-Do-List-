import Todo from './constructor.js';

export default function addTask(task) {
  const toDos = JSON.parse(localStorage.getItem('toDo')) || [];
  const counter = toDos.length + 1;
  const newTask = new Todo(counter, task);

  toDos.push(newTask);
  localStorage.setItem('toDo', JSON.stringify(toDos));

  const taskfield = document.querySelector('.text-field');
  taskfield.value = '';
}