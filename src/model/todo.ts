export interface ITodo {
    task: string;
    state: TTodoState;
}

export type TTodoState = "pending" | "completed";
