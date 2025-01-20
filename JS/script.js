particlesJS("particles-js", {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#00FF00"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000"
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 5,
            random: true,
            anim: {
                enable: true,
                speed: 3,
                size_min: 0.1,
                sync: false
            }
        },
        move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false
            }
        }
    },
    interactivity: {
        detect_on: "window",
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
            onclick: {
                enable: true,
                mode: "push"
            }
        }
    }
});
