import React from "react";
import { useState } from "react";

const Question = () => {
    const [displayFact, setDisplayFact] = useState(false);

    const showFact = () => {
        setDisplayFact(true);
      };
    
      const dontShowFact = () => {
        setDisplayFact(false);
      };
    return (
        <div>
            <p>Would you like to know a fact about cats?</p>
            <button onClick = {showFact}>YES</button>
            <button onClick = {dontShowFact}>NO</button>
        </div>

    );
}

export default Question;