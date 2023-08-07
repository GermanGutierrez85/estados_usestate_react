import { useState } from "react";

export default function NameList() {

    const [names, setNames] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const handleAddName = ()=>{
        if(inputValue.trim() !== ""){
            setNames([...names, inputValue]);
            setInputValue('');
        }
     };
     const listNames = names.map((invitado, id) =>(
        <li key={id}>{invitado}</li>
     ))
    
  return (
    <>
    <input type ="text"
     placeholder ='Ingresa un nombre'
      onChange = {(e) => setInputValue(e.target.value)}
      value = {inputValue}/>
    <button onClick = {handleAddName}>Agregar</button>
    <h2>Lista de Nombres</h2>
    <ul>{listNames}</ul>
    </>
    
  )
}
