import Interface from './interface.js';
import Store from './store.js';
import ToDos from './constructor.js';

export default function add(task) {
  const completed = 'asd';
  const toIndex = Store.getToDos().length + 1;
  const toDo = new ToDos(task, completed, toIndex);
  Interface.addTask(toDo);
  Store.addTask(toDo);
}