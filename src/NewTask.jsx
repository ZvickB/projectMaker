import { useState } from "react"

export default function NewTask({onAdd}){
    const [enteredTask, setEnteredTask]=useState('')
function handleChange(event){
setEnteredTask(event.target.value)
}

function handleClick(){
setEnteredTask('');
onAdd(enteredTask)
}

    return <div className="flex items-center gap-4">
        <input type="text" className="w-64 px-2 rounded-sm py-1 bg-stone-200"
         onChange={handleChange}
         value={enteredTask}/>
        <button 
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950">Add Task</button>
    </div>
}
