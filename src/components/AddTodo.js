import React from "react";
import { useState} from "react";

export default function AddTodo({onAddTodo}){
    const [title, setTitile] = useState('')

    return (
        <>
            <input placeholder="Add Todo"
                   value={title}
                   onChange={(e) => setTitile(e.target.value)}
            />
            <button
            onClick={()=> {
                setTitile("")
                onAddTodo(title)
            }}
            >
             Add
            </button>
        </>
    )
}