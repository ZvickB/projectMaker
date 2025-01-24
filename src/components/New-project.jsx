import Modal from "./Modal";
import { useRef } from "react";
import Input from "./Input";
export default function NewProject({onAdd, onCancel}){
const modal=useRef();

    const title= useRef();
    const description = useRef();
    const dueDate = useRef();

function handleSave(){
    const enteredTitle=title.current.value;
    const enteredDescription=description.current.value;
    const enteredDueDate=dueDate.current.value;
   
      if (
        enteredTitle.trim()===''
        || enteredDescription.trim()===''
        || enteredDueDate.trim()===''
    ) {
modal.current.open();
return;
}


    onAdd({
            title:enteredTitle,
            description:enteredDescription,
            dueDate:enteredDueDate
        });
    }
  
    return <>
    <Modal ref={modal}>
        <h2 className="px-4 text-xl text-stone-600 font-bold mb-4 ">Invalid Input</h2>
        <p className="px-4 text-stone-500 mb-4">Oops... it looks like you didn't add all the needed values.</p>
        <p className="px-4 text-stone-500 mb-4">Please provide all details.</p>
    </Modal>
    <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li>
                <button onClick={onCancel}
                className="text-stone-700 px-4 py-2 rounded-md hover:text-stone-950 hover:shadow-md">
                    Cancel</button></li>
            <li><button 
            className="px-6 py-2 rounded-md bg-stone-700 text-stone-50 hover:shadow-md hover:bg-stone-950"
            onClick={handleSave}>
                Save</button></li>
        </menu>
        <div>
           <Input ref={title} label="Title" />
           <Input  ref={description} label="Description" textarea />
           <Input type="date" ref={dueDate} label="Due Date" />
        </div>
    </div>
    </>
}