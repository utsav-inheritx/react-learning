import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul style={{ listStyleType: "none" }}>
                    <li>
                        <Link to="/">Home</Link>
                    </li><br />
                    <li>
                        <Link to="/about">About Us</Link>
                    </li><br />
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li><br />
                </ul>

                {/* <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About Us</a>
                    </li>
                    <li>
                        <a href="/contact">Contact Us</a>
                    </li>
                </ul> */}
            </nav>

            {/* Outlet renders the current route selected. */}
            <Outlet />
        </div>
    );
}

export default Navbar;