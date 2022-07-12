import React from 'react';
import { useState } from 'react';
import './App.css';

const catFacts = {
  facts: [],
  id: "",
  text: ""
}

function App() {
  const [displayFact, setDisplayFact] = useState(false);

  const showFact = () => {    
    setDisplayFact(true);
  };

  const dontShowFact = () => {
    setDisplayFact(false);
  };

  if(displayFact) {
    
  }

  return (
    <div className="App">
      <p>Would you like to know a fact about cats?</p>
      <button onClick = {showFact}>YES</button>
      <button onClick = {dontShowFact}>NO</button>
    </div>
  );
};

export default App;
