import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])  // Changed to plural for clarity
  const [input, setInput] = useState("")

  function addTask() {  // Lowercase function name (convention)
    if (!input.trim()) {  // More idiomatic check
      return
    }
    
    const newTask = {
      id: Date.now(),
      text: input,
    }

    setTasks([...tasks, newTask])
    setInput("")
  }

  return (
    <div className="App">  
      <input 
        type="text"
        placeholder='Enter a task'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (  // Changed to tasks (plural)
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
