import { useState } from "react"

export default function Counter() {
    const [add, setAdd] = useState(0);
    const sumatoria = () => setAdd(add + 1);
    const resta = () => {
        if(add <= 0){
            alert('You cannot subtract more')
        }else{
            setAdd(add - 1);
        }}
            

  return (
    <>
    <div>Counter  {add} </div>
    <div className="buttons">
      <button className="btnStyle" onClick={sumatoria}>+</button>
      <button className="btnStyle" onClick={resta}>-</button>
    </div>
    
    </>
    
  )
}
