import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TaskList from "./TaskList";

let nextId = 3;

const initialTodos = [
    { id: 0, title: <span>Buy milk</span>, done: true },
    { id: 1, title: <span>Сделать ДЗ</span>, done: true },
    { id: 2, title: <span>Написать ФИО преподу</span>, done: true },
];

export default function TaskApp() {
    const [todos, setTodos] = useState(initialTodos);

    const handleAddTodo = (title) => {
        setTodos((prevTodos) => [
            ...prevTodos,
            {
                id: nextId++,
                title: title,
                done: false,
            },
        ]);
    };

    function handleChangeTodos(nextTodo) {
        setTodos((prevTodos) =>
            prevTodos.map((t) => (t.id === nextTodo.id ? nextTodo : t))
        );
    }

    function handleDeleteTodo(todoId) {
        setTodos(todos.filter((t) => t.id !== todoId));
    }

    const findTodoById = (id) => {
        return todos.find((todo) => todo.id === id);
    };


    return (
        <>
            <AddTodo onAddTodo={handleAddTodo} />
            <TaskList
                todos={todos}
                onChangeTodo={handleChangeTodos}
                onDeleteTodo={handleDeleteTodo}
                findTodoById={findTodoById}
            />
        </>
    );
}
