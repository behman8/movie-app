import React from "react";
import { Link } from "react-router-dom";

function NavBar() {

    return (
        <div>
            <nav>
                <div>
                <a href="/">Watch it?</a>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/movies">Movies</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;