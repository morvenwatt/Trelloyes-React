import React from 'react';
import ReactDOM from 'react-dom';
import App from '.src/App';
import '.src/App.css';
import STORE from './src/STORE'

ReactDOM.render(<App store={ STORE }/>, document.getElementById('root'));
