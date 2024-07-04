import React from "react";


function Fruit(props) {
    return <li>{props.name}</li>;
}

// function Market() {
//     const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
//     return (
//         <>
//             <h2>Names</h2>
//             <ul>
//                 {fruits.map((fruit) => <Fruit name={fruit} />)}
//             </ul>
//         </>
//     );
// }

function Market() {
    const fruits = [
        { id: 1, name: 'Mango' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Grapes' },
        { id: 4, name: 'Apple' }
    ];
    return (
        <>
            <h1>Names</h1>
            <ul>
                {fruits.map((fruit) => <Fruit key={fruit.id} name={fruit.name} />)}
            </ul>
        </>
    );
}

export default Market;
