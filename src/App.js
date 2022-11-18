import { useState } from 'react';
import './App.css';

function App() {
  const [api_data, setApi] =useState('')
  
  // const fetchData=()=>{
  //   fetch(`https://api.agify.io/?name=${name}`)
  //   .then((res) => res.json())
  //   .then((data)=>{
  //     setPredictedAge(data);
  //   })
  // };

  const fetchData=(name)=>{
    fetch(`https://excuser.herokuapp.com/v1/excuse/${name}/`)
    .then((res) => res.json())
    .then((data)=>{
      console.log(data[0])
      setApi(data[0].excuse);
    })
  };

  return (
    <div className="App">
      <h1>Generate an excuse</h1>
      <button onClick={()=>fetchData('party')}>party</button>
      <button onClick={()=>fetchData('family')}>family</button>
      <button onClick={()=>fetchData('office')}>office</button>
      {api_data}
      {/* <input placeholder='shahroze' onChange={(event)=>{setName(event.target.value)}}/>
      <button onClick={fetchData}>Predict age</button>
      <h1>Predicted name: {predictedAge?.name}</h1>
      <h1>Predicted age: {predictedAge?.age}</h1> */}
    </div>
  );
}


export default App;
