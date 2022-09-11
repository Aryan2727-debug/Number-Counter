import { useState } from "react";
import React from "react";
import "./index.css";

function App(){

    const [num , setNum] = useState(0);

    function inc_click(){
        setNum(num+1);
    };

    function dec_click(){
        if(num>0){
          setNum(num-1);
        }
        else{
            alert("ERROR! 0 limit reached");
            setNum(0);
        }
    };

    return(
        <>
            <div className="main_div">
               <div className="strip">
               <h1>{num}</h1>
               </div>
               <button onClick={inc_click} className="increment">Increment</button>
               <button onClick={dec_click} className="decrement">Decrement</button>
            </div>
        </>
    )
};

export default App;