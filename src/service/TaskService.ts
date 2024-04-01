import { TaskDatabase, generatedId } from "../database/TaskDatabase";
import { TTask, TTaskCreate, TTaskUpdate } from "../interfaces/task.interface";

export class TaskService {
    getTask() {
        return TaskDatabase;
    }

    createTask(data: TTaskCreate) {
        const newTask = {id: generatedId(), title: data.title, description: data.description, status: data.status}

        TaskDatabase.push(newTask)

        return newTask;
    }

    updateTask(id: string, data: TTaskUpdate){
        const index = TaskDatabase.findIndex(task => task.id === Number(id))
        const currentTask = TaskDatabase.find(task => task.id === Number(id))
        const updateTask = {...currentTask, ...data} as TTask

        TaskDatabase.splice(index, 1, updateTask)
    }

    deleteTask(id: string){
        const index = TaskDatabase.findIndex(task => task.id === Number(id))
        TaskDatabase.splice(index, 1)
    }
}