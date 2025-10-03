import React, { useState } from 'react'
import './Form.css'
import { useNavigate } from 'react-router-dom';


const Form = () => {
    const navigate = useNavigate();

    const [input, setInput] = useState('');
    const [path, setPath] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value)
    };
    const handlePathChange = (e) => {
        setPath(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const clearRoles = () => {
            localStorage.removeItem('role');
            localStorage.removeItem('abc');
        };
        clearRoles();

        if (path === 'admin') {
            localStorage.setItem('role', 'admin');
            localStorage.setItem('abc', true);
            navigate('/dashboard');
        } else if (path === 'hr') {
            localStorage.setItem('role', 'hr');
            localStorage.setItem('abc', true);
            navigate('/dashboard');
        } else if (path === 'employee') {
            localStorage.setItem('role', 'employee');
            localStorage.setItem('abc', true);
            navigate('/dashboard');
        } else {
            alert('Please enter your name or select a role first!');
        }
    };
    return (
        <>
            <div className='form-main-div'>
                <div className="form-card">
                    <form className='form-main'>
                        <div style={{ backgroundColor: 'black', color: 'white', boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', width: '100%', height: '50px', margin: '5% 0', fontSize: '20px', borderRadius: '5px' }}>
                            <h2>Register!</h2>
                        </div>
                        <input type="text" placeholder='Enter Your Name' value={input} onChange={handleInputChange} />
                        <select value={path} onChange={handlePathChange}>
                            <option value=''>Select Your Role</option>
                            <option value='admin'>Admin</option>
                            <option value='hr'>HR</option>
                            <option value='employee'>Employee</option>
                        </select>
                        <button onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form;