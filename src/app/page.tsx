

'use client'
import { useState } from "react";
import TodoList from "./_components/TodoList";
import { CTodo } from "./_lib/types";

export default function Page() {
  const [todos, setTodos] = useState<CTodo[]>([new CTodo('Todo 1', false, 1), new CTodo('Todo 2', true, 2)]);

  const setTodo  = (todo: CTodo) => {
    if (todo.id === 0) {
      todo.id = Date.now();
      setTodos([...todos, todo]);
    }
      
    else if (todo.deleted) {
      setTodos(todos.filter(t => !t.deleted));
    }

    else {
      setTodos(todos.map(t => {
      if (t.id === todo.id)  {
        return todo;
      }
      else {
        return t;
      }}));
    }
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
     <TodoList todos={todos} setTodo={setTodo} />
    </div>
  );
}
