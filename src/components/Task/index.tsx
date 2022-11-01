import { Check } from "phosphor-react"
import * as Checkbox from '@radix-ui/react-checkbox';
import { Trash } from "phosphor-react"
import "./styles.scss"
import { todoRemoveByList } from "../../storage/todo/todoRemoveByList";

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

    return (
        <div id="taskContainer">
            <div>
                <Checkbox.Root id='checkboxRoot' checked={done}>
                    <Checkbox.Indicator id='CheckboxIndicator'>
                        <Check weight="bold" />
                    </Checkbox.Indicator>
                </Checkbox.Root>
                <div id="task">{todo}</div>
            </div>
            <button id="deleteTask" onClick={handleRemoveTodoByList}><Trash size={24} /></button>
        </div>
    )
}