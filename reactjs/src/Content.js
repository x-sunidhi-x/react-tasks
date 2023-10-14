
import React from 'react'
import { useState } from 'react';
//cant use useState in class and if/conditional stmts
const Content = () => {


    function namechange(){
        const names=["give","earn","spend"];
        const i=Math.floor(Math.random()*3);
        return names[i];
    }
   const [count,setCount]=useState(99);
    function increment(){
      //setCount(count+1)//count var not updated tho
      setCount((prevcount)=>{return prevcount+1})//count updates too
    
    }
    function decrement(){
      setCount((prevcount)=>{return prevcount-1})
    }
  return (
   <main>
    <p>Lets earn money</p>
    <button >Subscribe</button>
    <button onClick={decrement}>-</button>
    <span>{count}</span>
    <button onClick={increment}>+</button>
    </main>
  )
}

export default Content