import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faUser,
    faBoltLightning,
    faLanguage,
    faEarthEurope,
    faGraduationCap,
    faSchool,
    faEnvelope,
    faCodeMerge,
    faLink,
} from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade";
import { useState } from "react";
function About() {
    const [clickedMail, setClickedMail] = useState(false);

    return (
        <main id="about" className="component">
            <Fade top>
                <h2 className="about-title">About me</h2>
            </Fade>
            <div className="about-container">
                <Fade left>
                    <div className="about-card">
                        <ul>
                            <li>
                                Full name: Jos&eacute; Mar&iacute;a Pahino Leibu{" "}
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faUser}
                                />
                            </li>
                            <li>
                                Age: 16 years
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faBoltLightning}
                                />
                            </li>
                            <li>
                                Nationality: Spain
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faHouse}
                                />
                            </li>
                            <li>
                                Native language: Espa&ntilde;ol
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faLanguage}
                                />
                            </li>
                            <li>
                                Other languages: English and French
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faEarthEurope}
                                />
                            </li>
                            <li>
                                Titles: Secondary Education
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faGraduationCap}
                                />
                            </li>
                            <li>
                                Currently studying first of Bachillerato{" "}
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faSchool}
                                />
                            </li>
                        </ul>
                    </div>
                </Fade>
                <Fade right>
                    <p className="about-description">
                        I am a full stack developer living in Spain. I have a
                        high level in <u>React.js and SSR with Next.js</u>, but
                        also I have practised with Angular or Handlebars. In the
                        back-end side, I am good with node.js with{" "}
                        <u>express or socket.io</u>, but also I have proyects
                        with Nest.js, Django and more. Talking about databases,
                        I love <u>MongoDb</u> but also I have a good level with
                        MySQL.
                    </p>
                </Fade>
            </div>
            <Fade bottom>
                <h2 className="contact-title about-title">Contact</h2>
            </Fade>
            <div className="about-container contact-container">
                <Fade left>
                    <div className="about-description contact-description">
                        You can contact me with this form:
                        <form className="contact-form">
                            <input name="name" placeholder="Name" />
                            <textarea
                                name="content"
                                placeholder="content"
                            ></textarea>
                            <button type="submit" className="form-button">
                                Submit
                            </button>
                        </form>
                    </div>
                </Fade>
                <Fade right>
                    <div className="about-card contact-card">
                        <ul>
                            <li onClick={() => setClickedMail(!clickedMail)}>
                                <u>E-mail</u>{" "}
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faEnvelope}
                                />
                                {clickedMail && (
                                    <Fade top>
                                        <br />
                                        <u>chemokita13@gmail.com</u>
                                    </Fade>
                                )}
                            </li>
                            <li>
                                <u>Github</u>{" "}
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faCodeMerge}
                                />
                            </li>
                            <li>
                                <u>Linkedin</u>
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faLink}
                                />
                            </li>
                        </ul>
                    </div>
                </Fade>
            </div>
        </main>
    );
}

export default About;
