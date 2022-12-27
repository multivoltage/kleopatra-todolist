import { describe, expect, it, vi } from "vitest";
import { ITodo } from "./model/todo";
import { sortList } from "./utils";

describe("Todo List", () => {
    it("sortByState() works correctly - only pending", () => {
        const initialTasks: Array<ITodo> = [];
        let date;
        date = new Date(1998, 11, 19);
        vi.useFakeTimers();
        vi.setSystemTime(date);
        initialTasks.push({
            task: "111",
            state: "pending",
            created_at: date.getTime(),
            completed_at: undefined,
        });
        date = new Date(1998, 11, 21);
        vi.setSystemTime(date);
        initialTasks.push({
            task: "222",
            state: "pending",
            created_at: date.getTime(),
            completed_at: undefined,
        });
        date = new Date(1998, 11, 20);
        vi.setSystemTime(date);
        initialTasks.push({
            task: "333",
            state: "pending",
            created_at: date.getTime(),
            completed_at: undefined,
        });

        const sortedList = sortList(initialTasks);

        expect(sortedList[0].task).toEqual("222");
        expect(sortedList[1].task).toEqual("333");
        expect(sortedList[2].task).toEqual("111");
    });

    it("sortByState() works correctly - mixed states", () => {
        /*
        111 pending     19 novembre
        222 pending     20 novembre
        333 completed   21 novembre  24 novembre
        444 pending     22 novembre
        555 completed   23 novembre  30 novembre
        666 pending     24 novembre
        -----------------------------------------
        666 444 222 111 555 333
        */
        const initialTasks: Array<ITodo> = [];
        let date;
        date = new Date(1998, 11, 19);
        vi.useFakeTimers();
        vi.setSystemTime(date);
        initialTasks.push({
            task: "111",
            state: "pending",
            created_at: date.getTime(),
            completed_at: undefined,
        });
        date = new Date(1998, 11, 20);
        vi.setSystemTime(date);
        initialTasks.push({
            task: "222",
            state: "pending",
            created_at: date.getTime(),
            completed_at: undefined,
        });
        const dateCreated333 = new Date(1998, 11, 20);
        const dateComplet333 = new Date(1998, 11, 24);
        vi.setSystemTime(date);
        initialTasks.push({
            task: "333",
            state: "completed",
            created_at: dateCreated333.getTime(),
            completed_at: dateComplet333.getTime(),
        });
        date = new Date(1998, 11, 22);
        vi.setSystemTime(date);
        initialTasks.push({
            task: "444",
            state: "pending",
            created_at: date.getTime(),
            completed_at: undefined,
        });
        const dateCreated555 = new Date(1998, 11, 23);
        const dateComplet555 = new Date(1998, 11, 30);
        vi.setSystemTime(date);
        initialTasks.push({
            task: "555",
            state: "completed",
            created_at: dateComplet555.getTime(),
            completed_at: dateCreated555.getTime(),
        });
        date = new Date(1998, 11, 24);
        vi.setSystemTime(date);
        initialTasks.push({
            task: "666",
            state: "pending",
            created_at: date.getTime(),
            completed_at: undefined,
        });

        const sortedList = sortList(initialTasks);

        expect(sortedList[0].task).toEqual("666");
        expect(sortedList[1].task).toEqual("444");
        expect(sortedList[2].task).toEqual("222");
        expect(sortedList[3].task).toEqual("111");
        expect(sortedList[4].task).toEqual("555");
        expect(sortedList[5].task).toEqual("333");
    });
});
