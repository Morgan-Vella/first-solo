import TaskController from "../controllers/task.controller.js"
import { Router } from "express"

const taskRouter = Router()

taskRouter.route("/tasks")
    .post(TaskController.create)
    .get(TaskController.getAll)

taskRouter.route("/tasks/:id")
    .get(TaskController.getOne)
    .delete(TaskController.delete)
    .put(TaskController.update)

export default taskRouter;