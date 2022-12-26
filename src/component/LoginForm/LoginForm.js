import { Link } from "react-router-dom"
import "./loginForm.css"
import {FaFacebookF } from "react-icons/fa";
import {FaTwitter } from "react-icons/fa";
import {FaGithub } from "react-icons/fa";
import {FaGoogle } from "react-icons/fa";


const LoginForm=()=>{
 
    return(
    <div className="container">
        <img src="https://avatars2.githubusercontent.com/u/58701512?s=280&v=4"></img>
<h1>Sign up on Start Bootstrap</h1>
<div className="content">
    <h4>Join our community of designers and developers and manage your <br/>purchases, favorite themes and snippets, comments, and more!</h4>

</div>
<div className="button">
<button className="twi"> <FaTwitter/> Login with twitter</button>
<button className="fb"> <FaFacebookF/>Login with facebook</button>
<button className="google"> <FaGoogle/> Login with Google</button>
<button className="github"><FaGithub/> Login with GitHub</button><br/><br/>
<hr/>
</div>

<div><br/><br/>
    <label className="mail" >Email Address</label><br/>
    <input type="text" className="input"/><br/><br/><br/>
</div>
<div>
    <label className="pass">Password</label>

    <input type="password" className="input"/><br/><br/><br/>
    </div>
    
    <div className="link">
  <Link to="forget">
<a href="link">forget password</a>
</Link>
<br/>

</div>
<div>
    <table>
        <tr>
            <td ><label >
        <input type="checkbox"className="check" />
        Remember Password
      </label></td>
      <td> <button className="login-bnt" style ={{backgroundColor:"#e87e76", borderRadius: 10}}>Login</button></td>
        </tr>
    </table>

   
</div>
<br/><br/>
<p>This site is protected by reCAPTCHA and the Google<a href="link"> Privacy Policy</a> and <a href="link">Terms of Service apply.</a>
<hr/>

</p>
<p>New user?

      <Link to="create"><a href="url"> Create an account!</a></Link></p>

    </div>
    )
}

export default LoginForm
