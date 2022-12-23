import { ITodo } from "./model/todo";

export function generateInitialTodos(): Array<ITodo> {
    return [
        { task: "diventare ricco", state: "pending" },
        { task: "compare un areoporto", state: "pending" },
    ];
}
