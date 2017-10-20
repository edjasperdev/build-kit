import App from './components/App';
import ReactDOM from 'react-dom';
import React from 'react';
import './build-kit-style.scss'


const showBuildKit = ( element ) => {
  ReactDOM.render(<App />,
    element);
};

module.exports = showBuildKit;