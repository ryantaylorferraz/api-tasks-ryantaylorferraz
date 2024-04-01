import { z } from "zod";

export const TaskSchema = z.object({
    id: z.number().positive(),
    title: z.string().min(1),
    description: z.string().min(1),
    status: z.string().min(1)
})

export const TaskSchemaCreate = TaskSchema.omit({id: true})

export const TaskSchemaUpdate = TaskSchemaCreate.partial()