// Particles.js configuration
particlesJS('particles-js', {
    particles: {
    number: { value: 50, density: { enable: true, value_area: 800 } },
    color: { value: '#00f0ff' }, // Match palette
    shape: { type: 'circle' },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    line_linked: { enable: true, distance: 150, color: '#00f0ff', opacity: 0.4, width: 1 },
    move: { enable: true, speed: 1, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
    },
    interactivity: {
    detect_on: 'canvas',
    events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
    modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
    },
    retina_detect: true
});