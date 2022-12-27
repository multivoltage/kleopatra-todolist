import { ITodo } from "../model/todo"
import { sortList } from "../utils"
import { Row } from "./Row"

interface Props {
    todos: Array<ITodo>
    handleAction: (task: string) => void
}

export function List({ todos, handleAction }: Props) {

    return <div data-cy="list" className="list">
        <div className="list__row">
            <span>TASK:</span>
            <span>CREATED AT:</span>
            <span>COMPLETED AT:</span>
            <span>STATUS:</span>
            <span>MARK AS:</span>
        </div>
        {sortList(todos).map(t => {
            return <Row todo={t} handleAction={handleAction} key={t.task} />
        })}
    </div>
}