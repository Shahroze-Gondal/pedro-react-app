import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [catFact, setCatFact] = useState('')
  
  const fetchCatFact=()=>{
    fetch("https://catfact.ninja/fact")
    .then((res) => res.json())
    .then((data)=>{
      setCatFact(data.fact)
    })
  };
  useEffect(()=>{
    fetchCatFact();
  },[])

  return (
    <div className="App">
      <div><button onClick={fetchCatFact}>Cat fact</button></div>
      <h1>{catFact}</h1>
    </div>
  );
}


export default App;
