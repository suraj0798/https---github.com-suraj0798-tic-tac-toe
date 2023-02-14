import logo from './logo.svg';
import './App.css';
import Signup from './components/signup/Signup';
import Homepage from './components/homepage/Homepage';
import Login from './components/login/Login';
import {Routes,Route} from 'react-router-dom';
import Startpage from './components/startpage/Startpage';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>    
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/startpage" element={<Startpage/>}></Route>
        </Routes>
        
    </div>
  );
}

export default App;
