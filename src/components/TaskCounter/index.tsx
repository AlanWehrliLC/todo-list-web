import { todoGetAll } from "../../storage/todo/todoGetAll"
import "./styles.scss"

export function TaskCounter(){
    const tasks = todoGetAll()
    const numberOfTasks = tasks.length
    const tasksDone = tasks.filter(todo => todo.done == true).length

    return (
        <div id="taskCounter">
            <div className="created">Created tasks<span>{numberOfTasks}</span></div>
            <div className="completed">Completed<span>{tasksDone} out of {numberOfTasks}</span></div>
        </div>
    )
}