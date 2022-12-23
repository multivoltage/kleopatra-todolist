import { useRef, useState } from "react";
import './styles/App.css'
import './styles/List.css'
import './styles/Form.css'
import { List } from "./components/List";
import { generateInitialTodos } from "./utils";

function App() {

  const form = useRef<HTMLFormElement>(null)
  const [todos, setTodos] = useState(generateInitialTodos())

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // todo - find a better types without use react-hook-form or similar
    const description: string = (e.target as any).newtodo.value
    setTodos((old) => ([...old, {
      isPending: true,
      task: description
    }]))
    form.current?.reset()
  }

  return (
    <div className="App">
      <List todos={todos} />

      <div>
        <form onSubmit={handleSubmit} ref={form} className="form-create">
          <input type="text" required name="newtodo" className="w-full" data-cy="input-new-task" />
          <input type="submit" value="ADD NEW" data-cy="btn-add" />
        </form>
      </div>
    </div>
  );
}

export default App;
