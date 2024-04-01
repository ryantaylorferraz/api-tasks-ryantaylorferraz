import express, { json } from "express"
import "express-async-error"
import helmet from "helmet"
import { TaskRouter } from "./routes/TaskRouter"
import { handleError } from "./errors/handleError"

export const app = express()

app.use(helmet())

app.use(json())

app.use("/tasks", TaskRouter)

app.use(handleError.execute)

