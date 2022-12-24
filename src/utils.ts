import { ITodo } from "./model/todo";

/**
 * used by cypress but can be a Promise and fetch data from web
 */
export function generateInitialTodos(): Array<ITodo> {
    return [
        { task: "diventare ricco", state: "pending" },
        { task: "compare un areoporto", state: "pending" },
    ];
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
