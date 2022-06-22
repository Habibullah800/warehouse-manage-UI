import './App.css';
import { Routes, Route, } from "react-router-dom";
import Home from './Home/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import PrivateRoute from './authentication/PrivateRoute';
import Register from './components/Register';
import ManageInventory from './components/inventory/ManageInventory';
import AddItem from './components/AddItem/AddItem';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from './components/NotFound';

import MyItems from './components/myitem/MyItems';

function App() {
  return (
    <div className="App">


      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />


        <Route element={<PrivateRoute />}>
          <Route path="/blog" element={<Blog />} />
          <Route path="/manageinventory" element={<ManageInventory />} />
          <Route path="/additem" element={<AddItem />} />
          <Route path="/myitem" element={<MyItems />} />

        </Route>


        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
