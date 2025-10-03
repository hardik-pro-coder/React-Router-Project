import React, { useState } from 'react'
import './Admin.css'
import { useNavigate } from 'react-router-dom'

// Icons Images Import
import order from '../../../assets/admin-dashboard-contentB-box1-a.gif'
import sales from '../../../assets/admin-dashboard-contentB-box1-b.gif'
import visit from '../../../assets/admin-dashboard-contentB-box1-c.gif'
import rate from '../../../assets/admin-dashboard-contentB-box1-d.gif'
import graph from '../../../assets/admin-dashboard-contentB-box2.jpg'

const Admin = () => {
  const navigate = useNavigate();

  // Employee Button Functionality
  const [employee, setEmployee] = useState(false);

  const handleDisplayEmployee = () => {
    setEmployee(employeeData => !employeeData);
  }

  // Leaves Button Functionality
  const [leaves, setLeaves] = useState(false);

  const handleDisplayLeaves = () => {
    setLeaves(leavesData => !leavesData);
  }

  // Calender Button Functionality
  const [callender, setCallender] = useState(false);

  const handleDisplayCalender = () => {
    setCallender(callenderData => !callenderData);
  }

  const clearRoles = () => {
    navigate('/');
    localStorage.removeItem('role');
    localStorage.removeItem('abc');
  };

  return (
    <div>
      <div className="main-site">
        <div className="sidebar">

          <div className="sidebar-header">
            <div style={{ backgroundColor: 'black', color: 'white', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', width: '60%', height: '50px', margin: '6% 0', fontSize: '20px', borderRadius: '5px' }}>
              <h1>Admin</h1>
            </div>
          </div>

          <div className="sidebar-content">

            <div style={{ backgroundColor: 'black', color: 'white', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', width: '60%', height: '50px', margin: '20% 0', fontSize: '25px', borderRadius: '5px' }}>
              <h2>Content</h2>
            </div>

            <br /><br /><br />

            <div onClick={handleDisplayEmployee} className="sidebar-content-header">
              <h2>Employees</h2>
            </div>

            <br /><br /><br />

            <div onClick={handleDisplayLeaves} className="sidebar-content-header">
              <h2>Leaves</h2>
            </div>

            <br /><br /><br />

            <div onClick={handleDisplayCalender} className="sidebar-content-header">
              <h2>Calender</h2>
            </div>

          </div>

          <div className="logout">
            <button onClick={clearRoles}>Logout</button>
        </div>
      </div>

      {/* Dashboard Component */}
      <div className="dashboard">

        <div className="dashboard-header-box">
          <div style={{ backgroundColor: 'black', color: 'white', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', width: '80%', height: '50px', margin: '3% 0', fontSize: '20px', borderRadius: '5px' }}>
            <h1>Dashboard</h1>
          </div>
        </div>

        <div className="dashboard-content">

          <div className="dashboard-contentA">

            {
              employee == true ? (
                <div className="dashboard-contentA-box1">
                  <div>
                    <h1>Employees</h1>
                  </div>
                </div>
              ) : leaves == true ? (
                <div className="dashboard-contentA-box1">
                  <div>
                    <h1>Leaves</h1>
                  </div>
                </div>
              ) : callender == true ? (
                <div className="dashboard-contentA-box1">
                  <div>
                    <h1>Callender</h1>
                  </div>
                </div>
              ) : <div className="dashboard-contentA-box1">

              </div>
            }

            {
              employee == true ? (
                <div className="dashboard-contentA-box2">

                  <div>
                    <ol>
                      {/* <li>Hardik Ji</li> */}
                      <li>Mr. Parth</li>
                      <li>Mr. Mayank</li>
                      <li>Mr. Kartik</li>
                      <li>Mr. Arun</li>
                      <li>Mr. Rishav</li>
                      <li>Mr. Pranav</li>
                      <li>Mr. Pragyan</li>
                      <li>Mr. M.Kaim</li>
                      <li>Mr. Pramod</li>
                      <li>Mr. Aneesh</li>
                      <li>Mr. Dhruv</li>
                      <li>Mr. Aakash</li>
                      <li>Mr. Lalit</li>
                      <li>Mr. Akhilesh</li>
                      <li>Mr. Vikas</li>
                    </ol>
                  </div>

                </div>
              ) :
                <div className="dashboard-contentA-box2">

                </div>
            }

          </div>

          <div className="dashboard-contentB">
            <div className="dashboard-contentB-box1">

              <div className="dashboard-contentB-box1-a">
                <img src={order} />
                <div>
                  <h1>Total Order</h1>
                </div>
              </div>
              <div className="dashboard-contentB-box1-b">
                <img src={sales} />
                <div>
                  <h1>Total Sales</h1>
                </div>
              </div>
              <div className="dashboard-contentB-box1-c">
                <img src={visit} />
                <div>
                  <h1>Total Visits</h1>
                </div>
              </div>
              <div className="dashboard-contentB-box1-d">
                <img src={rate} />
                <div>
                  <h1>Bounce Rate</h1>
                </div>
              </div>

            </div>

            <div className="dashboard-contentB-box2">
              <img src={graph} />
            </div>

          </div>

        </div>

      </div>
    </div>
    </div >
  )
}

export default Admin;