import React from 'react';

function LogedIn({ username }) {
  const containerStyle = {
    backgroundColor: ' #BB8FCE',
    padding: '20px',
    textAlign: 'center',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    width: '100vw', 
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const textStyle = {
    color: 'white',
  };

  return (
    <div style={containerStyle}>
      <h1 style={textStyle}>Bienvenido {username}!</h1>
      <p style={textStyle}>Es un Gusto Tenerte Aquí.</p>
    </div>
  );
}

export default LogedIn;


