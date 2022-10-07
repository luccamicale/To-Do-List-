import './style.css';
import addToDo from './modules/ToDo.js';
import interfaceClass from './modules/interface.js';
import clear from './modules/clear.js';

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = Object.fromEntries(new FormData(e.target));
  addToDo(input.task);
  interfaceClass();
});
document.addEventListener('DOMContentLoaded', interfaceClass);
const clearBtn = document.querySelector('.clearbtn');

clearBtn.addEventListener('click', () => {
  clear();
  interfaceClass();
});