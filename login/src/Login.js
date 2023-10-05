import React, { useState } from 'react';

function LoginF({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {

    if (username === 'Sujey' && password === '12345') {
      onLogin(username);
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Login</h1>
      </div>
      <div className="input-container">
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>

      <div className="input-container">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>

      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}

export default LoginF;