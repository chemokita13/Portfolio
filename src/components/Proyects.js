import "./proyects.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Zoom from "react-reveal/Zoom";
import Pulse from "react-reveal/Pulse";

function Proyects() {
    return (
        <main className="component" id="proyects">
            <Pulse delay={1750}>
                <div id="proyects-title" className=" bg-glass">
                    Some of my proyects
                </div>
            </Pulse>
            <div className="proyects-container">
                <Zoom center>
                    <article className="proyect bg-glass">
                        <h2 className="pr-title">Tic Tac Toe</h2>
                        <p className="pr-description">
                            A web game to play in real time tic tac toe with
                            your friend
                        </p>
                        <div className="lang-list">
                            <ul>
                                <li>Socket.io</li>
                                <li>Next.js</li>
                                <li>Tailwindcss</li>
                            </ul>
                        </div>
                        <div className="links">
                            <div className="links-btns">
                                <ul>
                                    <li>
                                        <a href="https://github.com/chemokita13/next.js-socket.js-TicTacToe">
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
                                        <a href="http://64.227.32.220:8080">
                                            <FontAwesomeIcon
                                                className="pr-icon"
                                                icon={faLink}
                                            />{" "}
                                            View live demo
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <a href="http://64.227.32.220:8080">
                                <img
                                    src={require("../proyects-imgs/ttt.png")}
                                    alt="proyect 1"
                                    className="pr-img"
                                />
                            </a>
                        </div>
                    </article>
                </Zoom>
                <Zoom center delay={0.25 * 1000}>
                    <article className="proyect bg-glass">
                        <h2 className="pr-title">Pokedex</h2>
                        <p className="pr-description">
                            A web to view and search all pokemons that exists
                        </p>
                        <div className="lang-list">
                            <ul>
                                <li>Next.js</li>
                                <li>Pure css</li>
                                <li>Vercel deploy</li>
                            </ul>
                        </div>
                        <div className="links">
                            <div className="links-btns">
                                <ul>
                                    <li>
                                        <a href="https://github.com/chemokita13/Pokedex_nextjs">
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
                                        <a href="https://pokedex-reactjs-chemokita13.vercel.app">
                                            <FontAwesomeIcon
                                                className="pr-icon"
                                                icon={faLink}
                                            />{" "}
                                            View live demo
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <a href="https://pokedex-reactjs-chemokita13.vercel.app">
                                <img
                                    src={require("../proyects-imgs/pkmn.png")}
                                    alt="proyect 2"
                                    className="pr-img"
                                />
                            </a>
                        </div>
                    </article>
                </Zoom>
                <Zoom center delay={0.5 * 1000}>
                    <article className="proyect bg-glass">
                        <h2 className="pr-title">Video library</h2>
                        <p className="pr-description">
                            A web to store videos with a title, description and
                            a preview working with and url
                        </p>
                        <div className="lang-list">
                            <ul>
                                <li>MERN stack</li>
                                <li>Typescript</li>
                                <li>Tailwindcss</li>
                            </ul>
                        </div>
                        <div className="links">
                            <div className="links-btns">
                                <ul>
                                    <li>
                                        <a href="https://github.com/chemokita13/video-web_mern-typescript">
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
                                        <a href="https://back-mern.fly.dev/">
                                            <FontAwesomeIcon
                                                className="pr-icon"
                                                icon={faLink}
                                            />{" "}
                                            View live demo
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <a href="https://back-mern.fly.dev/">
                                <img
                                    src={require("../proyects-imgs/mern.png")}
                                    alt="proyect 2"
                                    className="pr-img"
                                />
                            </a>
                        </div>
                    </article>
                </Zoom>
                <Zoom center delay={0.75 * 1000}>
                    <article className="proyect bg-glass">
                        <h2 className="pr-title">Ricky and Morty characters</h2>
                        <p className="pr-description">
                            A web that shows all characters appeared in Ricky
                            and Morty
                        </p>
                        <div className="lang-list">
                            <ul>
                                <li>React.js + Vite.js</li>
                                <li>Tailwindcss</li>
                                <li>Gh pages deploy</li>
                            </ul>
                        </div>
                        <div className="links">
                            <div className="links-btns">
                                <ul>
                                    <li>
                                        <a href="https://github.com/chemokita13/ricky-and-mortyAPI_reactwithvitejs">
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
                                        <a href="https://chemokita13.github.io/ricky-and-mortyAPI_reactwithvitejs/">
                                            <FontAwesomeIcon
                                                className="pr-icon"
                                                icon={faLink}
                                            />{" "}
                                            View live demo
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <a href="https://chemokita13.github.io/ricky-and-mortyAPI_reactwithvitejs/">
                                <img
                                    src={require("../proyects-imgs/ricky.png")}
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
