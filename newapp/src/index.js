import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App3 } from './App.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App3 name="Alice"/>, document.getElementById('root'));

// If you want your ap p to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
