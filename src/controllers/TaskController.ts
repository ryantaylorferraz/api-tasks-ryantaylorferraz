import { Request, Response } from "express";
import { TaskService } from "../service/TaskService";

export class TaskController {
    get(req: Request, res: Response){
        const get = new TaskService()
        const response = get.getTask();
        return res.status(200).json(response)
    }

    create(req: Request, res: Response){
        const get = new TaskService()
        const response = get.createTask(req.body);

        return res.status(201).json(response)
    }

    update(req: Request, res: Response){
        const get = new TaskService()
        const response = get.updateTask(req.params.id, req.body);

        return res.status(200).json(response)
    }

    delete(req: Request, res: Response){
        const get = new TaskService()
        get.deleteTask(req.params.id);

        return res.status(200).json()
    }
}