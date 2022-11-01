import { v4 as uuidV4 } from "uuid"
import {PlusCircle} from "phosphor-react"
import { useState } from "react"
import "./styles.scss"
import { todoCreate } from "../../storage/todo/todoCreate"

type UpdateListType = {
    updateList: ()=>void
}

export function NewTask({ updateList }: UpdateListType){
    const [createTask, setCreteTask] = useState("")

    function handleNewTaskChange(event: any){
        setCreteTask(event.target.value)
    }

    function handleCreateNewTask(){
        const newTodo = {
            id: uuidV4(),
            todo: createTask,
            done: false
        }
        if (createTask !== "") {
            todoCreate(newTodo)
            updateList()
            setCreteTask("")
        }
    }
    return (
        <div id="newTaskContainer">
            <div>
                    <input type="text"
                        placeholder="Create a new task: "
                        value={createTask}
                        onChange={handleNewTaskChange}
                    />
                    <button onClick={handleCreateNewTask}>
                        Create
                        <PlusCircle weight="bold" />
                    </button>
            </div>
        </div>
    )
}