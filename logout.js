import NavBar from "./NavBar"
import {getAuth,signOut} from "firebase/auth"
import {useNavigate,useLocation,Navigate } from "react-router-dom"
import {useEffect,useState} from "react";

function Logout()
{

const [user,setUser]=useState();
const nav=useNavigate()

const lo=(event)=>{

event.preventDefault();

const auth=getAuth();
localStorage.clear();
signOut(auth)
.then(res=>nav("/login"))
.catch(err=>console.log(err))

}
const loc=useLocation();

useEffect(()=>{
let u=localStorage.getItem("un")
if(u==null)
 nav("/login");
else
setUser(u+" you want to logout ?");

},[])

return(

<>
<center>
<NavBar/>


<form onSubmit={lo} className="frame5">
    <br/>
<h1>{user}</h1>
<br/>
<input type="submit" value="Logout"/>
<br/><br/>
</form> 
</center>
</>

);


}
export default Logout;