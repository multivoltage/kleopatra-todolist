import { ITodo } from "../model/todo"
import { Row } from "./Row"

interface Props {
    todos: Array<ITodo>
    handleAction: (task: string) => void
}

export function List({ todos, handleAction }: Props) {



    return <div data-cy="list" className="list">
        {todos.map(t => {
            return <Row todo={t} handleAction={handleAction} />
        })}
    </div>
}