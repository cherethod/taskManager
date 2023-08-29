import React from 'react';
import ReactDOM from 'react-dom/client';
// Añadimos Boostrap a nuestro proyecto
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// ! Importante: Los estilos propios deben ir debajo de boostrap para que no se pisen.
import './index.css';
// import reportWebVitals from './reportWebVitals';
import AppFinal from './AppFinal';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App></App>
    {/* <AppFinal></AppFinal> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
