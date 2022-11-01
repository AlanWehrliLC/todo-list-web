import { TODO_COLLECTION } from "../storageConfig"

type todoList = {
    id: string
    todo: string
    done: boolean
}

export function todoGetAll(){
    try {
        const storage = localStorage.getItem(TODO_COLLECTION)
        
        const todos: todoList[] = storage ? JSON.parse(storage) : []
    
        return todos
    } catch (error) {
        throw error
    }
}