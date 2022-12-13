import { useState } from "react";

const Todo = ({ item, deleteItem }) => {
  // console.log(item); // { id: 1, title: 'todo1', done: false, }
  const { id, title, done } = item;
  const [todoItem, setTodoItem] = useState(item);
  const [readOnly, setReadonly] = useState(true);

  const onDeleteBtnClick = () => {
    deleteItem(todoItem);
  };
  // title input 커서가 깜빡인다고 수정이 가능한 것은 아님
  // 사용자가 키보드 입력할 때마다 todoItem의 title을 새 값으로 변경

  const editEventhandler = (e) => {
    // editItem(e, todoItem);
    // rest: id, done정보
    const { title, ...rest } = todoItem; //{ id: 1, title: 'todo1', done: false, }{ id: 1, title: 'todo1', done: false, }
    setTodoItem({
      title: e.target.value,
      ...rest,
      // id: todoItem.id,
      // done: todoItem.done,
    });
  };
  // title input클릭시(title을 수정하겠다!!) :readOnly state를 false로 변경
  const offReadOnlyMode = () => {
    // console.log("offReadonly", readOnly);
    setReadonly(false);
  };

  // title input에서 enter키 입력시 (title 수정을 완료했습니다!!):readOnly state를true로 변경
  const enterKeyEventHandler = (e) => {
    if (e.key === "Enter") {
      // console.log("enterKeyEventHandler", readOnly);
      setReadonly(true);
    }
  };
  // checkbox업데이트
  // done: true -> false, false, ->true
  const checkboxEventHandler = (e) => {
    // console.log("editCheckedbox", e.target.checked, done);
    // todoItem.done = !todoItem.done; //!true-> false, !false ->true
    setTodoItem(todoItem);
  };

  return (
    <div className="Todo">
      <input
        type="checkbox"
        id={`todo${id}`}
        name={`todo${id}`}
        value={`todo${id}`}
        defaultChecked={done}
        onChange={checkboxEventHandler}
      />
      {/* <label htmlFor={`todo${id}`}>{title}</label> */}
      <input
        type="text"
        id={`todo${id}`}
        name={`todo${id}`}
        value={todoItem.title}
        onChange={editEventhandler}
        readOnly={readOnly}
        onClick={offReadOnlyMode}
        onKeyPress={enterKeyEventHandler}
      />
      <button onClick={onDeleteBtnClick}>DELETE</button>
    </div>
  );
};

export default Todo;
