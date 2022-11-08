import Koa from 'koa'
import Router from '@koa/router'
import bodyParser from 'koa-bodyparser'

const app = new Koa()
const router = new Router()

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

router.get('/todos', (req) => {
    req.body = todos
})

router.get('/todos/:id', (req) => {
    const task = todos.find(t => parseInt(req.params.id) === t.id)
    req.body = task
    
})

router.post('/todos', (req) => {
    const newTask = req.request.body
    todos.push(newTask)
    console.log(todos)
    req.status = 200
});

router.put('/todos/:id', (req) => {
    const task = todos.find(t => parseInt(req.params.id) === t.id)
    task.title = 'Modifié'
    console.log(todos)
    req.status = 200
});

router.delete('/todos/:id', (req) => {
    const updatedTodo = todos.filter(t => parseInt(req.params.id) !== t.id)
    req.body = updatedTodo
    console.log(todos)

});

app
.use(bodyParser())
.use(router.routes())
.use(router.allowedMethods())

app.listen(process.env.PORT, () => console.log(`Server is listening on PORT: ${process.env.PORT}`))