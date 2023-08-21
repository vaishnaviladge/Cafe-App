import {useState,useRef} from "react";
import {Link,useNavigate } from "react-router-dom"
import NavBar from "./NavBar"
function Cake()
{

const nav=useNavigate();

 const [name,setName] = useState("");
 const [phone,setPhone] = useState("");
 const [adr,setAdr] = useState("");
 const [choc,setChoc] = useState("");
 const [red,setRed] = useState("");
 const [black,setBlack] = useState("");
 const [coffe,setCoffe] = useState("");
 const [fruit,setFruit] = useState("");
 const [count,setCount]=useState("");

 const hName=(event)=>{setName(event.target.value);}
 const hPhone=(event)=>{setPhone(event.target.value);}
 const hAdr=(event)=>{setAdr(event.target.value);}
 
 
 const hChoc=(event)=>{setChoc(event.target.value)}
 const hRed=(event)=>{setRed(event.target.value)}
 const hBlack=(event)=>{setBlack(event.target.value)}
 const hCoffe=(event)=>{setCoffe(event.target.value)}
 const hFruit=(event)=>{setFruit(event.target.value)}
 const hCount=(event)=>{setCount(event.target.value)}
 
 const rName=useRef();
 
 const place = (event)=>{
    event.preventDefault();
    
 if((name.trim().length==0) || (!name.match(/^[A-Za-z ]+$/)))
 {
 alert("Invalid name")
 setName("");
 name.focus();
 rName.current.focus();
 return;
 }
 if(name.length<2)
 {
 alert("name must be more than 2 character")
 setName("");
 name.focus();
 rName.current.focus();
 return;
 }
 
 if(phone.trim().length==0)
 {
 alert("Invalid contact number")
 setPhone("");
 phone.focus();
 return;
 }
 if(!phone.match("[1-9]{1}[0-9]{9}"))
 {
 alert("phone no. should be 10 digits ");
 setPhone("");
 phone.focus();
 return;
 }
  if(adr.trim().length==0)
 {
 alert("Invalid address")
 setAdr("");
 adr.focus();
 return;
 }
 if (adr.length<10)
 {
  alert("address must be more than 10 character")
  setAdr("");
  adr.focus();
  return;
 }
  
    
 if(count.trim().length==0)
 {
 alert("please fill all details!")
 count.focus();
 setCount("");
 return;
 }
 let drink = "";
    if(choc) drink+="Choclate cake";
    if(red)      drink+= " Red velvet cake ";
    if(black)      drink+= " Black forest cake";
    if(coffe)  drink+=" Coffe cake";
    if(fruit)        drink+="Fruit cake";

    if (drink.length==0)
    {
     alert("please select atleast 1 cake!");
     return;
    }
    
    alert(name+" "+"Your order placed successfully !!");
    window.location.reload(false);
    }
    function back1() {
        nav("/start");
      }
return(

<>
<center>
<NavBar/>
<div class="pizza">
  <form class=" pframe" onSubmit={place}>
   <h2>Fill the Details:</h2>
   <input type="name" placeholder="Full Name" onChange={hName} style={{width: "60%" , height:"20%"}}/>
   <br/><br/>
   <input type="number" placeholder="Contact number" onChange={hPhone} style={{width: "60%" , height:"20%"}}/>
   <br/><br/>
   <input type="text" placeholder="Address" onChange={hAdr} style={{width: "60%" , height:"20%"}}/>
   <br/>
   <h2>Choose your cake</h2>

   <input type="checkbox" value="choc"  onChange={hChoc}/>Choclate cake
   <input type="checkbox" value="red "   onChange={hRed}/>Red velvet cake<br/>
   <input type="checkbox" value="black"    onChange={hBlack}/>Black forest cake<br/>
   <input type="checkbox" value="coffe"  onChange={hCoffe}/>Coffee cake
   <input type="checkbox" value="fruit"     onChange={hFruit}/>Fruit cake<br/>
   <h2>How much do you need ?</h2>
   <input type="number" placeholder="enter number" onChange={hCount} style={{width: "60%" , height:"20%"}}/>
   <br/><br/>
   <input type="submit" style={{color:"black",background:"#ff531a" ,width:"35%" , height:"35%" ,fontSize:"70%"}} value="place order"/>
   <br/><br/>
   <button onClick={back1} style={{color:"black",background:"#FF4F00" , width:"35%" , height:"35%" ,fontSize:"70%"  }}>Back</button>
    <br/><br/>
  </form>
    </div>

</center>



</>

);

}

export default Cake; 