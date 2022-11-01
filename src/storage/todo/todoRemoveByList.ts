import { TODO_COLLECTION } from "../storageConfig"

import { todoGetAll } from "./todoGetAll"

export function todoRemoveByList(id: string){
    try {
        const storage = todoGetAll()

        const filtered = storage.filter(todo => todo.id !== id)
        const todoList = JSON.stringify(filtered)

        localStorage.setItem(TODO_COLLECTION, todoList)

    } catch (error) {
        throw error
    }
}