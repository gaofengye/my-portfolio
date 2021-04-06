import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/layout.scss';
import './index.scss';

window.screen.orientation.lock('portrait');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

