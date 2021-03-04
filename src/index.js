import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import QlikProvider from './context/Qlik';

ReactDOM.render(
  <React.StrictMode>
    <QlikProvider>
      <App />
    </QlikProvider>
  </React.StrictMode>,
  document.getElementById('root')
);