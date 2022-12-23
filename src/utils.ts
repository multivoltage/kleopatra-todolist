import { ITodo } from "./model/todo";

export function generateInitialTodos(): Array<ITodo> {
    return [
        { task: "diventare ricco", isPending: false },
        { task: "compare un areoporto", isPending: false },
    ];
}
