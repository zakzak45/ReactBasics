import { useState } from 'react'
import './App.css'

function App() {
 
const  [ num1 ,setNum1] =useState(0)
const  [num2,setNum2] =useState(0)
const [result,setResult] =useState(0)


const  Calculate = (operation)=>{
switch(operation){
  case '+': setResult(eval(num1+num2)); break;
  case '-': setResult(eval(num1-num2)); break;
  case '*': setResult(eval(num1*num2)); break;
  case '/': setResult(eval(num1/num2)); break;
  default: setResult(0)
}
}

  return (
    <>
   <input type="number"  value={num1} onChange={(e)=>{
     setNum1(Number(e.target.value))
   }}></input>
   <input type="number"  value={num2}   onChange={(e)=>{
    setNum2(Number(e.target.value))
   }} />

<button onClick={()=>{
  Calculate('+')
}}>+</button>
<button onClick={()=>{
  Calculate('-')
}}>-</button>
<button
onClick={()=>{
  Calculate('*')
}}>*</button> 
<button
onClick={()=>{
  Calculate('/')
}}>/</button>
   <span>Results:{Number(result)} </span> 
    </>
  )
}

export default App
