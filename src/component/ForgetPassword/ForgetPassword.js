import { Link } from "react-router-dom"
import "./forgetPassword.css"



const ForgetPassword =()=>{
    return(
        <div className="ForgetPassword">
            <div className="container">
                <div className="rest">
                    <h2>Reset Your Password</h2>
                </div>
                <div className="p">
               <h4>Enter your email address below and we'll send you a link to reset your password.</h4> 

                </div>
                <hr/>
                
                <p className="mail">Email address</p>
                <input type="text" className="input"/><br/><br/>
                <div className="login-bnt">
                    <button style={{ backgroundColor: "brown"}}>sent password rest link</button>

                </div>
                <hr/>
                <div>
                <p>New user?

        <a href="http://localhost:3000/create"> Create an account!</a></p>
      
</div>
            </div>
        </div>
    )
}
export default ForgetPassword