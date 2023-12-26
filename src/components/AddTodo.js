import React, { useState } from "react";

export default function AddTodo({ onAddTodo }) {
    const [title, setTitle] = useState("");

    return (
        <>
            <input
                placeholder="Add Todo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button
                onClick={() => {
                    setTitle("");
                    onAddTodo(<span>{title}</span>);
                }}
            >
                Add
            </button>
        </>
    );
}
