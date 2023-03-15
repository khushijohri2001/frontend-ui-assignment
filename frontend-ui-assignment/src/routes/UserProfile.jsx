import { Rating } from '@mui/material'
import React from 'react'
import { FaEdit, FaUserCircle } from 'react-icons/fa'
import { Footer, Menu, Navbar } from '../components'

const UserProfile = () => {
  return (
    <div>
    <Navbar />
    <div className="flex-row">
      <Menu  />
      <div className="flex-column">
        <div className="content-container flex-column  gap-large">
          <p className="size-heading">User Profile</p>
          <div className='user-content flex-row gap-large'>
            <div className='display-user-profile flex-column flex-space-between parent-position'>
                <FaUserCircle size={100} className="margin-left"/>
                <div>
                    <p>Username</p>
                    <p>Contact Number</p>
                    <p>Email</p>
                    <p>Department</p>
                </div>
                <FaEdit size={25} className="child-position edit-btn"/>
            </div>
            <div className='flex-column gap-small feedback-container flex-align-items-center'>
                <small>Give Your Feedback</small>
                <input type="text" placeholder='[Lorem Ipsum]' />
                <Rating name="read-only" value={0} max={6} readOnly />
                <button className="submit-btn feedback-btn">Submit Feedback</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </div>
  )
}

export {UserProfile}