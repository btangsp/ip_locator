import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState("");

  const handleChange = (val) => {
    console.log(val);
    setInput(val);
  }

  const handleClick = (e) => {
    setInput("");
    e.preventDefault();
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>IP Locator</h1>
      </header>
      <main>
        <form>
          <input type="text" id="ip" name="ip" value={input} onChange={e => handleChange(e.target.value)} />
          <input type="submit" value="Submit" onClick={e => handleClick(e)} />
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
