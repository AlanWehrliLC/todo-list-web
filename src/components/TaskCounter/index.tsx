import "./styles.scss"

export function TaskCounter(){
    return (
        <div id="taskCounter">
            <div className="created">Created tasks<span>0</span></div>
            <div className="completed">Completed<span>0</span></div>
        </div>
    )
}