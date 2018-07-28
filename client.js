
const server = io('http://localhost:3003/');
const app = new Vue({
    el: '#app',
    data:{
        todoList:[
        ]
    },
    methods:{
        taskCompleted:function(event){
            server.emit('taskCompleted', event);
        }
    }
})

// NOTE: These are all our globally scoped functions for interacting with the server
// This function adds a new todo from the input
function add() {
    console.warn(event);
    const input = document.getElementById('todo-input');

    // Emit the new todo as some data to the server
    server.emit('make', {
        title : input.value
    });

    // Clear the input
    input.value = '';
    // TODO: refocus the element
}

function render(todo) {
    app.todoList.push(todo);
}

// NOTE: These are listeners for events from the server
// This event is for (re)loading the entire list of todos from the server
server.on('load', (todos) => {
    todos.forEach((todo) => render(todo));
});
// This event is for rendering the last todo item created by the user from the server
server.on('lastTodo', (lastTodo) =>{
    render(lastTodo);
});