import './App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Profile from './pages/Profile';
import Navbar from './Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useState, createContext } from 'react';
export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState('Shahroze')
  return (
    <div className="App">
      <AppContext.Provider value={{ username, setUsername}}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home username={username}/>}/>
            <Route path='/menu' element={<Menu />}/>
            <Route path='/profile' element={<Profile username={username} setUsername={setUsername}/>}/>
            <Route path='*' element={<>Page not found</>}/>
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}


export default App;
