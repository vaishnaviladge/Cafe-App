import {useState,useRef} from "react";
import {Link,useNavigate } from "react-router-dom"
import NavBar from "./NavBar"

function About()
{
    const nav=useNavigate();
return(
<>
<center>
<NavBar/>
<h1 style={{color:"red",fontSize:30}}> About Us </h1>
<p style={{fontSize:20,font:"Calibri" , color:"orangered"}}>
Our main goal since we began has remained basic: acquaint our clients with the domains we specifically purchase our extraordinary-tasting coffee from, broil the beans with consideration, and make astounding coffee increasingly available through our bistros and our site.<br></br> The coffee we cook is the coffee we like to drink, and we trust you like it as well.
At ‘Pocket Coffe’ Roasters, we pursue a straightforward arrangement of convictions.
<br></br>
<b>Straightforwardness is significantly more than exactly where we get our beans from.</b><br></br>
The primary thing we did when we began our organization was to feature our honor-winning ranches.
This thought of straightforwardness naturally advanced to the manner in which we worked in different territories as well – our baristas are constantly present to talk about blending tips, our client benefit group is there to walk you through your coffee questions, and our broiling group to demonstrate to you how they function.
<br></br><b>A culture of consistent learning is the way to continue driving coffee forward.</b><br></br>
We are reliably inquiring about, testing, and executing best practices all throughout our business to increase present expectations. Making refractometers fundamental for our bistro blending.
Holding progressed tangible learnings for junior roasters and exploring different avenues regarding handling at the ranch level are only a portion of the manners in which our profoundly gifted group is continually developing the manner in which Indian coffee is dealt with, experienced, or imparted.
</p>
</center>

</>

);

}
export default About;
