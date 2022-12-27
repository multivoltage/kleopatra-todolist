import { ITodo } from "./model/todo";

/**
 * used by cypress but can be a Promise and fetch data from web
 */
export function generateInitialTodos(): Array<ITodo> {
    return [buildNewTodo("diventare ricco"), buildNewTodo("compare un areoporto")];
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
