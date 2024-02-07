import React, { useState } from "react";
import TodoStyle from './Todoapp.module.css'
export default function Todoapp(){
    const [todoinput,Updateinput]=useState();
    const [todolist,Updatetodolist]=useState([ ]);
    function AddNewTodo() {
        if (todoinput.trim() === "") {
            alert('Please enter something');
            return;
        }
        const newTodo = {
            id: Date.now(),
            data: todoinput.trim(),
        };
        Updatetodolist([...todolist, newTodo]);
        Updateinput("");
    }
    function Deletedata(id){
            let Updatetodos = todolist.filter((todos)=>todos.id !==id)
            Updatetodolist(Updatetodos)
    }
    return(
        <div className={TodoStyle.todo_main}>
            <div className="container py-5 h-100  border bg-light rounded-4 w-100 shadow-sm">
                <h2 className="text-center my-3">Todo-App</h2>
                <div className=" m-auto w-75 input-group">
                    <input type="text" className="form-control p-3" placeholder="enter anything" value={todoinput} onChange={(e)=>{
                            let task =e.target.value;
                            Updateinput(task)
                    }}/>
                    <button className="btn btn-primary"onClick={()=>AddNewTodo()}>Add</button>
                </div>
                    <ul className="list-group mt-3 w-75 m-auto">
                        {
                            todolist.map((todo,id)=>{
                                return(
                                    <li className="list-group-item d-flex justify-content-between " key={id}>
                                        <p>{todo.data}</p>
                                        <p className="btn" style={{cursor:'pointer'}} onClick={()=>Deletedata(todo.id)}>❌</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
            </div>
        </div>
    )
}