import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: 'lightblue', textAlign: 'left', padding: '10px 0', height: '40px', display: 'flex', alignItems: 'center'  }}>
        <a href="https://dmv.ny.gov/" style={{ margin: '10px' }}>DMV Home</a>
        <a href="https://dmv.ny.gov/driver-license/schedule-and-take-road-test" style={{ marginRight: '10px' }}>Schedule Tests</a>
        <a href="https://dmv.ny.gov/contact-us/contact-us">Contact</a>
    </nav>
  );
}

export default Navbar;
