import { model, Schema } from 'mongoose';

const TaskSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "You must provide a title."],
            minLength: [3, "Title must be 3 characters or longer"],
            maxlength: [255, "Title must be less than 255 characters long"]
        },
        description: {
            type: String,
            required: [true, "You must provide a description."],
            minLength: [5, "Description must be 5 characters or longer"],
            maxlength: [999, "Description must be less than 999 characters long"]
        },
        location: {
            type: String,
            required: [true, "Please provide a location"]
        }
    }, { timestamps: true }
)

const Task = model("Task", TaskSchema);
export default Task;