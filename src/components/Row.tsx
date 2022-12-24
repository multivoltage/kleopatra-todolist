import { ITodo } from "../model/todo"

interface Props {
    todo: ITodo
    handleAction: (task: string) => void
}

export function Row({ todo, handleAction }: Props) {
    const { task, state } = todo

    function handleClickCompleted() {
        handleAction(todo.task)
    }

    return <div key={task} data-cy="list-row" className="list__row">
        <span className="list__row__task">{task}</span>
        <div className="list__row__actions">
            <span data-cy={`list-row-state-${state}`} className="list__row__status">
                {state}
            </span>
            <button className="list__row__action" data-cy="list-row--action" onClick={handleClickCompleted}>mark completed</button>
        </div>

    </div>
}