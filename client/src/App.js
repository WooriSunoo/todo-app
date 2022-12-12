import { useState } from "react";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

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
  const additem = (newItem) => {
    // newItem설정이 코드로 나와야
    // newItem-{id: ?, title: ?, done: false}
    // setTodoItems() 설정해서 설정이 바뀌면 알아서 렌더링
    let addedItem = { id: todoItems.length + 1, title: newItem, done: false };
    setTodoItems([...todoItems, addedItem]);
  };
  return (
    // 3. AddTodo 컴포넌트를 추가
    <div className="App">
      <AddTodo additem={additem} />
      {todoItems.map((todoItem) => {
        console.log("APP.js todoItem", todoItem); //{id: 1, title: 'My Todo1', done: false}
        return <Todo key={todoItem.id} todoItem={todoItem} />;
      })}
    </div>
  );
}

export default App;
