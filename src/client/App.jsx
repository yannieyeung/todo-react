import React, { useState } from "react";
import { hot } from "react-hot-loader";

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
  }

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todoItems.map((eachTodo) => {
          return <li>{eachTodo}</li>;
        })}
      </ul>
      <form>
        <input onChange={inputChange} value={input} name="list"></input>
        <br />
        <button onClick={toAdd}>Add</button>
      </form>
    </div>
  );
}

// class App extends React.Component {
//   render() {
//     return <div>Welcome!!!!!</div>;
//   }
// }

export default hot(module)(App);
