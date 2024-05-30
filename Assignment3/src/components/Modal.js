import React, { useState } from 'react';

const Modal = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && age) {
      onSubmit({ name, age: parseInt(age, 10) });
    }
  };

  return (
    <div style={{
      position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'lightgrey', display: 'flex', justifyContent: 'center', alignItems: 'center'
    }}>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px', width: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <h2>Enter your information</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ width: '200px', padding: '8px', margin: '10px 0' }}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
              style={{ width: '200px', padding: '8px', margin: '10px 0' }}
            />
          </div>
          <button type="submit" style={{ padding: '10px 20px', marginTop: '10px' }}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;

