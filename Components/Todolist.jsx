/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react"
import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodo, moveTodoDown,moveTodoUp, index ,editTodo}) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map((todo,index) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo} 
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            index={index}
            moveTodoUp={moveTodoUp}
            moveTodoDown={moveTodoDown}
            
          />
        )
      })}
    </ul>
  )
}