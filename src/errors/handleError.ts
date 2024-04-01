import { NextFunction, Request, Response } from "express";
import { AppError } from "./AppError";
import { ZodError } from "zod";

export class handleError {
    static execute(err: Error, req: Request, res: Response, next: NextFunction){
        if(err instanceof AppError){
            return res.status(err.statusCode).json({Error: err.message})
        } else if(err instanceof ZodError){
            return res.status(400).json(err)
        }
         else {
            return res.status(500).json({message: "Internal server error"})
        }
    }
}