import './App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Profile from './pages/Profile';
import Navbar from './Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const client = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/menu' element={<Menu />}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='*' element={<>Page not found</>}/>
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}


export default App;
