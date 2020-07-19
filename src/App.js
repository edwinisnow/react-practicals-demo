import React from 'react';
import './App.css';
import { IconContext } from 'react-icons'
import { FaReact } from 'react-icons/fa'
import { MdAlarm } from 'react-icons/md'

function App() {
  return (
    <IconContext.Provider value={{ color: 'blue', size: '5rem' }}>
      <div className="App">
        <FaReact />
        <MdAlarm />
      </div>
    </IconContext.Provider >
  );
}

export default App;
