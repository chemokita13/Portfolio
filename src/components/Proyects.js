import "./proyects.css";
import React from "react";

function Proyects() {
    return (
        <div className="component" id="proyects-container">
            <div id="proyects-title" className=" bg-glass">
                Some of my proyects
            </div>
            <div className="proyects">
                <div className="proyect bg-glass">
                    <div className="pr-descriptions">
                        <h3 className="pr-title">Tic Tac Toe</h3>
                        <p className="pr-description">
                            A simple game to play in real time tic tac toe made
                            with Next.js and Socket.io
                        </p>
                    </div>
                    <div className="links">
                        <div className="links-btns"></div>
                        <img
                            src="https://github.com/chemokita13/next.js-socket.js-TikTakToe/blob/master/imgs/img1.png"
                            alt="proyect photo"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
                <div className="proyect bg-glass">pr2</div>
                <div className="proyect bg-glass">pr3</div>
                <div className="proyect bg-glass">pr4</div>
            </div>
        </div>
    );
}

export default Proyects;
