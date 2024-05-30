import React from 'react';

const Header = ({ user, onNewUser }) => {
  const message = user && user.age > 18
    ? `Congratulations, ${user.name}! You can apply for a driver's license` 
    : user
    ? `Sorry, ${user.name}. You cannot apply for a driver's license.`
    : 'Welcome!';

  return (
    <div style={{ border: '2px solid orange', textAlign: 'center' }}>
      <h1>{message}</h1>
      {user && (
        <button onClick={onNewUser} style={{ margin:'10px' }}>New User</button>
      )}
    </div>
  );
}

export default Header;
