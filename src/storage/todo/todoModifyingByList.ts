import { TODO_COLLECTION } from "../storageConfig"

import { todoGetAll } from "./todoGetAll"

export function todoModifyingByList(id: string, done: boolean){
    try {
        const storage = todoGetAll()

        const taskState = storage.filter(todo => todo.id == id)

        if (done) {
            taskState[0].done = false
        }else{
            taskState[0].done = true
        }
        
        const filtered = storage.filter(todo => todo.id !== id)
        const todoList = JSON.stringify([...filtered, ...taskState])

        localStorage.setItem(TODO_COLLECTION, todoList)

    } catch (error) {
        throw error
    }
}