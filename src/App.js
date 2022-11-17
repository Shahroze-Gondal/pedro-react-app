import './App.css';
import { useState } from 'react';

function App() {
  // const [inputValue, setInput]=useState('');
  // const [show, setShow]=useState(false);

  // const toggle=()=>{
  //   const doesShow = show;
  //   setShow(!show);
  // }

  // const changeInputValue=(event)=>{
  //   setInput(event.target.value);

  const [count, setCount] = useState(0);
  const increaseHandler = ()=>{
    setCount(count+1);
  }
  const decreaseHandler=()=>{
    setCount(count-1);
  }
  const setToZero=()=>{
    setCount(0);
  }

  return (
    <div className="App">
      {/* <input type='text' onChange={changeInputValue}></input>
      {inputValue}
      <button onClick={toggle}>Toggle</button>
      {
        show && <h1>this is the show</h1>
      } */}
      <button onClick={increaseHandler}>Increase</button>
      <button onClick={decreaseHandler}>decrease</button>
      <button onClick={setToZero}>set to Zero</button>
      <h1>{count}</h1>
    </div>
  );
}


export default App;
