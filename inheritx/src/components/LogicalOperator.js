import React from "react";

const Garage = (props) => {
    const cars = props.cars;
    //     return (
    //     <>
    //       <h1>Garage</h1>
    //       {cars.length > 0 &&
    //         <h2>
    //           I have {cars.length} cars in my garage.
    //         </h2>
    //       }
    //     </>
    //  );

    return (
        <>
            <h1>Garage</h1>
            {cars.length > 0 ? (
                <>
                    <h2>You have {cars.length} cars in your garage.</h2>
                    <ul>
                        {cars.map((car, index) => (
                            <li key={index}>{car}</li>
                        ))}
                    </ul>
                </>
            ) : (
                <h2>You have no cars in your garage.</h2>
            )}
        </>
    );
}

export default Garage;
