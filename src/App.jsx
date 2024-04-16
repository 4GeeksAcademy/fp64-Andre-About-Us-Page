import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/mario-png-62.png';
import './App.css';
import PropTypes from 'prop-types';

const App = ({MrRobot}) => {
  return (
    <>
      <h1>Hello World, soy Andre, {MrRobot}</h1>
      <p>This is a test</p>
      <img src={"mario-png-62.png"} alt="Logo" />
    </>
  );
};

App.propTypes = {
  MrRobot: PropTypes.string
};

export default App;