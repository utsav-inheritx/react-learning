import React from "react";
import Navbar from "./Navbar";

const AboutUs = () => {
    return (
        <div>
            <Navbar/>
            {/* <h1>AboutUs</h1> */}
            <img
                src="https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4"
                style={{ width: "50%", height: "50%" }}
            />
        </div>
    );
}

export default AboutUs;