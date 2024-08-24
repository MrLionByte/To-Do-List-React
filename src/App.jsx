import React,{ useEffect, useState } from "react"
import { NewTodoForm } from "../Components/NewTodoForm"
import { EditTodoForm } from "../Components/editTodoForm"
import "./index.css"
import { TodoList } from "../Components/Todolist"


export default function App() {
  const [todos, setTodos] = useState(() => {
  const localValue = localStorage.getItem("ITEMS")
  if (localValue == null) return []

    return JSON.parse(localValue)
  })

  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  function handleEditTodo(id, newTitle) {
    console.log('working');
    setTodos(currentTodos => 
      currentTodos.map(todo => 
       todo.id === id ? { ...todo, title: newTitle} : todo
      )
    );
  }

  function startEditing(id) {
    console.log('working saa', id)
    setEditingId(id);
  }

  function stopEditing() {
    setEditingId(null);
  }

  function moveTodoUp(index) {
      if (index > 0) {
        const updateTodo = [...todos];
        [updateTodo[index], updateTodo[index-1]] = [updateTodo[index-1], updateTodo[index]];
        setTodos(updateTodo);
      }
  }

  function moveTodoDown(index) {
    if (index < todos.length - 1) {
      const updateTodo = [...todos];
      [updateTodo[index], updateTodo[index+1]] = [updateTodo[index+1], updateTodo[index]];
      setTodos(updateTodo);
    }
  }

  const handleBackground = () => {
    
  }

  return (
    <>    
    { editingId ? (
      <EditTodoForm 
          id={editingId} 
          currentTitle={todos.find(todo => todo.id === editingId)?.title || ''}
          onEditTodo={handleEditTodo} 
          cancel_edit={stopEditing} 
        />
    ) : (
      <>
        <NewTodoForm onSubmit={addTodo} />
        <h1 className="header">Todo List</h1>
        <TodoList 
        todos={todos}
        toggleTodo={toggleTodo} 
        deleteTodo={deleteTodo}  
        editTodo={startEditing}
        handleEditTodo={handleEditTodo}
        editingId={editingId}
        moveTodoUp={moveTodoUp} 
        moveTodoDown={moveTodoDown}
      
          />
      </>
    )
    }
    </>  
  );
}