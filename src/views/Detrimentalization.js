import React, { useState } from 'react';
import './Detr.css'; // Import your CSS file for styling

const fakeUsers = [
  {
    id: 1,
    role: 'admin',
    fullname: 'AdminN',
    icon: 'admin-icon.png',
    email: 'admin@example.com',
    address: 'Admin Address',
  },
  {
    id: 2,
    role: 'user',
    fullname: 'quocnhu',
    icon: 'user-icon.png',
    email: 'user@example.com',
    address: 'User Address',
  },
  // Add more fake users as needed
];

const Detr = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [usernameInput, setUsernameInput] = useState('');

  const handleLogin = () => {
    // case-insensitive login
    // const user = fakeUsers.find((u) => u.fullname.toLowerCase() === usernameInput.toLowerCase()); 
    //case-sensitive login
    const user = fakeUsers.find((u) => u.fullname === usernameInput);
    if (user) {
      setLoggedInUser(user);
      setUsernameInput('');
    } else {
      alert('User not found.');
    }
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <div className="app-container">
      <h1>User Authentication and Decentralization Example</h1>
      {loggedInUser ? (
        <div>
          <h2>Welcome, {loggedInUser.fullname}!</h2>
          <img src={loggedInUser.icon} alt="User Icon" />
          <p>Email: {loggedInUser.email}</p>
          <p>Address: {loggedInUser.address}</p>
          {loggedInUser.role === 'admin' ? (
            <div>
              <h3>Dashboard</h3>
              <p>This is the admin dashboard.</p>
            </div>
          ) : (
            <p>You are an ordinary user without access to the dashboard.</p>
          )}
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="login-box">
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Enter your username"
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          <p>Available users: Admin User, Ordinary User</p>
        </div>
      )}
    </div>
  );
};

export default Detr;
