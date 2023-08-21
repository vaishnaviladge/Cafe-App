import {useState,useRef} from "react";
import {Link,useNavigate } from "react-router-dom"
import NavBar from "./NavBar"
function Drink()
{

const nav=useNavigate();

 const [name,setName] = useState("");
 const [phone,setPhone] = useState("");
 const [adr,setAdr] = useState("");
 const [cappucinno,setCappucinno] = useState("");
 const [latte,setLatte] = useState("");
 const [mocha,setMocha] = useState("");
 const [americano,setAmericano] = useState("");
 const [hot,setHot] = useState("");
 const [count,setCount]=useState("");

 const hName=(event)=>{setName(event.target.value);}
 const hPhone=(event)=>{setPhone(event.target.value);}
 const hAdr=(event)=>{setAdr(event.target.value);}
 
 
 const hCap=(event)=>{setCappucinno(event.target.value)}
 const hLat=(event)=>{setLatte(event.target.value)}
 const hMoc=(event)=>{setMocha(event.target.value)}
 const hAme=(event)=>{setAmericano(event.target.value)}
 const hHot=(event)=>{setHot(event.target.value)}
 const hCount=(event)=>{setCount(event.target.value)}
 
 const rName=useRef();
 const place = (event)=>{
    event.preventDefault();
    
 if((name.trim().length==0) || (!name.match(/^[A-Za-z ]+$/)))
 {
 alert("Invalid name")
 name.focus();
 setName("");
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
 
 if(phone.length==0)
 {
 alert("Invalid contact number")
 phone.focus();
 setPhone("");
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
 adr.focus();
 setAdr("");
 return;
 }
 if (adr.length<10)
 {
  alert("address must be more than 10 character")
  adr.focus();
  setAdr("");
  return;
 }
 
    let drink = "";
    if(cappucinno) drink+="Cappucinno";
    if(latte)      drink+= " latte ";
    if(mocha)      drink+= " Mocha";
    if(americano)  drink+=" Americano";
    if(hot)        drink+=" Hot Choclate";
    if (drink.length==0)
 {
    alert("please select atleast 1 drink")
    return;
 }
 if(count.trim().length==0)
 {
 alert("please fill all details!")
 count.focus();
 setCount("");
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
   <h2>Choose your drink</h2>

   <input type="checkbox" value="cappucinno"  onChange={hCap}/>Cappucinno
   <input type="checkbox" value="latte "   onChange={hLat}/>Latte
   <input type="checkbox" value="mocha"    onChange={hMoc}/>Mocha<br/>
   <input type="checkbox" value="americano"  onChange={hAme}/>Americano
   <input type="checkbox" value="hot"     onChange={hHot}/>Hot Choclate<br/>
   <br/>
   <h2>How much do you need ?</h2>
   <input type="number" placeholder="enter number" onChange={hCount} style={{width: "60%" , height:"20%"}}/>
   <br/><br/>
   <input type="submit" style={{color:"black",background:"#ff531a" ,width:"35%" , height:"35%" ,fontSize:"70%"}} value="place order"/>
   <br/><br/>
   <button onClick={back1} style={{color:"black",background:"#FF4F00" , width:"35%" , height:"35%" ,fontSize:"70%"}}>Back</button>
    <br/><br/>
  </form>
    </div>

</center>



</>

);

}

export default Drink; 