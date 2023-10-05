import React from 'react';
import './App.css';

function LogedIn({ username }) {
  return (
    <div className="logged-in-container">
      <div className="header">
        <h1>Bienvenido {username}!</h1>
        <p>Es un Gusto Tenerte Aquí.</p>
      </div>
      <div className="image-container">
        {/* imagen */}
        <img src="imagen1.jpg"/>
      </div>
    </div>
  );
}

export default LogedIn;
