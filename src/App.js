import './App.css';
import { Routes, Route, } from "react-router-dom";
import Home from './Home/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">


      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>


    </div>
  );
}

export default App;
