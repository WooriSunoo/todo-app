import { useState } from "react";
import Todo from "./components/Todo";

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      title: "My Todo1",
      done: false,
    },
    {
      id: 2,
      title: "My Todo2",
      done: false,
    },
    {
      id: 3,
      title: "My Todo3",
      done: true,
    },
  ]);
  return (
    <div className="App">
      {todoItems.map((todoItem) => {
        console.log(todoItem); //{id: 1, title: 'My Todo1', done: false}
        return <Todo key={todoItem.id} todoItem={todoItem} />;
      })}
    </div>
  );
}

export default App;
