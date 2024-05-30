import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import Modal from './components/Modal';

const App = () => {
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check if user data is stored in local storage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      // If no user data found, show the modal
      setShowModal(true);
    }
  }, []);

  const handleUserSubmit = (userData) => {
    // Store user data in local storage
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    setShowModal(false);
  };

  const handleNewUser = () => {
    // Clear user data and show the modal again
    localStorage.removeItem('user');
    setUser(null);
    setShowModal(true);
  };

  return (
    <div>
      <React.StrictMode>
        <Header user={user} onNewUser={handleNewUser} />
        <Navbar />
        <Main />
        <Footer />
        {showModal && <Modal onSubmit={handleUserSubmit} />}
      </React.StrictMode>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
