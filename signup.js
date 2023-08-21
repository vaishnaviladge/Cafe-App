
import {useState} from "react";
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth"
import signup from "./signup.png"
import success from "./success.png"
import {Link,useNavigate } from "react-router-dom"
import NavBar from "./NavBar"
import {useEffect} from "react";


function Sign()
{
const nav=useNavigate();

useEffect(()=>{
 const un=localStorage.getItem("un");
 if(un!=null)
  nav("/Start");
},[]);
const [un,setUn] =useState("")
const [pw1,setPw1] =useState("")
const [ans,setAns]=useState("")
const [pw2,setPw2] =useState("")

const hUn=(event)=>{setUn(event.target.value)}
const hPw1=(event)=>{setPw1(event.target.value)}
const hPw2=(event)=>{setPw2(event.target.value)}

const save=(event)=>
{
event.preventDefault()
if ((pw1.length<8 ) || (pw2.length<8 ))
{
  setAns("password minimum required length is 8!")
}
else{

if(pw1==pw2)
{
const auth=getAuth()
createUserWithEmailAndPassword(auth,un,pw1)
.then(res=>{
  alert("Sign up successfully")
  nav("/login")})
.catch(err=>setAns("username already in use  !"))
}
else
{
setAns("password did not match !")
}
}
}
return(
<>
<center>
 <NavBar/>
  <div >
 <form onSubmit={save} className="frame2">
  <br/>
    <img src={signup} width="90"/>
  <h1 class="hd" style={{fontfamily:"Book Antiqua",fontSize:40}}><i><strong>Sign Up</strong></i></h1>
    <input type="email" placeholder=" Email" onChange={hUn} style={{color:"black",borderStyle:"groove",width: "60%" , height:"20%"}}/>
  <br/><br/>
    <input type="password" placeholder="Password" onChange={hPw1} style={{color:"black",borderStyle:"groove",width: "60%" , height:"20%"}}/>
  <br/><br/>
    <input type="password" placeholder="Confirm  password" onChange={hPw2} className="input::placeholder" style={{color:"black",borderStyle:"groove",width: "60%" , height:"20%"}}/>
  <br/>
  <h5 style={{color:"black",fontSize:20}}>Already have an account?<Link to="/login"  style={{fontSize:20 }} >LOGIN</Link></h5>
    <input type="submit" value="SignUp" style={{color:"black",background:"#FF4F00" , width:"40%" , height:"55%",fontSize:"70%" }}/>
<br/><br/>

</form>
<h1>{ans}</h1>
</div>
</center>
</>
);
}
export default Sign;