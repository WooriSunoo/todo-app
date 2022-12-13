// 1. 함수형 컴포넌트
// 2.input(Checkbox)와 label을 렌더링하는 컴포넌트!
// 3. App (부모 컴포넌트)에서 Todo(자식 컴포넌트) 1개를 렌더링

const Todo = ({ item }) => {
  console.log("{todoItem}", item); //{id: 1, title: 'My Todo1', done: false}
  const { id, title, done } = item;
  return (
    <div className="Todo">
      <input
        type="checkbox"
        name={`todo${id}`}
        id={`todo${id}`}
        value={`todo${id}`}
        defaultChecked={done}
      />
      <label htmlFor={`todo${id}`}>{title}</label>
    </div>
  );
};

export default Todo;
