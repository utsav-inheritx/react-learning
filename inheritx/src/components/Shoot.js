import React from "react";

const Shoot = () => {
    const shut = () => {
        alert("Long off long off long off Suryaumar yadav");
    }

    return (
        <button onClick={shut}>Shoot Btn</button>
    );
}


const FootBall = () => {
    const shut1 = (a) => {
        alert(a);
    }

    return (
        <button onClick={() => shut1("WorldT20 Champions")}>Shoot Btn</button>
    );
}

export default Shoot;
export { FootBall };