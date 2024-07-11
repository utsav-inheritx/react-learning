import React from "react";
import Navbar from "./Navbar";

const ContactUs = () => {
    return (
        <div>   
            <Navbar/>
            {/* <h1>Contact Us</h1> */}
            <img
                src="https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I"
                style={{ width: "50%", height: "50%" }}
            />
        </div>
    );
}

export default ContactUs;