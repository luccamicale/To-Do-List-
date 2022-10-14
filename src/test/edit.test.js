/* eslint-disable linebreak-style */
import add from '../modules/ToDo.js';
import Store from '../modules/store.js';
import clearTasks from '../modules/clear.js';

describe('editing', () => {
  document.body.innerHTML = `<div class="form-field">
    <form class="form" id="form-section" action="submit">
        <input type="text" id="input-task" class="input-task" placeholder="Add your task here..." autocomplete="off">
        <input type="button" id="addBtn" value="+">
    </form>
  </div>
  <div class="ul-container">
    <ul class="toDoList" id="toDoList">
    
    </ul>`;
  test('Should edit one element when is called', () => {
    add('Hello');
    const editBtn = document.querySelector('.edit');
    editBtn.click();
    const list = document.querySelector('.text-area');
    list.value = 'asd';
    expect(list.value).toBe('asd');
  });

  test('Update item complete status', () => {
    const obj = {
      value: 'hello',
      completed: true,
      index: 1,
    };
    expect(Store.check(obj.completed, 1)).toBe(true);
  });

  test('This function should clear all elements', () => {
    const obj2 = {
      value: 'clear',
      completed: true,
      index: 1,
    };
    clearTasks(obj2);
    expect(JSON.parse(localStorage.getItem('toDos'))).toEqual([]);
  });
});