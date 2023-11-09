// Login.jsx
import React, { useState } from "react";

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3002/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password: pass }),
      });

      if (response.ok) {
        console.log('User authenticated successfully');
        // Call the onLogin function to update the authentication state
        props.onLogin();
      } else {
        console.error('Invalid email or password');
      }
    } catch (error) {
      console.error('Error during login', error);
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          type="email" 
          placeholder="youremail@gmail.com" 
          id="email" 
          name="email" 
        />
        <label htmlFor="password">Password</label>
        <input 
          value={pass} 
          onChange={(e) => setPass(e.target.value)} 
          type="password" 
          placeholder="********" 
          id="password" 
          name="password" 
        />
        <button type="submit">Log In</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('register')}>
        Don't have an account? Register here.
      </button>
    </div>
  );
};
