import { Task } from "../Task" 
import { HasNoTasks } from "../HasNoTasks"
import { TaskCounter } from "../TaskCounter"
import "./styles.scss"
import { todoGetAll } from "../../storage/todo/todoGetAll"
import { useEffect, useState } from "react"

type todo = {
    id: string
    todo: string
    done: boolean
}

type TodoListType = {
    todoList: todo[]
    updateList: ()=>void
}

export function TodoList({todoList, updateList}: TodoListType){
    return (
        <div id="taskBoard">
            <TaskCounter />
            <div id="tasks" >
                {todoList.length ? 
                    todoList.map(todo => (
                        <Task key={todo.id}  id={todo.id} todo={todo.todo} done={todo.done} updateList={updateList} />
                    ))
                        :
                    <HasNoTasks />
                }
            </div>
        </div>
    )
}