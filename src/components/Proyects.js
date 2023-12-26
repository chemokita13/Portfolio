import "./proyects.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Zoom from "react-reveal/Zoom";
import Pulse from "react-reveal/Pulse";
import proyectsInfo from "../proyects/proyects.json";
function Proyects() {
    // mobile detect
    const mobile = window.innerWidth < 890;
    return (
        <main className="component" id="proyects">
            <button className="scrollTop bg-glass" id="right">
                <a href="#top">
                    <div className="scroll-btn-top">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </a>
            </button>
            <button className="scrollTop bg-glass" id="left">
                <a href="#top">
                    <div className="scroll-btn-top">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </a>
            </button>
            <Pulse delay={mobile ? 1750 : 0}>
                <h3 id="proyects-title" className=" bg-glass">
                    Some of my projects
                </h3>
            </Pulse>
            <div className="proyects-container">
                <Zoom center>
                    <article className="proyect bg-glass">
                        <h2 className="pr-title">
                            {proyectsInfo.proyects[0].title}
                        </h2>
                        <p className="pr-description">
                            {proyectsInfo.proyects[0].description}
                        </p>
                        <div className="lang-list">
                            <ul>
                                <li>
                                    {proyectsInfo.proyects[0]["lang-list"][0]}
                                </li>
                                <li>
                                    {proyectsInfo.proyects[0]["lang-list"][1]}
                                </li>
                                <li>
                                    {proyectsInfo.proyects[0]["lang-list"][2]}
                                </li>
                            </ul>
                        </div>
                        <div className="links">
                            <div className="links-btns">
                                <ul>
                                    <li>
                                        <a
                                            href={
                                                proyectsInfo.proyects[0].links
                                                    .github
                                            }
                                        >
                                            <img
                                                alt=""
                                                src="https://static-00.iconduck.com/assets.00/github-emoji-512x506-u3px3qmr.png"
                                                width={20}
                                                height={20}
                                            />{" "}
                                            View code on GitHub
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href={
                                                proyectsInfo.proyects[0].links
                                                    .demo
                                            }
                                        >
                                            <FontAwesomeIcon
                                                className="pr-icon"
                                                icon={faLink}
                                            />{" "}
                                            View live demo
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <a href={proyectsInfo.proyects[0].links.demo}>
                                <img
                                    src={require("../proyects/proyects-imgs/br.png")}
                                    alt="proyect 1"
                                    className="pr-img"
                                />
                            </a>
                        </div>
                    </article>
                </Zoom>
                <Zoom center delay={mobile ? 0.25 * 1000 : 0}>
                    <article className="proyect bg-glass">
                        <h2 className="pr-title">
                            {proyectsInfo.proyects[1].title}
                        </h2>
                        <p className="pr-description">
                            {proyectsInfo.proyects[1].description}
                        </p>
                        <div className="lang-list">
                            <ul>
                                <li>
                                    {proyectsInfo.proyects[1]["lang-list"][0]}
                                </li>
                                <li>
                                    {proyectsInfo.proyects[1]["lang-list"][1]}
                                </li>
                                <li>
                                    {proyectsInfo.proyects[1]["lang-list"][2]}
                                </li>
                            </ul>
                        </div>
                        <div className="links">
                            <div className="links-btns">
                                <ul>
                                    <li>
                                        <a
                                            href={
                                                proyectsInfo.proyects[1].links
                                                    .github
                                            }
                                        >
                                            <img
                                                alt=""
                                                src="https://static-00.iconduck.com/assets.00/github-emoji-512x506-u3px3qmr.png"
                                                width={20}
                                                height={20}
                                            />{" "}
                                            View code on GitHub
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href={
                                                proyectsInfo.proyects[1].links
                                                    .demo
                                            }
                                        >
                                            <FontAwesomeIcon
                                                className="pr-icon"
                                                icon={faLink}
                                            />{" "}
                                            View live demo
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <a href={proyectsInfo.proyects[1].links.demo}>
                                <img
                                    src={require("../proyects/proyects-imgs/pkmn.webp")}
                                    alt="proyect 2"
                                    className="pr-img"
                                />
                            </a>
                        </div>
                    </article>
                </Zoom>
                <Zoom center delay={mobile ? 0.5 * 1000 : 0}>
                    <article className="proyect bg-glass">
                        <h2 className="pr-title">
                            {proyectsInfo.proyects[2].title}
                        </h2>
                        <p className="pr-description">
                            {proyectsInfo.proyects[2].description}
                        </p>
                        <div className="lang-list">
                            <ul>
                                <li>
                                    {proyectsInfo.proyects[2]["lang-list"][0]}
                                </li>
                                <li>
                                    {proyectsInfo.proyects[2]["lang-list"][1]}
                                </li>
                                <li>
                                    {proyectsInfo.proyects[2]["lang-list"][2]}
                                </li>
                            </ul>
                        </div>
                        <div className="links">
                            <div className="links-btns">
                                <ul>
                                    <li>
                                        <a
                                            href={
                                                proyectsInfo.proyects[2].links
                                                    .github
                                            }
                                        >
                                            <img
                                                alt=""
                                                src="https://static-00.iconduck.com/assets.00/github-emoji-512x506-u3px3qmr.png"
                                                width={20}
                                                height={20}
                                            />{" "}
                                            View code on GitHub
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href={
                                                proyectsInfo.proyects[2].links
                                                    .demo
                                            }
                                        >
                                            <FontAwesomeIcon
                                                className="pr-icon"
                                                icon={faLink}
                                            />{" "}
                                            View live demo
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <a href={proyectsInfo.proyects[2].links.demo}>
                                <img
                                    src={require("../proyects/proyects-imgs/tictactoe.webp")}
                                    alt="proyect 2"
                                    className="pr-img"
                                />
                            </a>
                        </div>
                    </article>
                </Zoom>
                <Zoom center delay={mobile ? 0.75 * 1000 : 0}>
                    <article className="proyect bg-glass">
                        <h2 className="pr-title">
                            {proyectsInfo.proyects[3].title}
                        </h2>
                        <p className="pr-description">
                            {proyectsInfo.proyects[3].description}
                        </p>
                        <div className="lang-list">
                            <ul>
                                <li>
                                    {proyectsInfo.proyects[3]["lang-list"][0]}
                                </li>
                                <li>
                                    {proyectsInfo.proyects[3]["lang-list"][1]}
                                </li>
                                <li>
                                    {proyectsInfo.proyects[3]["lang-list"][2]}
                                </li>
                            </ul>
                        </div>
                        <div className="links">
                            <div className="links-btns">
                                <ul>
                                    <li>
                                        <a
                                            href={
                                                proyectsInfo.proyects[3].links
                                                    .github
                                            }
                                        >
                                            <img
                                                alt=""
                                                src="https://static-00.iconduck.com/assets.00/github-emoji-512x506-u3px3qmr.png"
                                                width={20}
                                                height={20}
                                            />{" "}
                                            View code on GitHub
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href={
                                                proyectsInfo.proyects[3].links
                                                    .demo
                                            }
                                        >
                                            <FontAwesomeIcon
                                                className="pr-icon"
                                                icon={faLink}
                                            />{" "}
                                            View live demo
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <a href={proyectsInfo.proyects[3].links.demo}>
                                <img
                                    src={require("../proyects/proyects-imgs/ricky.webp")}
                                    alt="proyect 2"
                                    className="pr-img"
                                />
                            </a>
                        </div>
                    </article>
                </Zoom>
            </div>
        </main>
    );
}

export default Proyects;
