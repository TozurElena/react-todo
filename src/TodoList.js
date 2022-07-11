import React from 'react';


const TodoList = ({ list, remove }) => {
  return (
    <>
    {/* Displaying Todo Items */}
      {list?.length > 0 ? (
        <ul className="todo-list">
          {list.map((todo, index) => (
            <div className="todo">
              <li key={index}> { todo }</li>
              <button className="delete-button" onClick={() => {remove(todo);}}>Delete</button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>No task found</p>
        </div>
      )}
    </>
  );
};

export default TodoList;