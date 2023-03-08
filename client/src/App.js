
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from "./Components/NavigationBar"
import SignIn from './Components/Login/SignIn';
import SignUp from './Components/Login/SignUp';
import Home from './Components/Home';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from './JS/actions/authactions';


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
     </Routes>
    </div>
  );
}

export default App;
