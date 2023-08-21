import start from "./start.jpg"
import {Link } from "react-router-dom"
import NavBar from "./NavBar"
import {getAuth,signOut} from "firebase/auth"
import {useNavigate,useLocation,Navigate } from "react-router-dom"
import {useEffect,useState} from "react";


function Start()
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
setUser("Welcome , "+u);

},[])
    function sayDrink() {
        alert('You select coffee!');
        nav("/drink");
      }

    function saypizza() {
        alert('You select pizza!');
        nav("/pizza");
      }
      function sayCake() {
        alert('You select cake!');
        nav("/cake");
      }
      function bck() {
        nav("/login");
      }
    return(
<>
<center class="start">
<NavBar/>


    <div class="sframe">
    <h1 class ="s" style={{fontFamily:"Sitka Text Semibold",fontSize:50,color:"#800000",}}>Pocket Cafe</h1>

    <button onClick={sayDrink} style={{color:"black",background:"#fdd5b1" , width:"50%" , height:"55%",fontSize:"70%" }}> Coffee </button>
    <br/><br/>
    <button onClick={saypizza} style={{color:"black",background:"#fdd5b1" , width:"50%" , height:"55%",fontSize:"70%" }}>  Pizza </button>
    <br/><br/>
    <button onClick={sayCake} style={{color:"black",background:"#fdd5b1" , width:"50%" , height:"55%",fontSize:"70%" }}>  Cake   </button>

    <br/><br/>
    /*<button onClick={bck} style={{color:"black",background:"#FF4F00" ,width:"35%" , height:"35%" ,fontSize:"70%"}}>Back</button>*/
    <br/><br/>
    </div>
</center>

</>


    );
}
export default Start;