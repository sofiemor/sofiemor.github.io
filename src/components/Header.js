import React from 'react';

const Header = ({ user }) => {
  const message = user.age > 18 
    ? `Congratulations, ${user.name}! You can apply for a driver's license` 
    : `Sorry, ${user.name}. You cannot apply for a driver's license.`;

  return (
    <div style={{ border: '2px solid orange', textAlign: 'center' }}>
      <h1>{message}</h1>
    </div>
  );
}

export default Header;
