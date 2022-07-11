import "./App.css";
import { useState } from "react";

 
function App() {
  const [todo, setTodo] = useState(""); //keep track of each new Todo item and Todo list.
  const [todos, setTodos] = useState([]); //to keep track of the state of the Todos array

  // addTodo function to add a Todo item to the Todos list
  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]); //you need to make a copy of the todos array before adding todo elements to it.
      setTodo('');
    }
  }
  return (
    <div className="App">
      <h1>React Todo App</h1>
      
      <div className="input-wrapper">
        <input 
        type="text" name="todo"
        value={todo} 
        placeholder="Create a new todo"
        // Create a New Todo Item
        onChange={(e) => {
          setTodo(e.target.value);
        }} />
        <button className="add-button" onClick={addTodo}>Add</button>
      </div>

      {/* Displaying Todo Items */}
      {todos?.length > 0 ? (
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <div className="todo">
              <li key={index}> { todo }</li>
              <button className="delete-button">Delete</button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>No task found</p>
        </div>
      )}
    </div>
  );
}

export default App;
