import React, { useState, useEffect } from 'react';
import './App.css';

const Address4 = require('ip-address').Address4;

const appURL = window.location.protocol + "//" + window.location.host;

const callAPI = async (hexAddress, setLatitude, setLongitude) => {
  try {
    const res = await fetch(`${appURL}/api/ip/${hexAddress}`);
    const data = await res.json();
    const lat = data[0]['latitude'];
    const long = data[0]['longitude'];
    setLatitude(lat);
    setLongitude(long);
  } catch (err) {
    console.log(err);
  }
}

const App = () => {
  const [input, setInput] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const handleChange = (val) => {
    // console.log(val);
    setInput(val);
  }

  const handleClick = (e) => {
    e.preventDefault();
    // console.log(input);
    setLatitude("Loading...");
    setLongitude("Loading...");
    const address = new Address4(input);
    const hexAddress = '0x' + address.toHex().split(':').join('');
    console.log(hexAddress);
    callAPI(hexAddress, setLatitude, setLongitude);
    setInput("");
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>IP Locator</h1>
      </header>
      <main>
        <form>
          <label htmlFor="ip">Enter an IP Address:</label>
          <input type="text" id="ip" name="ip" placeholder="0.0.0.0" value={input} onChange={e => handleChange(e.target.value)} />
          <input type="submit" value="Submit" onClick={e => handleClick(e)} />
        </form>
        <div>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
        </div>
      </main>
    </div>
  );
}

export default App;
