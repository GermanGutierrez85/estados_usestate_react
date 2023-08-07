import { useState } from "react";

export default function NoteApp() {
    const [notes, setNotes] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleAddNote = ()=>{
        if(inputValue.trim() !== ""){
            setNotes([...notes, inputValue]);
            setInputValue('');
        }
     };
    
     const handleDeleteNotes = (id) => {
        const updatedNotes = [...notes];
        updatedNotes.splice(id, 1);
        setNotes(updatedNotes);
    };
     const listNotes = notes.map((note, id) =>(
        <>
        <li key={id}>{note}<button onClick = { () => {handleDeleteNotes(id)}}>X</button></li>
        </>
     ))

  return (
    <>
    <div className="addNotes">
    <input type ="text"
     placeholder ='Ingresa tu anotacion'
      onChange = {(e) => setInputValue(e.target.value)}
      value = {inputValue}/>
    <button onClick = {handleAddNote}>Agregar Nota</button>
    </div>
    
    <h2>Tus Notas</h2>
    <ul>
        {notes.map((note, id) =>(
        <li key={id}>{note}<button onClick = { () => {handleDeleteNotes(id)}}>X</button></li>
     ))}
     {/* {listNotes} */}
    </ul>
    </>
  )
}
