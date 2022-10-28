import {PlusCircle} from "phosphor-react"
import "./styles.scss"

export function NewTask(){
    return (
        <div id="newTaskContainer">
            <div>
                <input type="text"
                    placeholder="Create a new task: "
                />
                <button type="submit">
                    Create
                    <PlusCircle weight="bold" />
                </button>
            </div>
        </div>
    )
}