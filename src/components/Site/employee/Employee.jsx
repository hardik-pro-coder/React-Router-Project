import React from 'react'
import { useNavigate } from 'react-router-dom';

const Employee = () => {

  const navigate = useNavigate();

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
            <div style={{ backgroundColor: 'black', color: 'white', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', width: '60%', height: '50px', margin: '6% 0', fontSize: '16px', borderRadius: '5px' }}>
              <h1>Employee</h1>
            </div>
          </div>
          <div className="sidebar-content">

            <div style={{ backgroundColor: 'black', color: 'white', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', width: '60%', height: '50px', margin: '20% 0', fontSize: '25px', borderRadius: '5px' }}>
              <h2>Content</h2>
            </div>

            <br /><br /><br />

            <div className="sidebar-content-header">
              <h2>Leave Request</h2>
            </div>
          </div>

          <div className="logout">
            <button onClick={clearRoles}>Logout</button>
          </div>
        </div>

        {/* Dashboard */}
        <div className="dashboard">

          <div className="dashboard-header-box">
            <div style={{ backgroundColor: 'black', color: 'white', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', width: '80%', height: '50px', margin: '3% 0', fontSize: '20px', borderRadius: '5px' }}>
              <h1>Dashboard</h1>
            </div>
          </div>

          <div style={{ backgroundColor: '#DBE2EF', width: '80%', height: '55vh', margin: 'auto', marginTop: '5%', padding: '5%', borderRadius: '10px' }}>
            <div style={{ backgroundColor: 'black', width: '60%', height: '55vh', margin: 'auto', borderRadius: '10px' }}>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Employee;