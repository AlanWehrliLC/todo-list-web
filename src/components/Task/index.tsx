import { Check } from "phosphor-react"
import * as Checkbox from '@radix-ui/react-checkbox';
import { Trash } from "phosphor-react"
import "./styles.scss"
import { todoRemoveByList } from "../../storage/todo/todoRemoveByList";
import { useState } from "react";
import { todoModifyingByList } from "../../storage/todo/todoModifyingByList";

type todoList = {
    id: string
    todo: string
    done: boolean
    updateList: ()=>void
}

export function Task({id, todo, done, updateList}: todoList){

    function handleRemoveTodoByList(){
        todoRemoveByList(id)
        updateList()
    }

    function handleCheckedChange(){
        if (done) {
            todoModifyingByList(id, done)
            updateList()
        }else{
            todoModifyingByList(id, done)
            updateList()
        }
    }

    return (
        <div className="taskContainer">
            <div>
                <Checkbox.Root className='checkboxRoot' checked={done} onCheckedChange={handleCheckedChange}>
                    <Checkbox.Indicator>
                        <Check weight="bold" />
                    </Checkbox.Indicator>
                </Checkbox.Root>
                <div className="task"style={done ? {textDecorationLine: "line-through", color: "var(--gray-300)"} : {textDecorationLine: "none"}}>{todo}</div>
            </div>
            <button className="deleteTask" onClick={handleRemoveTodoByList}><Trash size={24} /></button>
        </div>
    )
}