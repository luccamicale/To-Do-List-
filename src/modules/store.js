export default class Store {
  static getToDos() {
    let toDos;
    if (localStorage.getItem('toDos') === null) {
      toDos = [];
    } else {
      toDos = JSON.parse(localStorage.getItem('toDos'));
    }

    return toDos;
  }

  static addTask(toDo) {
    const toDos = Store.getToDos();
    toDos.push(toDo);
    localStorage.setItem('toDos', JSON.stringify(toDos));
  }

  static deleteTask(element) {
    const toDos = Store.getToDos();
    toDos.forEach((toDo, id) => {
      if (toDo.index === element) {
        toDos.splice(id, 1);
      }
    });
    toDos.forEach((toDo, i) => {
      toDo.index = i + 1;
    });
    localStorage.setItem('toDos', JSON.stringify(toDos));
  }

  static editTask(value, idx) {
    const toDos = Store.getToDos();
    toDos.forEach((toDo) => {
      if (toDo.index === parseInt(idx, 10)) {
        toDo.value = value;
      }
    });
    localStorage.setItem('toDos', JSON.stringify(toDos));
  }

  static check(check, idx) {
    const toDos = Store.getToDos();
    toDos.forEach((toDo) => {
      if (toDo.index === parseInt(idx, 10)) {
        toDo.completed = check;
      }
    });
    localStorage.setItem('toDos', JSON.stringify(toDos));
    return check;
  }

  static clearAll() {
    const toDos = Store.getToDos();
    const filter = toDos.filter((toDo) => toDo.completed === false);

    toDos.forEach((toDo, i) => {
      toDo.index = i + 1;
    });
    localStorage.setItem('toDos', JSON.stringify(filter));
  }
}