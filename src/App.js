import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Proyects from "./components/Proyects";

console.log(
    "%cAre you looking how I made my portfolio?",
    "background: #fff; color: rgb(15,15,230); text-decoration: underline; font-weight: 800; padding: 40px; font-size: 105%"
);
console.log(
    "%c- Check the code in my github repo: ",
    " color: rgb(230,15,15); font-weight: 600; padding: 40px"
);
console.log(
    "%chttps://github.com/chemokita13/Portfolio",
    "background: rgb(15,15,15); color: rgb(175,200,175); text-decoration: underline; font-weight: 700; padding: 30px;"
);

function App() {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);
    return (
        <div className="GENERAL-CONTAINER">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    fullScreen: {
                        enable: true,
                        zIndex: -1,
                    },
                    background: {
                        color: {
                            value: "#000",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: false,
                            },
                            resize: true,
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
                    detectRetina: true,
                }}
            />
            <Header />
            <About />
            <Proyects />
        </div>
    );
}

export default App;
