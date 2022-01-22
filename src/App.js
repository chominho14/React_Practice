import React, { useState } from "react";

function MinutesToHours() {
  const [amount, setAmount] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const onChanges = event => {
    setAmount(event.target.value);
  };
  const reset = () => {
    setAmount(0);
  };

  const onFlip = () => {
    reset();
    setFlipped(current => !current);
  };

  return (
    <div>
      <div>
        <label for="minutes">Minutes</label>
        <input
          value={flipped ? amount * 60 : amount}
          id="minutes"
          placeholder="Minutes"
          type="number"
          onChange={onChanges}
          disabled={flipped}
        />
      </div>
      <div>
        <label for="hours">Hours</label>
        <input
          value={flipped ? amount : Math.round(amount / 60)}
          id="hours"
          placeholder="Hours"
          type="number"
          disabled={!flipped}
          onChange={onChanges}
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onFlip}>Flip</button>
    </div>
  );
}

function KmToMiles() {
  const [amount, setAmount] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const onChanges = event => {
    setAmount(event.target.value);
  };

  const reset = () => {
    setAmount(0);
  };
  const onFlip = () => {
    reset();
    setFlipped(current => !current);
  };

  return (
    <div>
      <div>
        <label for="miles">Miles</label>
        <input
          value={flipped ? Math.round(amount * 0.621371) : amount}
          id="miles"
          placeholder="miles"
          type="number"
          onChange={onChanges}
          disabled={flipped}
        />
      </div>
      <div>
        <label for="km">KM</label>
        <input
          value={flipped ? amount : Math.round(amount / 0.621371)}
          id="km"
          placeholder="KM"
          type="number"
          disabled={!flipped}
          onChange={onChanges}
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onFlip}>Flip</button>
    </div>
  );
}

function App() {
  const [index, setIndex] = useState("xx");
  const onSelect = event => {
    setIndex(event.target.value);
  };
  return (
    <div>
      <h1>Super Converter</h1>
      <select value={index} onChange={onSelect}>
        <option value="xx">Select your units</option>
        <option value="0">Minutes & Hours</option>
        <option value="1">Km & Miles</option>
      </select>
      <hr />
      {index === "xx" ? "Please select your units" : null}
      {index === "0" ? <MinutesToHours /> : null}
      {index === "1" ? <KmToMiles /> : null}
    </div>
  );
}

export default App;
