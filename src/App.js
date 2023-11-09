// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Login } from './Login';
import { Register } from './Register';
import ShoppingGallery from './ShoppingGallery';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  const handleLogin = () => {
    // Perform your login logic and set isAuthenticated to true if successful
    setIsAuthenticated(true);
    console.log('Login successful');
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              currentForm === 'login' ? (
                <Login onFormSwitch={toggleForm} onLogin={handleLogin} />
              ) : (
                <Register onFormSwitch={toggleForm} />
              )
            }
          />
          <Route
            path="/shopping-gallery"
            element={isAuthenticated ? <ShoppingGallery /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
