import react from  'react'
import { useState } from 'react'
import rimuru from  './assets/rimuru.jpg'
import rimurutempest from './assets/rimurutempest.jpeg'
import tensura from  './assets/tensura.jpg'
import './App.css'



function App() {

const imgStyle = { height: "500px", width: "500px" };

return (
  <>
    <img src={rimurutempest} style={imgStyle} alt="rimuru tempest" />
    <img src={rimuru} style={imgStyle} alt="rimuru" />
    <img src={tensura} style={imgStyle} alt="tensura" />
  </>
);

}

export default App
