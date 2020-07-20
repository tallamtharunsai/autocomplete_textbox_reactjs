import React from 'react';
import logo from './logo.svg';
import './App.css';
import AutoComplete from './AutoComplete';
import countries from './countries';

function App() {
  return (
    <div className="App">
      <div className="App-Component">
          <div className="App-Component">
            <AutoComplete items = {countries}></AutoComplete>
          </div>
      </div>
    </div>
  );
}

export default App;
