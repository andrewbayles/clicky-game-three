import React from "react";

const style = {
    NavbarStyle: {
        marginTop: 0,
        textAlign: "center"
    }
}

const Navbar = () => {
    return (
        <nav style={style.NavbarStyle} className="navbarDiv">
           <div>
            <h1>Classic NES Clicky Game</h1>
           <h2>Now you're clicking with power.</h2>
           </div>
        </nav>
    )
}

export default Navbar;