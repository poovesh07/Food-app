import React, { useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/frontend_assets/assets'

const Loginpopup = ({ setshowLogin }) => {

    const [currstate, setcurrstate] = useState("Sign Up")

    return (
        <div className='login-popup'>
            <div className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currstate}</h2>
                    <img onClick={() => setshowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currstate === "Login" ? <></> : <input type="text" placeholder='Your name' required />}
                    <input type="email" placeholder='Your email' required />
                    <input type="password" placeholder='password' />
                </div>
                <button>{currstate === "Sign Up" ? "Create account" : "Login"}</button>
                <div className='login-popup-condtion'>
                    <input type="checkbox" required />
                    <p>By continuing,i agree to the terms of use & privacy policy.</p>
                </div>
                {currstate === "Login" ? <p> Create a new account? <span onClick={()=>setcurrstate("Sign Up")}>Click here</span></p>

                   : <p>Already have an account? <span onClick={()=>setcurrstate("Login")}>Login here</span></p>
            
            }



        </div>
    </div >
  )
}

export default Loginpopup