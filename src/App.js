import React, { useState } from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>IP Locator</h1>
      </header>
      <main>
        <form>
          <input type="text" id="ip" name="ip" />
          <input type="submit" value="Submit" />
        </form>
        <div>
          <p>Latitude:</p>
          <p>Longitude:</p>
        </div>
      </main>
    </div>
  );
}

export default App;
