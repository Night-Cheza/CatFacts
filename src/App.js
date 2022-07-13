import React from 'react';
import { useState } from 'react';
import './App.css';
import Fact from './Fact';

//facts are taken from here: https://cvillecatcare.com/veterinary-topics/101-amazing-cat-facts-fun-trivia-about-your-feline-friend/#:~:text=Cats%20are%20believed%20to%20be,to%20six%20times%20their%20length.

const exampleCatFacts = [
  {
    id:"1",
    fact: "A house cat's genome is 95.6 percent tiger and they share many behaviors with their jungle ancestors. These behaviors include scent marking by scratching, prey play, prey stalking, pouncing, chinning, and urine marking."
  },
  {
    id:"2",
    fact: "Cats are believed to be the only mammals who do not taste sweetness."
  },
  {
    id:"3",
    fact: "Cats are nearsighted, but their peripheral vision and night vision are much better than that of humans."
  }
]

function App() {
  const [facts, setFacts] = useState(exampleCatFacts);
  const [displayFact, setDisplayFact] = useState(false);

  const showFact = () => {
      setDisplayFact(true);
    };
  
    const dontShowFact = () => {
      setDisplayFact(false);
    };


  const factDisplayed = (fact) => {
    setFacts(() => {
      return[fact];
    });
  };



  return (
    <div className="App"> 
      <p>Would you like to know a fact about cats?</p>
      {!displayFact && <button onClick = {showFact}>YES</button>}
      {displayFact && <button onClick = {dontShowFact}>NO</button>}
      <Fact catFacts = {facts}/>
    </div>
  );
};

export default App;
