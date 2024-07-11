import React from "react";
import Navbar from "./Navbar";

const Home = () => {
    return (
        <div>
            <Navbar />
            {/* <h1>Home</h1> */}
            <img
                src="https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4"
                style={{ width: "50%", height: "50%" }}
            />
        </div>

    );
}

export default Home;