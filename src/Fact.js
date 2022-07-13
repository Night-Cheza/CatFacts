import React from "react";

const Fact = (props) => { 
    let randomFact = props.Math.floor(Math.random() * props.length);

    return (
        <div>
            <div>{randomFact}</div>
        </div>
    );
}

export default Fact;