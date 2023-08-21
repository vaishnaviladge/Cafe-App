import NavBar from "./NavBar"
import {useState} from "react";
import {getAuth,updatePassword,onAuthStateChanged} from "firebase/auth"
import {useNavigate } from "react-router-dom"
import {useEffect} from "react";

function ChangePassword()
{


const nav=useNavigate();

const [pw1,setPw1] =useState("")
const [pw2,setPw2] =useState("")
const [ans,setAns] =useState("")

useEffect(()=>{

 const un=localStorage.getItem("un");
 if(un==null)
  nav("/login");
},[]);


const hPw1=(event)=>{setPw1(event.target.value)}
const hPw2=(event)=>{setPw2(event.target.value)}

const save=(event)=>
{
event.preventDefault()
if(pw1==pw2)
{
const auth=getAuth()
onAuthStateChanged(auth,(user)=>{
updatePassword(user,pw1)
.then(res=>{
localStorage.clear();
nav("/login")
})
.catch(err=>setAns("issues " +err))
})
}
else
{
setAns("password did not match")
}
}


return(

<>
<center>
<NavBar/>

 <form onSubmit={save} className="frame4" >
 <h1 >Change Password</h1>
    <input type="password" placeholder="enter password" onChange={hPw1} style={{color:"black",borderStyle:"groove",width: "60%" , height:"20%"}}/>
  <br/><br/>
    <input type="password" placeholder="enter confirm  password" onChange={hPw2} style={{color:"black",borderStyle:"groove",width: "60%" , height:"20%"}}/>
  <br/><br/>

 <input type="submit" value="Change Password" style={{color:"black",background:"#FF4F00" ,width:"45%" , height:"35%" ,fontSize:"70%"}}/>
 <br/><br/>
</form>
<h1>{ans}</h1>
</center>

 
</>

);


}
export default ChangePassword;