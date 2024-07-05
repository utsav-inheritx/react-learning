import React, { useState } from "react";


// Read State
const MyButton = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            Add Count: {count}
        </button>
    );
}


// Update State
const FavrioteColor = () => {
    const [color, setColor] = useState('red');

    return (
        <>
            <h2>My Fav colour is {color}</h2>
            <button type="button" onClick={() => setColor('blue')}>
                Change Color
            </button>
        </>
    );
}


const Vehicle = () => {
    // Multiple State Hooks
    // const [brand, setBrand] = useState("Tata");
    // const [model, setModel] = useState("Safari");
    // const [year, setYear] = useState("2024");
    // const [color, setColor] = useState("White");

    // return (
    //     <>
    //         <h2>{brand}</h2>
    //         <p>It is a {color} {model} from {year}.</p>
    //     </>
    // );

    // Single State Hooks
    const [car, setCar] = useState({
        brand: "Maruti Suzuki",
        model: "Grand Vitara",
        year: "2024",
        color: "White"
    });

    return (
        <>
            <h2>{car.brand}</h2>
            <p>It is a {car.color} {car.model} from {car.year}.</p>
        </>
    );
}


export default MyButton;
export { FavrioteColor, Vehicle };