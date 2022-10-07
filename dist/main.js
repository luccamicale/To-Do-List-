/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("window.addEventListener('load', () => {\r\n\ttodos = JSON.parse(localStorage.getItem('todos')) || [];\r\n\tconst nameInput = document.querySelector('#name');\r\n\tconst newTodoForm = document.querySelector('#new-todo-form');\r\n\r\n\tconst username = localStorage.getItem('username') || '';\r\n\r\n\tnameInput.value = username;\r\n\r\n\tnameInput.addEventListener('change', (e) => {\r\n\t\tlocalStorage.setItem('username', e.target.value);\r\n\t})\r\n\r\n\tnewTodoForm.addEventListener('submit', e => {\r\n\t\te.preventDefault();\r\n\r\n\t\tconst todo = {\r\n\t\t\tcontent: e.target.elements.content.value,\r\n\t\t\tcategory: e.target.elements.category.value,\r\n\t\t\tdone: false,\r\n\t\t\tcreatedAt: new Date().getTime()\r\n\t\t}\r\n\r\n\t\ttodos.push(todo);\r\n\r\n\t\tlocalStorage.setItem('todos', JSON.stringify(todos));\r\n\r\n\t\t// Reset the form\r\n\t\te.target.reset();\r\n\r\n\t\tDisplayTodos()\r\n\t})\r\n\r\n\tDisplayTodos()\r\n})\r\n\r\nfunction DisplayTodos () {\r\n\tconst todoList = document.querySelector('#todo-list');\r\n\ttodoList.innerHTML = \"\";\r\n\r\n\ttodos.forEach(todo => {\r\n\t\tconst todoItem = document.createElement('div');\r\n\t\ttodoItem.classList.add('todo-item');\r\n\r\n\t\tconst label = document.createElement('label');\r\n\t\tconst input = document.createElement('input');\r\n\t\tconst span = document.createElement('span');\r\n\t\tconst content = document.createElement('div');\r\n\t\tconst actions = document.createElement('div');\r\n\t\tconst edit = document.createElement('button');\r\n\t\tconst deleteButton = document.createElement('button');\r\n\r\n\t\tinput.type = 'checkbox';\r\n\t\tinput.checked = todo.done;\r\n\t\tspan.classList.add('bubble');\r\n\t\tif (todo.category == 'personal') {\r\n\t\t\tspan.classList.add('personal');\r\n\t\t} else {\r\n\t\t\tspan.classList.add('business');\r\n\t\t}\r\n\t\tcontent.classList.add('todo-content');\r\n\t\tactions.classList.add('actions');\r\n\t\tedit.classList.add('edit');\r\n\t\tdeleteButton.classList.add('delete');\r\n\r\n\t\tcontent.innerHTML = `<input type=\"text\" value=\"${todo.content}\" readonly>`;\r\n\t\tedit.innerHTML = 'Edit';\r\n\t\tdeleteButton.innerHTML = 'Delete';\r\n\r\n\t\tlabel.appendChild(input);\r\n\t\tlabel.appendChild(span);\r\n\t\tactions.appendChild(edit);\r\n\t\tactions.appendChild(deleteButton);\r\n\t\ttodoItem.appendChild(label);\r\n\t\ttodoItem.appendChild(content);\r\n\t\ttodoItem.appendChild(actions);\r\n\r\n\t\ttodoList.appendChild(todoItem);\r\n\r\n\t\tif (todo.done) {\r\n\t\t\ttodoItem.classList.add('done');\r\n\t\t}\r\n\t\t\r\n\t\tinput.addEventListener('change', (e) => {\r\n\t\t\ttodo.done = e.target.checked;\r\n\t\t\tlocalStorage.setItem('todos', JSON.stringify(todos));\r\n\r\n\t\t\tif (todo.done) {\r\n\t\t\t\ttodoItem.classList.add('done');\r\n\t\t\t} else {\r\n\t\t\t\ttodoItem.classList.remove('done');\r\n\t\t\t}\r\n\r\n\t\t\tDisplayTodos()\r\n\r\n\t\t})\r\n\r\n\t\tedit.addEventListener('click', (e) => {\r\n\t\t\tconst input = content.querySelector('input');\r\n\t\t\tinput.removeAttribute('readonly');\r\n\t\t\tinput.focus();\r\n\t\t\tinput.addEventListener('blur', (e) => {\r\n\t\t\t\tinput.setAttribute('readonly', true);\r\n\t\t\t\ttodo.content = e.target.value;\r\n\t\t\t\tlocalStorage.setItem('todos', JSON.stringify(todos));\r\n\t\t\t\tDisplayTodos()\r\n\r\n\t\t\t})\r\n\t\t})\r\n\r\n\t\tdeleteButton.addEventListener('click', (e) => {\r\n\t\t\ttodos = todos.filter(t => t != todo);\r\n\t\t\tlocalStorage.setItem('todos', JSON.stringify(todos));\r\n\t\t\tDisplayTodos()\r\n\t\t})\r\n\r\n\t})\r\n}\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);