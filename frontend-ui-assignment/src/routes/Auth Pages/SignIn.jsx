import React from 'react'
import { Link } from 'react-router-dom';
import "../../styles/auth.css"
const SignIn = () => {
  return (
    <section>
      <div className="auth-container sign-in-padding">
        <div className='auth-sub-container'>
          <div className='auth-content flex-column flex-align-items-center flex-justify-content-center gap-medium'>
          <h1><i>Helpdesk System</i></h1>
          <div className='input-container flex-column gap-small'>
            <input type="text" placeholder='Username'/>
            <input type="password" placeholder='Password' />
          </div>
          <button className='auth-btn sign-in-btn' >Sign In</button>
          <div className='flex-row flex-space-between flex-align-items-center gap-xlarge'>
          <Link to="/forgotpassword" className='text-decor-none'> <small className='forgot-password'>Forget password</small></Link> 
           <Link to="/signup" className='text-decor-none'> <p>Sign Up</p></Link>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export {SignIn};