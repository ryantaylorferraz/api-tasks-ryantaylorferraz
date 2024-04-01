import { Router } from "express";
import { TaskController } from "../controllers/TaskController";
import { RequestValid } from "../middleware/RequestValid.middleware";
import { TaskSchemaCreate, TaskSchemaUpdate } from "../schemas/task.schema";
import { taskValidate } from "../middleware/taskValidate.middleware";

export const TaskRouter = Router()

const taskController = new TaskController()

TaskRouter.get("/", taskController.get)
TaskRouter.post("/", RequestValid.execute({body: TaskSchemaCreate}), taskValidate.execute, taskController.create)
TaskRouter.patch("/:id", RequestValid.execute({body: TaskSchemaUpdate}), taskController.update)
TaskRouter.delete("/:id", taskController.delete)