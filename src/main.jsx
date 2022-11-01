import React from 'react';
import ReactDOM from 'react-dom/client';
import { GitExpertApp } from './GitExpertApp';
import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  //Notas He quitado el StricMode pero se deviera trabajar con el activado en desarrollo
  
  // <React.StrictMode>
  <GitExpertApp />
  //</React.StrictMode>
)
