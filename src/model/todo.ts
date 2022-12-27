export interface ITodo {
    task: string;
    state: TTodoState;
    created_at: number;
    completed_at: number | undefined;
}

export type TTodoState = "pending" | "completed";
