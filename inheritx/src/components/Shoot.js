import React from "react";

export const Shoot = () => {
    const shut = () => {
        alert("Long off long off long off Suryaumar yadav");
    }

    return (
        <button onClick={shut}>Shoot Btn</button>
    );
}


export const FootBall = () => {
    const shut1 = (a) => {
        alert(a);
    }

    return (
        <button onClick={() => shut1("WorldT20 Champions")}>Shoot Btn</button>
    );
}