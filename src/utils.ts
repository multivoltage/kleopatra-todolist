import { ITodo } from "./model/todo";

export function generateInitialTodos(): Array<ITodo> {
    return [{ task: "diventare ricco" }, { task: "compare un areoporto" }];
}
