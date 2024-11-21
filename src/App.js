import React from 'react';

import './App.css';
import Tooltip from './components/tooltip/Tooltip';

const App = () => {
  return (
    <main className="main-container">
      <Tooltip text="👋Hi, I'm a Top Tooltip!" position="top">
        <button className="button">Top</button>
      </Tooltip>
      <Tooltip text="👋Hi, I'm a Right Tooltip!" position="right">
        <button className="button">Right</button>
      </Tooltip>
      <Tooltip text="👋Hi, I'm a Bottom Tooltip!" position="bottom">
        <button className="button">Bottom</button>
      </Tooltip>
      <Tooltip text="👋Hi, I'm a Left Tooltip!" position="left">
        <button className="button">Left</button>
      </Tooltip>
    </main>
  );
};

export default App;
