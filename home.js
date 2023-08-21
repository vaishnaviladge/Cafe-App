import React from "react";
import {Link} from "react-router-dom";

function Home()
{
return(

<>
<center>
<h1> Home page </h1>
 <Link to="/login" >Login</Link>
 <br/><br/>
 <Link to="/signup">Signup</Link>
 <Link to="/forgotpass">Forgot password</Link>
 </center>
</>

);

}
export default Home;