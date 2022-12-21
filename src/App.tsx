import { useState } from "react";
import "./App.css";
import { List } from "./components/List";
import { generateInitialTodos } from "./utils";

function App() {

  const [todos, setTodos] = useState(generateInitialTodos())

  return (
    <div className="App">
      <List todos={todos} />
    </div>
  );
}

export default App;
