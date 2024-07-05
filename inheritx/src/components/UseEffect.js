import React, { useState, useEffect } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        setCalculation(() => count * count);
    }, [count]);

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}> +++ </button>
            <p>Calculation: {calculation}</p>
        </>
    );
}


export const ConditionalEffectComponent = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        if (isMounted) {
            console.log("Component Mounted");
        }
    }, [isMounted]);

    return (
        <>
            <button onClick={() => setIsMounted(!isMounted)}>
                {isMounted ? "Unmount" : "Mount"}
            </button>
        </>
    );
}