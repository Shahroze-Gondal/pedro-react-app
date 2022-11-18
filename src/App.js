import './App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Profile from './pages/Profile';
import Navbar from './Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/menu' element={<Menu />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='*' element={<>Page not found</>}/>
        </Routes>
      </Router>
    </div>
  );
}


export default App;
