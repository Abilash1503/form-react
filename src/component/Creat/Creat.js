import "./creat.css"
import { Link } from "react-router-dom"
import {FaFacebookF } from "react-icons/fa";
import {FaTwitter } from "react-icons/fa";
import {FaGithub } from "react-icons/fa";
import {FaGoogle } from "react-icons/fa";

const Create =()=>{
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
<label className="first">First Name</label>
<input type="text" className="first"/>
<label className="last">Last Name</label>
<input type="text" className="last"/>
    <label className="mail" >Email Address</label><br/>
    <input type="text" className="input"/><br/><br/><br/>
</div>
<div>
<table>
        <tr>
            <td >   
<label className="pas">Password</label><br/>
<input type="password" className="pas"/> <br/><br/><br/></td>
<td><label className="con">Conform password</label><br/>
<input type="password" className="con"/> <br/><br/><br/></td></tr></table>
    </div>
    
<div>
    <table>
        <tr>
            <td  className="ch" ><label>
        <input type="checkbox"className="check" />
        I accept the terms & conditions

      </label></td>
      <td> <button className="login-bnt" style ={{backgroundColor:"#e87e76", borderRadius: 10}}>Register</button></td>
        </tr>
    </table>

   
</div>
<br/><br/>
<p>This site is protected by reCAPTCHA and the Google<a href="link"> Privacy Policy</a> and <a href="link">Terms of Service apply.</a>
<hr/>

</p>
<p>
Have an account?
      <Link to="/"><a href="url">  Sign in!</a></Link></p>

    </div>
    )
}

export default Create