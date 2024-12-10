// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // This imports the default CSS styles
import App from './App';  // Import the root App component
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// Render the App component into the root div in the HTML
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
