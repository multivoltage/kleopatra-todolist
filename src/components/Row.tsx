import { ITodo } from "../model/todo"

interface Props {
    todo: ITodo
}

export function Row({ todo }: Props) {
    const { task, state } = todo

    return <div key={task} data-cy="list-row" className="list__row">
        {task}
        <span data-cy="list-row-state" className="list__row__status">
            {state}
        </span>
    </div>
}