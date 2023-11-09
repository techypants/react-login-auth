import React from 'react';

function LogoutPage() {
  const handleLogout = () => {
    // Implement your logout logic here
  };

  return (
    <div>
      <h1>Logout</h1>
      <p>Are you sure you want to log out?</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default LogoutPage;
