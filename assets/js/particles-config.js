particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 120, // Increase particle count for a denser effect
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": ["#ff4500", "#ff6347", "#ff0000"] // Fire colors
        },
        "shape": {
            "type": "circle"
        },
        "opacity": {
            "value": 0.7,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.2,
                "sync": false
            }
        },
        "size": {
            "value": 4,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 5,
                "size_min": 0.5,
                "sync": false
            }
        },
        "move": {
            "enable": true,
            "speed": 6, // Faster movement for fire effect
            "direction": "top", // Fire rises upwards
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false
        },
        "line_linked": { 
            "enable": false
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "bubble": {
                "distance": 100,
                "size": 6,
                "duration": 2,
                "opacity": 0.5,
                "speed": 3
            },
            "push": {
                "particles_nb": 4
            }
        }
    },
    "retina_detect": true
});
