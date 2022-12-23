import { ITodo } from "../model/todo"
import { Row } from "./Row"

interface Props {
    todos: Array<ITodo>
}

export function List({ todos }: Props) {

    return <div data-cy="list" className="list">
        {todos.map(t => {
            return <Row todo={t} />
        })}
    </div>
}