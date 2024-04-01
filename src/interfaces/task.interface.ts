import { z } from "zod";
import { TaskSchema, TaskSchemaCreate, TaskSchemaUpdate } from "../schemas/task.schema";

export type TTask = z.infer<typeof TaskSchema>

export type TTaskCreate = z.infer<typeof TaskSchemaCreate>

export type TTaskUpdate = z.infer<typeof TaskSchemaUpdate>