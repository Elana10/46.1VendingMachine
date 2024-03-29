import React from "react";
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <Link to="/">Vending Machine Home</Link>
            <Link to="/honeybun">Honey Bun</Link>
            <Link to="/drpepper">Dr. Pepper</Link>
            <Link to="/starbursts">Starbursts</Link>
        </nav>
    )
}

export default NavBar;