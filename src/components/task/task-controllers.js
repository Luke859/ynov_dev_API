import Task from "#components/task/task-model.js"
import Joi from 'joi'

//Get all Tasks
export async function allTasks (ctx) {
    try {
        ctx.body = await Task.find({})
    } catch (e) {
        ctx.badRequest({message: e.message})
    }
}

//Get one Task by Id
export async function taskById (ctx) {
    try{
        ctx.body = await Task.findById(ctx.params.idTask)
    } catch(err){
        ctx.badRequest({message: err.message})
    }
}

//Create Task
export async function createTask(ctx) {
    try {

        const taskValidationSchema = Joi.object({
            taskName: Joi.string().required(),
            description: Joi.string(),
            importance: Joi.number().required(),
            username: Joi.string().required()
        });

        const { error } = taskValidationSchema.validate(ctx.request.body);
        if(error) throw new Error(error);

        await Task.create({idTask: ctx.params.idTask, taskName : ctx.request.body.taskName, description: ctx.request.body.description, importance: ctx.request.body.importance, username: ctx.request.body.username})
        ctx.body = "Task ajoutée"

    } catch (e) {
        ctx.badRequest({message: e.message})
    }
}

//Update one Task by Id
export async function updateTaskById(ctx){
    try{

        const taskValidationSchema = Joi.object({
            taskName: Joi.string().required(),
            description: Joi.string(),
            importance: Joi.number().required(),
            username: Joi.string().required()
        });

        const { error } = taskValidationSchema.validate(ctx.request.body);
        if(error) throw new Error(error);

        let taskObj = ctx.request.body;
        await Task.findByIdAndUpdate(ctx.params.idTask, taskObj)
        ctx.body = "Task modifiée"
        ctx.status = 200

    } catch(err){
        ctx.badRequest({message: err.message})
    }
}

//Delete one Task by Id
export async function deleteTaskById(ctx){
    try{
        await Task.findByIdAndRemove(ctx.params.idTask)
        ctx.body = "Task supprimer"
        ctx.status = 200
        
    } catch(err){
        ctx.badRequest({message: err.message})
    }
}