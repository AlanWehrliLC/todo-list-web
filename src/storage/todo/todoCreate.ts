import { TODO_COLLECTION } from "../storageConfig"
import { todoGetAll } from "./todoGetAll"

type todoList = {
    id: string
    todo: string
    done: boolean
}

export function todoCreate(newTodo: todoList){
    try {
        const storedTodos = todoGetAll()

        const storage = JSON.stringify([...storedTodos, newTodo])

        localStorage.setItem(TODO_COLLECTION, storage)
    } catch (error) {
        throw error
    }
}