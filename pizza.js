import {useState,useRef} from "react";
import {Link,useNavigate } from "react-router-dom"
import NavBar from "./NavBar"
 function Pizza()
 {
    const nav=useNavigate();

 const [name,setName] = useState("");
 const [phone,setPhone] = useState("");
 const [adr,setAdr] = useState("");
 const [size,setSize] = useState("large");
 const [tomato,setTomato] = useState("");
 const [onion,setOnion] = useState("");
 const [mash,setMash] = useState("");
 const [cap,setCap] = useState("");
 
 const hName=(event)=>{setName(event.target.value);}
 const hPhone=(event)=>{setPhone(event.target.value);}
 const hAdr=(event)=>{setAdr(event.target.value);}
 const hSize=(event)=>{setSize(event.target.value);}
 
 const hTomato=(event)=>{setTomato(event.target.value)}
 const hOnion=(event)=>{setOnion(event.target.value)}
 const hMash=(event)=>{setMash(event.target.value)}
 const hCap=(event)=>{setCap(event.target.value)}
 
 const rName=useRef();

 const place = (event)=>{
 event.preventDefault();
 
if(name.trim().length==0) 
{
alert("Invalid name")
name.focus();
setName("");
rName.current.focus();
return;
}
if(!name.match(/^[A-Za-z ]+$/))
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
 name.focus();
 setName("");
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
  let tops = "";
  if(tomato) tops+=" Tomato ";
  if(onion)  tops+= " Onion ";
  if(mash)   tops+= " Mashroom ";
  if(cap)    tops+=" Capsicum";
  
  if (tops.length==0)
  {
   alert("please select atleast 1 topping!");
   return;
  }
  alert(name+" "+"Your order placed successfully !!")
  window.location.reload(false);
 
 }
 function back() {
    nav("/start");
  }
 
    return(

<>

<center >
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
   <h2>Select Pizza Size</h2>
   <input type="radio" name="p" value="small" onChange={hSize} checked={size=="small"?true:false}/> Small
   <input type="radio" name="p" value="medium" onChange={hSize} checked={size=="medium"?true:false}/> Medium
   <input type="radio" name="p" value="large" defaultChecked={true} onChange={hSize} checked={size=="large"?true:false}/> Large
   <br/>

   <h2>Select toppings</h2>
   <input type="checkbox" value="tomato"  onChange={hTomato}/>Tomato
   <input type="checkbox" value="onion"   onChange={hOnion}/>Onion
   <input type="checkbox" value="mash"    onChange={hMash}/>Mashroom
   <input type="checkbox" value="cap"     onChange={hCap}/>Capsicum
   <br/><br/><br/>

   <input type="submit"  style={{color:"black",background:"#ff531a" ,width:"35%" , height:"35%" ,fontSize:"70%"}} value="place order" />
   <br/><br/>
   <button onClick={back} style={{color:"black",background:"#FF4F00" , width:"35%" , height:"35%" ,fontSize:"70%"}}>Back</button>
    <br/><br/>
  </form>
    </div>

</center>

</>


    );

}
export default Pizza;