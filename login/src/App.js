import React, { useState } from 'react';
import './App.css';
import LoginF from './Login'; 
import LogedIn from './Logged';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (loggedInUsername) => {
    setUsername(loggedInUsername);
    setLoggedIn(true);
  };

  return (
    <div className="App">
      {loggedIn ? (
        <LogedIn username={username} />
      ) : (
        <LoginF onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
