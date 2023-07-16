import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import React from 'react';

export default function Particle() {

    // Code on hover bubbles, and onclick pushes 2 more dots on screen
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    const handleOnClick = useCallback((evt, particles) => {
        particles?.push(2);
    }, []);

    const handleOnHover = useCallback((evt, particles) => {
        particles?.bubble();
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#0000",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                            fn: handleOnClick,
                        },
                        onHover: {
                            enable: true,
                            mode: "bubble",
                            fn: handleOnHover,
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 2,
                        },
                        bubble: {
                            distance: 200,
                            duration: 2,
                            size: 40,
                            opacity: 8,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#95B4DE",
                    },
                    links: {
                        color: "#95B4DE",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
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
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
}
