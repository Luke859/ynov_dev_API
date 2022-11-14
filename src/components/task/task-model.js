import mongoose from "mongoose";

const {Schema} = mongoose;

const taskSchema = new Schema({
    taskName: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    importance: { /// Va de -> 1 :très important, 2 :moyennement important, 3 :pas très important
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    },

})

const Task = mongoose.model('Task', taskSchema)

export default Task