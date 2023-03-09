
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from "./Components/NavigationBar"
import SignIn from './Components/Login/SignIn';
import SignUp from './Components/Login/SignUp';
import Home from './Components/Home';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from './JS/actions/authactions';
import ProductList from './Components/Products/ProductList';
import AddProduct from './Components/Products/AddProduct';
import EditProduct from './Components/Products/EditProduct';


function App() {
  const dispatch= useDispatch()
 useEffect(() => {
   dispatch(getUser())
 }, [])
 
  
  return (
    <div className="App">
      <NavigationBar />
     <Routes>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<ProductList/>}/>
      <Route path="/add" element={<AddProduct/>}/>
      <Route path="/edit" element={<EditProduct/>}/>
     </Routes>
    </div>
  );
}

export default App;
