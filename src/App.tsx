import { useRef, useState } from "react";
import './styles/App.css'
import './styles/List.css'
import './styles/Form.css'
import { List } from "./components/List";
import { generateInitialTodos } from "./utils";
import { ITodo } from "./model/todo";

function App() {

  const form = useRef<HTMLFormElement>(null)
  const [todos, setTodos] = useState(generateInitialTodos())

  function createNewTodo(task: string) {
    if (todos.some(t => t.task.toLowerCase() === task.toLowerCase())) {
      alert('already added')
      return
    }
    setTodos((old) => ([...old, {
      state: "pending",
      task
    }]))
  }

  function completeTodo(task: string) {
    const newTodos = todos.reduce((acc, currentTask) => {
      const v = currentTask
      if (v.task === task) {
        v.state = "completed"
      }
      acc.push(v)
      return acc
    }, [] as ITodo[])
    setTodos(newTodos)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // todo - find a better types without use react-hook-form or similar
    const task: string = (e.target as any).newtodo.value
    createNewTodo(task)
    form.current?.reset()
  }

  return (
    <div className="App">
      <List todos={todos} handleAction={completeTodo} />

      <div>
        <form onSubmit={handleSubmit} ref={form} className="form">
          <input type="text" required name="newtodo" className="form--tv w-full" data-cy="input-new-task" />
          <input type="submit" value="ADD NEW" className="form--cta-create" data-cy="btn-add" />
        </form>
      </div>
    </div>
  );
}

export default App;
