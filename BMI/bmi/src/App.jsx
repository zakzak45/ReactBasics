import { useState } from 'react'
import './App.css'

function App() {
 const [results,setResults] =useState('')
 const [weight ,setWeight] =useState('')
 const [height ,setHeight] =useState('')


 const Calculate =()=>{
   let h = height;
   let w =weight;
   let r = results;
   
     r = w/(h*h)   
 
  setResults(r)
  setWeight('')
  setHeight('')

 }

  return (
    <>
   <div>
    <input type="number" value={weight} onChange={(e)=>{
      setWeight(Number(e.target.value))
    }} />
    <input type="number"  value={height}  onChange={(e)=>{
      setHeight(Number(e.target.value))
    }}  />  
    <input type="text" value={results} onChange={(e)=>{
    setResults(Number(e.target.value))
    }} />
    <button onClick={Calculate}>Calculate</button>

   </div>
    </>
  )
}  

export default App
