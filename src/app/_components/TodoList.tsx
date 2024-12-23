import { useRef } from "react";
import { CTodo } from "../_lib/types";


export default function TodoList({todos, setTodo  }: {todos: CTodo[], setTodo: (todos:CTodo) => void}) {

  const inputRef = useRef<HTMLInputElement>(null);
   
  function addTodo() {
    if (inputRef.current) {
      const text = inputRef.current.value;
      inputRef.current.value = "";

      const todo = new CTodo(text, false, 0);
      setTodo(todo);
    
    }
  }

  return (
    <div>
      <br/> <br/> <br/>
      <h3>TODO LIST</h3>
      <div>
      {todos.filter(todo => todo.completed === false && todo.deleted != true).map((todo, index) => (<div key={index}><Todo todo={todo} setTodo={setTodo}/></div>))}
      </div>


      <div  className="flex">
        <div><input  className="flex-none w-60 border-2" ref={inputRef} placeholder="Add new task"/></div>
        <div className="flex-none w-10"><button onClick={() => addTodo()}>Add</button></div>
      </div>

      <br/>
      <h3>DONE:</h3>
  
        {todos.filter(todo => todo.completed === true && todo.deleted != true).map((todo, index) => (<div key={index}><Todo todo={todo} setTodo={setTodo}/></div>))}
   
    </div> 
  );
}



const Todo = ({todo, setTodo} : {todo: CTodo,  setTodo: (todo:CTodo) => void}) => {

  function handleCheck(e: {  target: { checked: boolean; }; }) {
    todo.completed = e.target.checked;
    setTodo(todo);
  }

  function handleDelete() {
    todo.deleted = true;
    setTodo(todo);
  }


  return <div className="flex">
    <div className="flex-none w-5 "><input type="checkbox" checked={todo.completed} onChange={handleCheck}/></div>
    <div className={"flex-none w-60 " + (todo.completed ? 'line-through': '')}>{todo.text}</div>
    <div className="flex-none w-5"><button onClick={handleDelete}> X </button></div> 
  </div>;
} 