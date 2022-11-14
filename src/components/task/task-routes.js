import Router from "@koa/router"
import * as TaskControllers from "#components/task/task-controllers.js"

const tasks = new Router()

//////////////////////////// CRUD Node.js //////////////////////////////////

//Get all posts
tasks.get('/', TaskControllers.allTasks)

//Get one post
tasks.get('/:idTask', TaskControllers.taskById )

//Add a post 
tasks.post('/', TaskControllers.createTask)

//Modifie post
tasks.put('/:idTask', TaskControllers.updateTaskById);

//Delete post
tasks.delete('/:idTask', TaskControllers.deleteTaskById);

export default tasks