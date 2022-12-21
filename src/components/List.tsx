import { ITodo } from "../model/todo"

interface Props {
    todos: Array<ITodo>
}

export function List({ todos }: Props) {

    return <div data-cy="list" className="list">
        {todos.map(t => {
            const { task } = t
            return <div key={task} data-cy="list-row">{task}</div>
        })}
    </div>
}