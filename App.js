import logo from './logo.svg';
import './App.css';
import Login from "./login.js"
import Signup from "./signup.js"
import Home from "./home.js"
import ForgotPassword from './ForgotPassword';
import Pizza  from './pizza';
import Drink from "./drink"
import Start from "./start"
import Cake from "./cake"
import About from "./about";
import Logout from './logout';
import ChangePassword from './ChangePassword';
import {app} from "./firebase";
import NavBar from './NavBar';
import {BrowserRouter ,Routes,Route,Navigate} from "react-router-dom";

function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
     <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/forgotpass" element={<ForgotPassword/>}/>
      <Route path="/changepass" element={<ChangePassword/>}/>
      <Route path="/about" element={<About />}/>
      <Route path="/drink" element={<Drink/>}/>
      <Route path="/pizza" element={<Pizza/>}/>
      <Route path="/cake" element={<Cake/>}/>
      <Route path="/start" element={<Start/>}/>
      <Route path="/logout" element={<Logout/>}/>

      <Route path="*" element={<Navigate to="/logout"/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
