import { ITodo } from "../model/todo"
import { formatTime } from "../utils"
import React from "react"

interface Props {
    todo: ITodo
    handleAction: (task: string) => void
}

export function Row({ todo, handleAction }: Props) {
    const { task, state, created_at, completed_at } = todo

    function handleClick() {
        handleAction(todo.task)
    }

    return <div key={task} data-cy="list-row" className="list__row">
        <span className="list__row__task" data-cy="list-row-task">{task}</span>
        <span className="list__row__date">
            {formatTime(created_at)}
        </span>
        <span className="list__row__date">
            {completed_at && formatTime(completed_at)}
        </span>

        <div>
            <span data-cy={`list-row-state-${state}`} className={`list__row__state list__row__state--${state}`}>
                {state}
            </span>
        </div>



        <div>
            <button className="list__row__action" data-cy="list-row--action" onClick={handleClick}>
                {state === "completed" && "pending"}
                {state === "pending" && "completed"}
            </button>
        </div>


    </div>
}