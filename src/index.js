import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import reportWebVitals from './reportWebVitals';
import Calculadora from './Calculadora';
import JogodaVelha from './JogoVelha';
import App3 from './App3';
import AppRoute from './AppRoute';
import {BrowserRouter} from 'react-router-dom'

function tick(){
  ReactDOM.render(
  <BrowserRouter>
    <App3 />
  </BrowserRouter>,
  document.getElementById('root')
);
}
setInterval(tick, 1000)
tick()


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
