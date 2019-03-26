let todos = [];
window.onload = init;

function init() {

addClick('#add-todo', addTodo);
addClick('#clear-done-todos', clearDoneTodos);
addClick('#clear-all-todos', clearAllTodos);

}

function addTodo(event) {

    event.preventDefault();

    const newTodo = document.querySelector('#new-todo').value;

    document.querySelector('#new-todo').value = '';

    todos.push({todo : newTodo, isDone : false});

    const newLi = document.createElement('li');
    newLi.innerText = newTodo;
    
    newLi.addEventListener('click', toggleDone);

    const ol = document.querySelector('#todo-list');
    ol.appendChild(newLi);

}


function clearAllTodos(event) {
    
    event.preventDefault();
    todos.splice(0);
    removeAllChildrenOfOl();
    
}

function clearDoneTodos(event) {

    event.preventDefault();

    const notDone = [];

    for(let i = 0; i < todos.length; i++) {
        if(!todos[i].isDone) {
            notDone.push(todos[i]);
        }
    }

    todos = notDone;

    removeAllChildrenOfOl();

    for(let i = 0; i < todos.length; i++) {
        const newLi = document.createElement('li');
        newLi.innerText = todos[i].todo;

        newLi.addEventListener('click', toggleDone);

        const ol = document.querySelector('#todo-list');
        ol.appendChild(newLi);
    }
}

function toggleDone(event) {

    const li = event.target;

    const ol = document.querySelector('#todo-list');
    const lis = ol.childNodes;
    let liIndex = -1;
    
    for(let i = 0; i < lis.length; i++) {
        if(lis[i].innerText === li.innerText) {
            liIndex = i;
        }
    }

    if(todos[liIndex].isDone) {
        li.style.textDecoration = '';
    } else {
        li.style.textDecoration = 'line-through';
    }

    todos[liIndex].isDone = !todos[liIndex].isDone;
}

function removeAllChildrenOfOl() {

    const ol = document.querySelector('#todo-list');

    while(ol.hasChildNodes()) {
        ol.removeChild(ol.firstChild);
    }
}

//Helper Functions

function addClick(selector, func) {
    document.querySelector(selector)
        .addEventListener('click', func);
}