import { useState } from 'react'
import './App.css'

const Accordion = ({title,content}) => {

  const [isOpen ,setIsOpen]= useState(false)

  return ( 
  <>
  <div style={{ border: "1px solid #ccc", marginBottom: "8px", borderRadius: "5px" }}>
      <div
        style={{ padding: "10px", cursor: "pointer", background: "#38447cff" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <strong>{title}</strong>
      </div>
      {isOpen && (
        <div style={{ padding: "10px", background: "#1a4dbbff" }}>
          {content}
        </div>
      )}
    </div>
  </> 
  );
}
 






function App() {
 

  return (
    <>
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Simple Accordion</h2>
      <Accordion title="Section 1" content="This is the content of section 1." />
      <Accordion title="Section 2" content="This is the content of section 2." />
      <Accordion title="Section 3" content="This is the content of section 3." />
    </div>
    </>
  )
}

export default App
