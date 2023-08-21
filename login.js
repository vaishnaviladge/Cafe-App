
import {useState} from "react";
import {getAuth,signInWithEmailAndPassword} from "firebase/auth";
import {Link, useNavigate } from "react-router-dom";
import user3 from "./user3.png";
import fb from "./fb.png";
import ins from "./ins.png";
import twit from "./twit.png";
import cafe from "./cafe.png";
import {useEffect} from "react";
import NavBar from "./NavBar"
function Login()
{

const nav=useNavigate();
useEffect(()=>{

 const un=localStorage.getItem("un");
 if(un!=null)
  nav("/start");
},[]);

const [un,setUn] =useState("")
const [pw,setPw] =useState("")

const hUn=(event)=>{setUn(event.target.value)}
const hPw=(event)=>{setPw(event.target.value)}


const check=(event)=>
{
event.preventDefault()
const auth=getAuth()
signInWithEmailAndPassword(auth,un,pw)
.then(res=>{
localStorage.setItem("un",un);
alert("login successfully");
nav("/start")
})
.catch(err=>alert("Invalid Username or Password !"))
}
return(

<>
<center>
<NavBar/>
<div >
  
 <form onSubmit={check} class="frame">
  <br/>
 <img src={user3} className="user"/>
 <h3><strong><i>Sign In</i></strong></h3>
 <img src={fb} className="social" /><img src={ins} className="social" /><img src={twit} className="social" />
 <br/><br/>
  <input type="email" placeholder="Email" onChange={hUn} style={{color:"black",borderStyle:"groove" , width: "60%" , height:"20%"}} />
  <br/><br/>  
  <input type="password" placeholder="Password" onChange={hPw} style={{color:"black",borderStyle:"groove",width: "60%" , height:"20%"}}/>
  <h1  ><Link to="/forgotpass" style={{ fontSize: 20 }} > Forgot Password </Link></h1>
  <br/>
 <input type="submit" value="SIGN IN" style={{color:"black",background:"#FF4F00" , width:"35%" , height:"35%" ,fontSize:"70%"}} />
 <h3 style={{color:"black",fontSize:20}}>Don't have an account?<Link to="/signup" style={{fontSize:20 }} > SIGN UP </Link></h3>
<br/>
</form>
</div>


</center>
</>
);

}
export default Login;