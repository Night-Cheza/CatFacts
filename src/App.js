import React from 'react';
import { useState } from 'react';
import './App.css';
import Question from './Question';

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


  const factDisplayed = (fact) => {
    setFacts(previousFacts => {
      return[fact, ...previousFacts];
    });
  };



  return (
    <div className="App">
      <Question catFacts = {facts}/>
    </div>
  );
};

export default App;
