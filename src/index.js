import './style.css';
import add from './modules/ToDo.js';
import interfaces from './modules/interface.js';
import Store from './modules/store.js';

document.addEventListener('DOMContentLoaded', interfaces.displayTasks);
document.querySelector('#form-section').addEventListener('submit', (e) => {
  e.preventDefault();
  const text = document.getElementById('input-task').value;
  add(text);
});
document.querySelector('#addBtn').addEventListener('click', add);

const clearAll = document.querySelector('.clearCompleted');
clearAll.addEventListener('click', () => {
  Store.clearAll();
  window.location.reload();
});