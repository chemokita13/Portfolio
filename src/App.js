import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Proyects from "./components/Proyects";
///import { useEffect } from "react";

console.log(
    "%cAre you looking how I made my portfolio?",
    "background: #fff; color: rgb(15,15,230); text-decoration: underline; font-weight: 800; padding: 20px; font-size: 105%"
);
console.log(
    "%c- Check the code in my github repo: ",
    " color: rgb(230,15,15); font-weight: 600; padding: 10px"
);
console.log(
    "%chttps://github.com/chemokita13/Portfolio",
    "background: rgb(15,15,15); color: rgb(175,200,175); text-decoration: underline; font-weight: 700; padding: 15px;"
);

function App() {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);
    // mobile detect
    const mobile =
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)
            ? true
            : false;

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const { scrollY } = window;
    //         if (scrollY > 100) {
    //             window.location.href = "/#proyects";
    //             alert("Scrolling is disabled");
    //         }
    //     };

    //     window.addEventListener("scroll", handleScroll);
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);

    return (
        <div className="GENERAL-CONTAINER">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    fullScreen: {
                        enable: false,
                        zIndex: -1,
                    },
                    background: {
                        color: {
                            value: "#000",
                        },
                    },
                    fpsLimit: 30,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: mobile ? false : true,
                                mode: "push",
                            },
                            onHover: {
                                enable: false,
                            },
                            resize: mobile ? false : true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            directions: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "triangle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                }}
            />
            <Header />
            <About />
            <Proyects />
        </div>
    );
}

export default App;
