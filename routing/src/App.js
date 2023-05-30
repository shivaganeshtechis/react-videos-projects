import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Menu from './components/Menu';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<Home/>} />
        <Route path = '/contact' element = {<Contact/>} />
        <Route path = '/menu' element = {<Menu/>} />
      </Routes>
    </Router>
  );
}

export default App;
