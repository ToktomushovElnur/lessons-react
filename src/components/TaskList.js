import React, { useState } from "react";
import Task from "./Task";
import "../index.css";

export default function TaskList({
                                     todos,
                                     onChangeTodo,
                                     onDeleteTodo,
                                     findTodoById,
                                 }) {
    const [searchId, setSearchId] = useState("");
    const [isEditingId, setIsEditingId] = useState(null);
    const [foundTodo, setFoundTodo] = useState(null);

    const handleSearch = () => {
        const id = parseInt(searchId, 10);
        if (!isNaN(id)) {
            const foundTodo = findTodoById(id);
            setFoundTodo(foundTodo);
        } else {
            console.log("Некорректный id");
        }
    };

    const handleEdit = (id) => {
        setIsEditingId(id);
    };

    const handleSave = (id, newTitle) => {
        onChangeTodo({
            id,
            title: newTitle,
        });
        setIsEditingId(null);
    };

    const handleCancelEdit = () => {
        setIsEditingId(null);
    };

    return (
        <div>
            <div>
                <label>
                    Поиск по ID:
                    <input
                        type="text"
                        value={searchId}
                        onChange={(e) => setSearchId(e.target.value)}
                    />
                </label>
                <button onClick={handleSearch}>Найти</button>
            </div>
            {foundTodo && (
                <div>
                    <h2>Результат поиска:</h2>
                    <p>ID: {foundTodo.id}</p>
                    <p>Title: {foundTodo.title}</p>
                    <p>Done: {foundTodo.done ? "Да" : "Нет"}</p>
                </div>
            )}
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <Task
                            todo={todo}
                            isEditing={isEditingId === todo.id}
                            onChange={onChangeTodo}
                            onDelete={onDeleteTodo}
                            onEdit={handleEdit}
                            onSave={handleSave}
                            onCancelEdit={handleCancelEdit}
                            findTodoById={findTodoById}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
