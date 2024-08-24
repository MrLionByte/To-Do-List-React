/* eslint-disable react/prop-types */
import React,{ useState } from "react";

export function EditTodoForm ({ id, currentTitle, onEditTodo, cancel_edit }) {
    const [newTitle, setNewTitle ] = useState(currentTitle);

    function handleSubmit(e) {
        e.preventDefault();
        if (newTitle.trim() === "") return;

        onEditTodo(id, newTitle);
        cancel_edit();
    }
    return (
        <form onSubmit={handleSubmit} className="edit-item-form">
          <div className="form-row">
            <label htmlFor="editItem">Edit Item</label>
            <input
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              type="text"
              id="editItem"
            />
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
          <button type="button" onClick={cancel_edit} className="btn btn-secondary">Cancel</button>
        </form>
      );
}