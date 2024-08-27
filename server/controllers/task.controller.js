import Task from "../models/task.model.js"

const TaskController = {
    "create": async (req, res) => {
        try {
            const newTask = await Task.create(req.body)
            res.json(newTask)
        } catch (error) {
            console.log(error)
            res.status(400).json(error);
        }
    },
    "getAll": async (req, res) => {
        try {
            const allTasks = await Task.find()
            res.json(allTasks)
        } catch (error) {
            console.log(error)
            res.status(400).json(error);
        }
    },
    "getOne": async (req, res) => {
        try {
            const foundBook = await Task.findById(req.params.id)
            res.json(foundBook)
        } catch (error) {
            console.log(error)
            res.status(400).json(error);
        }
    },
    "update": async (req, res) => {
        const options = {
            new: true,
            runValidators: true
        }
        try {
            const updatedBook = await Task.findByIdAndUpdate(req.params.id, req.body, options)
            res.json(updatedBook)
        } catch (error) {
            console.log(error)
            res.status(400).json(error);
        }
    },
    "delete": async (req, res) => {
        try {
            const deletedBook = await Task.findByIdAndDelete(req.params.id)
            res.json(deletedBook)
        } catch (error) {
            console.log(error)
            res.status(400).json(error);
        }
    }
}

export default TaskController;