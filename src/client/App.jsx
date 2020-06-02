import React, { useState } from "react";
import { hot } from "react-hot-loader";
import TodoList from "./todoList";

function App() {
  const [todoItems, setItem] = useState([]);
  const [input, setInput] = useState("");

  function inputChange(event) {
    console.log(event.target.value);
    var newInput = event.target.value;
    setInput(newInput);
  }

  function toAdd(event) {
    setItem((prevItem) => {
      return [...prevItem, input];
    });
    event.preventDefault();
    setInput("");
  }
  function deleteItem(id) {
    console.log(id);
    setItem((prevItemArray) => {
      return prevItemArray.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <h2>Todo List</h2>

      <form>
        <input onChange={inputChange} value={input} name="list"></input>
        <br />
        <button onClick={toAdd}>Add</button>
      </form>
      <ul>
        {todoItems.map((eachTodo, index) => {
          return (
            <TodoList
              key={index}
              id={index}
              item={eachTodo}
              onDelete={deleteItem}
            />
          );
        })}
      </ul>
    </div>
  );
}

// class App extends React.Component {
//   render() {
//     return <div>Welcome!!!!!</div>;
//   }
// }

export default hot(module)(App);
