import Test from './components/Test';
import ReactDOM from 'react-dom';
import React from 'react';

const showBuildKit = ( element ) => {
  ReactDOM.render(<Test />,
    element);
};

module.exports = showBuildKit;