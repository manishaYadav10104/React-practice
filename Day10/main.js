import React, { useCallback, useMemo, useState } from "react";
import ReactDOM from "react-dom/client";


function App(){

  const [count, setCount]=useState(0);
  const [number,setNumber]= useState("");

    //counter

    const Fibbonacci= useCallback((n)=>{
        if(n<=1)
            return n;
        return Fibbonacci(n-1)+Fibbonacci(n-2);
    },[])

    const result = useMemo(()=>Fibbonacci(number),[number]);


    return(
        <>
        <h1>Counter is: {count}</h1>
        
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>

        <div>
            <h1>Fabbonnaci number is: {result}</h1>
            <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
        </div>
        
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

