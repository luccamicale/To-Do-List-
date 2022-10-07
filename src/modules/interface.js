export default function displayTasks() {
  const toDoList = document.querySelector('.task-list');

  let toDos = JSON.parse(localStorage.getItem('toDo')) || [];

  toDoList.innerHTML = '';
  toDos.map((task) => {
    const item = document.createElement('li');
    let checkP;
    let styling;
    if (task.completed) {
      checkP = 'checked';
      styling = 'line-through';
    } else {
      checkP = '';
      styling = 'none';
    }
    item.innerHTML = `<form class="task-form b-bottom box"><input name="completed" type="checkbox" ${checkP} class="checkbox"><textarea name="description" class="task-text size" style="text-decoration:${styling}">${task.description}</textarea><button type="button" class="btn delete">Delete</button>
      <button type="submit" class="btn update">Save</button>
      </form>`;
    toDoList.appendChild(item);

    const deleteBtn = item.querySelector('.delete');
    const updateBtn = item.querySelector('.update');
    const updateText = item.querySelector('.task-text');

    updateBtn.style.display = 'none';

    updateText.addEventListener('click', () => {
      updateBtn.style.display = 'block';
    });

    deleteBtn.addEventListener('click', (e) => {
      e.preventDefault();
      let temp = toDos.filter((item) => item !== task);
      toDos = temp;
      temp = toDos.map((item) => {
        item.index = toDos.indexOf(item) + 1;
        return item;
      });
      toDos = temp;
      localStorage.setItem('toDo', JSON.stringify(toDos));
      toDoList.removeChild(item);
    });

    const taskForm = item.querySelector('.task-form');
    taskForm.addEventListener('submit', (e) => {
      const input = Object.fromEntries(
        new FormData(e.target),
      );
      task.description = input.description;
      localStorage.setItem('toDo', JSON.stringify(toDos));
      updateBtn.style.display = 'none';
      deleteBtn.style.display = 'block';
    });

    return toDoList;
  });
}