import { ITodo, TTodoState } from "./model/todo";

/**
 * used by cypress but can be a Promise and fetch data from web
 */
export function generateInitialTodos(): Array<ITodo> {
    return [buildNewTodo("diventare ricco"), buildNewTodo("comprare un areoporto")];
}

export function buildNewTodo(task: string): ITodo {
    return {
        task,
        state: "pending",
        created_at: new Date().getTime(),
        completed_at: undefined,
    };
}

export function buildNextTodo(todo: ITodo): ITodo {
    const nextState = getNextStateTask(todo.state);

    return {
        task: todo.task,
        state: nextState,
        created_at: todo.created_at,
        completed_at: nextState === "completed" ? new Date().getTime() : undefined,
    };
}

/**
 * This method allow us to think like a flus for a specific task. We can introduce in future more states
 * @param state current state if task
 * @returns next possible state of a task.
 */
export function getNextStateTask(state: ITodo["state"]): ITodo["state"] {
    if (state === "pending") return "completed";

    return "pending";
}

export function formatTime(millis: number) {
    return new Date(millis).toLocaleDateString("it-IT", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
}

function sortByCreatedDate(prev: ITodo, next: ITodo): number {
    return prev.created_at < next.created_at ? 1 : -1;
}

// Prima i pending, in ordine di creazione dal più recente al più vecchio. Poi i completed (scelto stesso ordinamento di creazione)
export function sortList(todos: Array<ITodo>): Array<ITodo> {
    const pendings = todos.filter((t) => t.state === "pending");
    const completed = todos.filter((t) => t.state === "completed");

    const sortedPendings = [...pendings].sort(sortByCreatedDate);
    const sortedCompleted = [...completed].sort(sortByCreatedDate);

    return [...sortedPendings, ...sortedCompleted];
}
