import Router from "@koa/router"

const exemples = new Router()

const todos = [
    {
        id: 1,
        title: 'Acheter une voiture'   
    },
    {
        id: 2,
        title: 'Acheter une montre'   
    },
    {
        id: 3,
        title: 'Acheter un chien'   
    }
]

// CRUD Node.js

//Get all posts
exemples.get('/', (req) => {
    req.body = todos
})

//Get one post
exemples.get('/:id', (req) => {
    const task = todos.find(t => parseInt(req.params.id) === t.id)
    req.body = task
    
})

//Add a post 
exemples.post('/', (req) => {
    const newTask = {
        id: todos.length + 1,
        title: req.request.body.title
    }
    todos.push(newTask)
    req.status = 200
    console.log(todos)
});

//Modifie post
exemples.put('/:id', (req) => {
    const task = todos.find(t => parseInt(req.params.id) === t.id)
    task.title = 'Modifié'
    // OU task.title = req.request.body.title
    console.log(todos)
    req.status = 200
});

//Delete post
exemples.delete('/:id', (req) => {
    const updatedTodo = todos.filter(t => parseInt(req.params.id) !== t.id)
    req.body = updatedTodo
    console.log(todos)

});

export default exemples