import "./header.css";
import Pulse from "react-reveal/Pulse";
import Jump from "react-reveal/Jump";

function Header() {
    return (
        <header className="header component" id="top">
            <Pulse>
                <header className="titles-container">
                    <h1 className="titles" id="name">
                        Jos&eacute; Mar&iacute;a Pahino
                    </h1>
                    <h2 className="titles" id="work">
                        Junior full stack developer
                    </h2>
                </header>
            </Pulse>
            <Jump forever={true}>
                <a href="#about">
                    <div className="scroll-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </a>
            </Jump>
        </header>
    );
}

export default Header;
