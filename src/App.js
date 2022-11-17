import './App.css';
import User from './User/User';

function App() {
  const users =[
    { name: 'jessica', age: 15},
    { name: 'jake', age: 24}
  ]
  return (
    <div className="App">
      {users.map(user=>{
        return <User name={user.name} age={user.age}/>
      })}
    </div>
  );
}


export default App;
