import { HasNoTasks } from "../HasNoTasks"
import { TaskCounter } from "../TaskCounter"
import "./styles.scss"

export function TodoList(){
    return (
        <div id="taskBoard">
            <TaskCounter />
            <HasNoTasks />
            <div id="tasks">
                
            </div>
        </div>
    )
}