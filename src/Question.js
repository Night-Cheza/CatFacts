import React from "react";
import { useState } from "react";
import Fact from "./Fact";

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
            {!displayFact && <button onClick = {showFact}>YES</button>}
            {displayFact && <button onClick = {dontShowFact}>NO</button>}
        </div>

    );
}

export default Question;