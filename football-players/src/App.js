// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Assurez-vous d'inclure le CSS de Bootstrap
import PlayersList from './components/playerList';




const App = () => {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Famous Football Players</h1>
      <PlayersList />
    </div>
  );
}

export default App;
