import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import FormAddName from './components/FormAddName';

ReactDOM.render(
  <React.StrictMode>
    <FormAddName />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

