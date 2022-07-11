import "./App.css";
import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

 
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
  // create a new Todos array containing all the elements except for the one being removed.
  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  }
  return (
    <div className="App">
      <h1>React Todo App</h1>
      <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoList list={todos} remove={deleteTodo}/>   
      
    </div>
  );
}

export default App;
