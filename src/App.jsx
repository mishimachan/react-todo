import React, { useState } from "react";
import "./styles.css";
// import { Input } from "./components/Input";
import { Complete } from "./components/Complete";

export const App = () => {
  const [todoText, setTodoText] = useState("");

  const [incompleteTodos, setIncompleteTodos] = useState([]);

  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => {
    console.log("valueは：" + event.target.value);
    return setTodoText(event.target.value);
  };
  const onClickAdd = () => {
    if (todoText === "") {
      console.log("空みたいdawa");
      return;
    }
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
    console.log("通りましたぜ");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    // splice:削除の指定。第一引数は何番目か、第二引数は何個削除するのか
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    // splice:削除の指定。第一引数は何番目か、第二引数は何個削除するのか
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const backCompleteTodos = [...completeTodos];
    // splice:削除の指定。第一引数は何番目か、第二引数は何個削除するのか
    backCompleteTodos.splice(index, 1);

    const backIncompleteTodos = [...incompleteTodos, completeTodos[index]];

    setIncompleteTodos(backIncompleteTodos);
    setCompleteTodos(backCompleteTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} class="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} class="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
