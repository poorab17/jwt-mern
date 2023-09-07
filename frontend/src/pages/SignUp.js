import { useSignUp } from "../hooks/useSignUp";
const { useState } = require("react")


const Signup =()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    
    const {signup,error,isLoading}=useSignUp();

    const handleSubmit = async (e)=>{
      e.preventDefault();
      await signup(email,password)
     // console.log(email,password)
    }


    return(
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Signup</h3>
            <label>Email:</label>
            <input type="email" 
             onChange={(e)=>setEmail(e.target.value)}
             value={email}></input>
              <label>password:</label>
            <input type="password" 
             onChange={(e)=>setPassword(e.target.value)}
             value={password}></input>

            
             <button disabled={isLoading}>SignUp</button>
             {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Signup;