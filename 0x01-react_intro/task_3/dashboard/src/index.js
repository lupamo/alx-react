import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Notification from './Notifications.js';
import reportWebVitals from './reportWebVitals';

const notificationsRoot = ReactDOM.createRoot(document.getElementById('root-notifications'));
notificationsRoot.render(
  <React.StrictMode>
    <Notification />
  </React.StrictMode>
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
