/*

Global arrays. There ought to be a 1:1 relationship of each index of your todos
and each index of your isDone.

For example, isDone[3] would hold the "done-ness" information for todos[3].

*/

let todos = [];
let isDone = [];

// When the html finishes loading, launch `init`.
window.onload = init;

// Set up all event listeners.
function init() {
    // When they click the add todo button, run `addTodo`.


    // When they click the clear done todos button, run `clearDoneTodos`.


    // When they click the clear all todos button, run `clearAllTodos`.

}

function addTodo(event) {
    // Stop page from reloading on button click.
    event.preventDefault();

    // Get new todo from the new todo input field.


    // Put the todo and its "done-ness" in their respective arrays.


    // Add the todo to the html.


    // Add an event listener on the newly created html element to launch
    // `markDone` when it's clicked.

}

function clearDoneTodos() {
    // Stop page from reloading on button click.
    event.preventDefault();

    /*
        Find which todos need to be removed and remove them from BOTH arrays.
        If you did it right when making them, you should be able to check the
        `isDone` array to figure this out.

        One way to do this is to build up a new array. Give that a try first!

    */


    /*
        Now remove the done todos from the html.

        There are (at least) two ways to do this: find which ones have the
        strikethrough style by looping through them (difficult but hardly
        impossible), or remove the correct children when doing the array removal
        step above (way easier).
    */


}

function clearAllTodos(event) {
    // Stop page from reloading on button click.
    event.preventDefault();

    // Remove all todos from BOTH arrays.


    // Remove all todos from the html.
    removeAllChildrenOfOl();
}

function markDone(event) {
    // No need to run `event.preventDefault` here; that default behavior only
    // applies to buttons.

    // Grab the HTML element that was clicked.
    // You may have to research how it's done, but the `event` parameter you
    // were passed is a good place to start!


    // Apply 'strikethrough' styling to it.


    // Mark its place 
}