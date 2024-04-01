import { NextFunction, Request, Response } from "express";
import { TaskDatabase } from "../database/TaskDatabase";
import { AppError } from "../errors/AppError";

export class taskValidate {
    static execute(req: Request, res: Response, next: NextFunction) {
        if(TaskDatabase.some(task => task.title === req.body.title)){
            throw new AppError(409, "Task já existente")
        }

        next();
    }
}