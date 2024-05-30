import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import Modal from './components/Modal';

const App = () => {
  const [user, setUser] = useState(null);

  const handleUserSubmit = (userData) => {
    setUser(userData);
  };

  return (
    <React.StrictMode>
      {user ? (
        <>
          <Header user={user} />
          <Navbar />
          <Main />
          <Footer />
        </>
      ) : (
        <Modal onSubmit={handleUserSubmit} />
      )}
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
