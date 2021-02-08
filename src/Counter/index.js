import React, { useState } from "react";

export default function Counter(){
    const [counter, setCounter] = useState(0)
    const incrementCounter = () => {
        setCounter(counter => counter+1)
        setCounter(counter => counter+1)
    }
    return (
        <>
        <h3>{counter}</h3>
        <button onClick={incrementCounter}>Increment counter</button>
        </>
    )
}