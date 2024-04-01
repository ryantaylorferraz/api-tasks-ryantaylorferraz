import { TTask } from "../interfaces/task.interface";
import taskJson from "../../task.json"

export const TaskDatabase: TTask[] = taskJson;

let id = 0

export const generatedId = () => {
    id++
    return id;
}