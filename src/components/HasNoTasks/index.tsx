import {ClipboardText} from "phosphor-react"
import "./styles.scss"

export function HasNoTasks(){
    return (
        <div id="empty">
            <ClipboardText size={56} />
            <div>
                You don't have any tasks registered yet.
            </div>
            <div> 
                Create tasks and organize to-do items.
            </div>
        </div>
    )
}