import React from "react";
import "./style.css";

const Header = props => {
    return(
        <div className="container bg-primary" id="score">
            <div className="row">
                <div className="col-4" id="title">
                    Clicky Game
                </div>
                <div className="col-4 text-center" id="direction">
                    Click an image to begin!
                </div>
                <div className="col-4 text-right" id="scores">
                 Score: {props.score} | Top Score: {props.topScore}
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

export default Header;