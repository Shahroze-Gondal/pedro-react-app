import './App.css';

function App() {
  return (
    <div className="App">
      <Job name='dsf'/>
    </div>
  );
}


const Job = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <p></p>
      <p></p>
    </div>
  )
}


export default App;
