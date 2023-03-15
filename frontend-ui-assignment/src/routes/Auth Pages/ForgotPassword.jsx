import React from 'react'
import { Link } from 'react-router-dom';
import "../../styles/auth.css"

const ForgotPassword = () => {
  return (
    <section>
    <div className="auth-container forgot-password-padding">
      <div className='auth-sub-container '>
        <div className='auth-content flex-column flex-align-items-center flex-justify-content-center gap-medium inner-padding'>
       
        <p className='text-center'>Don't worry, Enter your email below and we will send you a link to change password</p>
        <div className='input-container flex-column gap-small'>
          <input type="email" placeholder='Email' />
        </div>
        <button className='auth-btn sign-up-btn' >Sign Up</button>
        <Link to="/signin" className='text-decor-none'> <button className='auth-btn sign-in-btn' >Sign In</button> </Link>
       
      </div>
      </div>
    </div>
  </section>
  )
}

export {ForgotPassword};