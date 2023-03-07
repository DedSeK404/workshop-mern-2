
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ButtonAppBar from './Components/Home';
import SignIn from './Components/Login/SignIn';
import SignUp from './Components/Login/Signup';

function App() {
  return (
    <div className="App">
      <ButtonAppBar/>
     <Routes>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
     </Routes>
    </div>
  );
}

export default App;
