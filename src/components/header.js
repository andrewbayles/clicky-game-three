import React from "react";

const score = 0;
const highScore = 0;

const style = {
    HeaderStyle: {
        marginTop: 0,
        height: "100px",
        textAlign: "center",
        width: "100%",
        background: "#555555",
        color: "white"
    }
}
function Header() {
    return (
    <div style={style.HeaderStyle} className="headerDiv">
        <h2 id="instructions">Click images for points. Don't click the same one twice!</h2>
        <h3 id="score">Score: { score } | High Score: { highScore }</h3>
    </div >
    );
}
export default Header;