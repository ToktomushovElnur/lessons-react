import React from "react";
import {useState} from "react";


export default function Task({ todo, onChange, onDelete, findTodoById }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(todo.title);

    const handleSave = () => {
        const editedTodo = findTodoById(todo.id);
        onChange({ ...editedTodo, title: editedText });
        setIsEditing(false);
    };

    return (
        <label>
            <input
                type="checkbox"
                checked={todo.done}
                onChange={() => onChange({ ...todo, done: !todo.done })}
            />
            {isEditing ? (
                <>
                    <input
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                    />
                    <button onClick={handleSave}>Save</button>
                </>
            ) : (
                <>
                    {todo.title}
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </>
            )}
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </label>
    );
}
