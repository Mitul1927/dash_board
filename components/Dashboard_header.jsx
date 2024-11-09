import React from 'react'
import "../static/Dashboard_header.css";
import Account from "../public/account.png"
const Dashboard_header = () => {
  return (
    <div className='dashboard-header'>
      Dashboard 
      <img src={Account} alt="" />
    </div>
  )
}

export default Dashboard_header
