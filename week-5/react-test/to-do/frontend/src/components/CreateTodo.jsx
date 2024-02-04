import { useState } from "react"

function ocTitle(e){
    const value = e.target.value;
    setTitle(e.target.value);
}

function ocDescription(e){
    const value = e.target.value;
    setDescription(e.target.value);
}
export function CreateTodo(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return <div>
        <input type="text" placeholder="title" onChange={ocTitle}></input><br></br><br></br>
        <input type="text" placeholder="description" onChange={ocDescription}></input><br></br><br></br>
        <button onClick={()=>{
            fetch("http://localhost:3000/todos", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "contentType": "application/json"
                }
            })
                .then(async function(res){
                    const resj = await res.json();
                    alert("Todo Added!");
                })
        }}>Add a Todo</button>
    </div>
}
