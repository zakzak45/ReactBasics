import { useState, useRef } from "react";



const Timer = () => {

  const [seconds ,setSeconds] =useState(0)
  const [isrunning,setIsrunning] =useState(false)
  const  intervalRef =useRef(null)


  const start =()=>{
     if(isrunning) return 
     setIsrunning(true)

  
intervalRef.current = setInterval(()=>{
  setSeconds(prev => prev +1)
},1000)}


  const Stop =()=>{
   setIsrunning(false)
   clearInterval(intervalRef.current)
  }
  

  const  Reset =()=>{
    Stop()
    setSeconds(0)

  }

  return (
    <>
    <span>Timer:{seconds}</span>
    <button onClick={start}>Start</button>
    <button onClick={Stop}>Stop</button>
    <button onClick={Reset}>Reset</button>

    </> 
   );
}
 
export default Timer;