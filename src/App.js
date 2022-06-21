import './App.css';
import { Routes, Route, } from "react-router-dom";
import Home from './Home/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import PrivateRoute from './authentication/PrivateRoute';
import Register from './components/Register';

function App() {
  return (
    <div className="App">


      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />


        <Route element={<PrivateRoute />}>
          <Route path="/blog" element={<Blog />} />
        </Route>


        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>


    </div>
  );
}

export default App;
