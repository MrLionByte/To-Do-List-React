import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo, moveTodoDown,moveTodoUp, index, editTodo }) {
    return (
      <li>
        <label className="label">
          <input
            type="checkbox"
            checked={completed}
            onChange={e => toggleTodo(id, e.target.checked)}
          />
          {title}
        </label>
        <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        <FontAwesomeIcon icon={faTrash} />
        </button>
        <button 
         onClick={() => editTodo(id) } 
        className="btn btn-secondary">
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button 
       onClick={() => moveTodoUp(index) } 
        className="btn btn-success">
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
        <button 
        onClick={() => moveTodoDown(index) } 
        className="btn btn-success">
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
      </li>
      
    )
  }