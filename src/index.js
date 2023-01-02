import React, { createElement } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import logo from './imgs/React-logo.png'

const mainPage = (
  <div>
    <img src={logo} width="40px" alt="react logo" ></img>
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100k stars on Github</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(mainPage)



