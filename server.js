const server = require('socket.io')();
const firstTodos = require('./data');
const Todo = require('./todo');

// create DB initially
const DB = firstTodos.map((t) => {
    // Form new Todo objects
    return new Todo(title=t.title);
});

server.on('connection', (client) => {
    // This is going to be our fake 'database' for this application
    // Parse all default Todo's from db

    // Sends a message to the client to reload all todos
    const reloadTodos = () => {
        client.emit('load', DB);
    };

    // Accepts when a client makes a new todo
    client.on('make', (t) => {
        // Make a new todo
        const newTodo = new Todo(title=t.title);

        // Push this newly created todo to our database
        DB.push(newTodo);

        // Send the latest todos to the client
        server.emit('lastTodo', newTodo); 
    });

    // Let the Server know that a todo is completed and modify the DB
    client.on('taskCompleted', (completedTask)=>{
        for(item of DB){
            if(item.title === completedTask){
                item.completed = true;
                server.emit('taskDone', item);
            }
        }

    });

    // Let the Server know that a todo is completed and modify the DB 
    client.on('taskDeleted',(DeletedTask) => {
        for(item of DB){
            if(item.title === DeletedTask){
                let index = DB.indexOf(item);
                if(index > -1){
                    DB.splice(index, 1);
                    server.emit('taskDeleted', item);
                }
            }
        }
    });

    // Send the DB downstream on connect
    reloadTodos();
});


console.log('Waiting for clients to connect');
server.listen(3003);
