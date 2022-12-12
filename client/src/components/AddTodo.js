import { useState } from "react";
// 1. 함수형 컴포넌트
// 2. input과 button을 가짐
const AddTodo = ({ additem }) => {
  // 사용자 입력을 저장할 객체
  // (id, title, done에 대한 정보를 저장해야해서 객체 형태로!!)
  const [todoItem, setTodoItem] = useState({
    title: "",
  });

  const onButtonClick = () => {
    // props로 받아온 addItem 함수 실행
    additem(todoItem);
  };
  return (
    <div className="AddTodo">
      <input
        type="text"
        value={todoItem}
        onChange={(e) => setTodoItem(e.target.value)}
        placeholder="Add your new Todo"
      />
      <button onClick={onButtonClick}>ADD</button>
    </div>
  );
};

export default AddTodo;
