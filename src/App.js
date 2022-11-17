import { useState } from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList]=useState([]);
  const [newValue, setNewValue]= useState('');

  const changeInput =(event) =>{
    setNewValue(event.target.value);
  }
  const addTask = ()=>{
    const task = {
      id: todoList.length === 0 ? 1: todoList[todoList.length-1].id + 1,
      taskName : newValue,
      completed: false
    }
    setTodoList([...todoList, task]);
  }

  const deleteItem = (id) =>{
    setTodoList(todoList.filter((task)=> task.id !==id))
    }

  const makeGreen = (id) =>{
    setTodoList(todoList.map(item=>{
      if (item.id === id){
        return {...item, completed:true};
      }else{
        return item;
      }
    }))
  }

  const changeText = (id, event) =>{
    setTodoList(todoList.map(item=>{
      if (item.id === id){
        return {...item, taskName:event.target.value};
      }else{
        return item;
      }
    }))
  }

  return (
    <div className="App">
      <div className='addTask'>
        <input className='input' onChange={changeInput}/>
        <button onClick={addTask}>Add task</button>
      </div>
      <div className='list'>
          {todoList.map(item=>{
            return (
              <div style={{backgroundColor: item.completed? 'green': 'yellow'}}>
                <h1>{item.taskName}</h1>
                <button onClick={()=>makeGreen(item.id)}>Change Color</button>
                <button onClick={()=>deleteItem(item.id)}>Delete</button>
                <input onChange={(event)=>changeText(item.id, event)} value={item.taskName}/>
              </div>
            )
          })}
      </div>
    </div>
  );
}


export default App;
