import {Link} from "react-router-dom";

function NavBar()
{

const un=localStorage.getItem("un")
return(

<>
<center>
<div className="nav">
 
{(un==null) && <Link to="/login" >Login </Link>}
{(un==null) && <Link to="/signup" >SignUp </Link>}
{(un==null) &&<Link to="/ForgotPass" >Forgot Password </Link>}

{(un!=null) &&<Link to="/start" >Home</Link>}
{(un!=null) &&<Link to="/about" >About us</Link>}
{(un!=null) &&<Link to="/logout" >Logout</Link>}
{(un!=null) &&<Link to="/changepass" >Change Password</Link>}




</div>
</center>
</>

);


}
export default NavBar;