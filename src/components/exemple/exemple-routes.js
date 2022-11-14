import Router from "@koa/router"
import * as ExempleControllers from "#components/exemple/exemple-controllers.js"

const exemples = new Router()

//////////////////////////// CRUD Node.js //////////////////////////////////

//Get all posts
exemples.get('/', ExempleControllers.index)

//Get one post
exemples.get('/:id', (ctx) => {
    const task = todos.find(t => parseInt(ctx.params.id) === t.id)
    ctx.body = task
    
})

//Add a post 
exemples.post('/', ExempleControllers.create)

//Modifie post
exemples.put('/:id', (ctx) => {
    const task = todos.find(t => parseInt(ctx.params.id) === t.id)
    task.title = 'Modifié'
    // OU task.title = ctx.request.body.title
    console.log(todos)
    ctx.status = 200
});

//Delete post
exemples.delete('/:id', (ctx) => {
    const updatedTodo = todos.filter(t => parseInt(ctx.params.id) !== t.id)
    ctx.body = updatedTodo
    console.log(todos)

});

export default exemples