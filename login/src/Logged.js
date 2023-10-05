import React from 'react';

function LogedIn({ username }) {
  return (
    <div>
      <h1>Bienvenido {username}!</h1>
      <p>Es un Gusto Tenerte Aqui.</p>
    </div>
  );
}

export default LogedIn;