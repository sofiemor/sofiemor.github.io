import React from 'react';

const Header = ({ user, onNewUser }) => {
  const message = user && user.age > 16
    ? `Congratulations, ${user.name}! You can apply for a driver's license.` 
    : user
    ? `Sorry, ${user.name}. You cannot apply for a driver's license.`
    : 'Welcome!';

  return (
    <div className="header">
      <h1>{message}</h1>
      {user && (
        <button onClick={onNewUser}>New User</button>
      )}
    </div>
  );
}

export default Header;
