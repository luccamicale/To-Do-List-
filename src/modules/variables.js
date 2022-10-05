const ulList = document.getElementById('toDo');
const lists = [
  {
    description: 'Go to the supermarket',
    completed: true,
    index: 0,
  },
  {
    description: 'Practice Sport',
    completed: false,
    index: 1,
  },
  {
    description: 'Go to the park with my dog',
    completed: false,
    index: 2,
  },
  {
    description: 'Have a lunch',
    completed: true,
    index: 3,
  },
];
export default class displayLists {
  static addList() {
    for (let i = 0; i < lists.length; i += 1) {
      const list = document.createElement('li');
      list.innerHTML = `<input type="checkbox" name="completed" id="completed"> ${lists[i].description} <i class="fa-solid fa-ellipsis-vertical"></i>`;
      ulList.appendChild(list);
    }
  }
}