// let objectDos = {todos : [], isDone : []};
let todos = [];

// When the html finishes loading, launch `init`.
window.onload = init;

// Set up all event listeners.
function init() {

addClick('#add-todo', addTodo);
addClick('#clear-done-todos', clearDoneTodos);
addClick('#clear-all-todos', clearAllTodos);

}

function addTodo(event) {
    // Stop page from reloading on button click.
    event.preventDefault();

    // Get new todo from the new todo input field.
    const newTodo = document.querySelector('#new-todo').value;

    // Clear the input field of all text.
    document.querySelector('#new-todo').value = '';

    // Put the todo and its "done-ness" in their respective arrays.
    todos.push({todo : newTodo, isDone : false});
    // console.log(todos);

    // Create a new html element and put our new todo's text in there.
    const newLi = document.createElement('li');
    newLi.innerText = newTodo;
    
    // Add an event listener on the newly created html element to launch
    // `toggleDone` when it's clicked.
    newLi.addEventListener('click', toggleDone);

    // Put our new element on the list part of our page!
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