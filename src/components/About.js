import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Resend } from "resend";
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
import { useState } from "react"; // for the form
//import axios from "axios";
const resend = new Resend(process.env.REACT_APP_SEND_KEY);
function About() {
    const [clickedMail, setClickedMail] = useState(false);

    const handleSubmit = async (e) => {
        alert(
            "Temporaly disabled, sorry for the inconvenience, contact me at email: chemokita13@gmail.com"
        );
        e.preventDefault();
        // console.log(e.target[0].value);
        let emitter = {
            name: e.target[0].value, // name input
            email: e.target[2].value, // email input
            content: e.target[3].value, // content text area
        };
        if (e.target[1].value) {
            emitter.phone = e.target[1].value;
        }
        console.log(process.env.REACT_APP_SEND_KEY);

        const res = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "chemokita13@gmail.com",
            subject: "New message from portfolio",
            html: "flele",
        });
        console.log(res);
        // // if the user wrote phone because its optional

        // if (!window.confirm("Send form?")) {
        //     alert("Submit cancelled");
        //     return;
        // }
        // const res = await axios.post(
        //     "https://portfolio-backend.fly.dev/send",
        //     emitter
        // );
        // // sent alert
        // res.status === 200
        //     ? alert("Form succesfully submited!")
        //     : alert("Something went wrong, try again later.");
    };

    return (
        <main className="component" id="about">
            <Fade top>
                <h3 className="about-title">About me</h3>
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
                                Age: 17 years
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
                                Currently studying second of Bachillerato{" "}
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faSchool}
                                />
                            </li>
                        </ul>
                    </div>
                </Fade>
                <Fade right>
                    <h4 className="about-description">
                        I am a full stack developer living in Spain. I have a
                        high level in <u>React.js and SSR with Next.js</u>, but
                        also I have practised with Angular or Handlebars. In the
                        back-end side, I am good with node.js with{" "}
                        <u>express or socket.io</u>, but also I have proyects
                        with Nest.js, Django and more. Talking about databases,
                        I love <u>MongoDb</u> but also I have a good level with
                        MySQL.
                    </h4>
                </Fade>
            </div>
            <div className="contact">
                <Fade bottom>
                    <h3 className="contact-title about-title">Contact</h3>
                </Fade>
                <div className="about-container contact-container">
                    <Fade left>
                        <div className="about-description contact-description">
                            <span>You can contact me with this form:</span>
                            <form
                                className="contact-form"
                                onSubmit={(e) => handleSubmit(e)}
                            >
                                <div className="nameAndPhone">
                                    <input
                                        name="name"
                                        placeholder="Name"
                                        //onChange={(e) => handleInputChange(e)}
                                    />
                                    <input
                                        name="phone"
                                        placeholder="Phone"
                                        //onChange={(e) => handleInputChange(e)}
                                    />
                                </div>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="E-mail"
                                    //onChange={(e) => handleInputChange(e)}
                                />
                                <textarea
                                    name="content"
                                    placeholder="content"
                                    //onChange={(e) => handleInputChange(e)}
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
                                <li
                                    onClick={() => setClickedMail(!clickedMail)}
                                >
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
                                    <a href="https://github.com/chemokita13">
                                        <u>Github</u>{" "}
                                        <FontAwesomeIcon
                                            className="icon"
                                            icon={faCodeMerge}
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://linkedin.com/in/jos%C3%A9-mar%C3%ADa-pahino-leibu-588303242">
                                        <u>Linkedin</u>
                                        <FontAwesomeIcon
                                            className="icon"
                                            icon={faLink}
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Fade>
                </div>
            </div>
            <a href="#proyects" className="btn-scroll bg-glass">
                <div className="scroll-btn-about">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </a>
        </main>
    );
}

export default About;
