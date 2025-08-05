document.addEventListener("DOMContentLoaded", () => {
  const icons = document.querySelectorAll(".bounce-icon");
  const speed = 0.7; // Adjust speed here

  const bouncers = [];

  icons.forEach(icon => {
    const direction = {
      x: (Math.random() > 0.5 ? 1 : -1) * (Math.random() * speed + speed),
      y: (Math.random() > 0.5 ? 1 : -1) * (Math.random() * speed + speed),
    };

    const position = {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight
    };

    icon.style.left = `${position.x}px`;
    icon.style.top = `${position.y}px`;

    bouncers.push({ icon, direction, position });
  });

  function animate() {
    bouncers.forEach(b => {
      b.position.x += b.direction.x;
      b.position.y += b.direction.y;

      const iconSize = 40;

      // Bounce horizontally
      if (b.position.x <= 0 || b.position.x >= window.innerWidth - iconSize) {
        b.direction.x *= -1;
      }
      // Bounce vertically
      if (b.position.y <= 0 || b.position.y >= window.innerHeight - iconSize) {
        b.direction.y *= -1;
      }

      b.icon.style.left = `${b.position.x}px`;
      b.icon.style.top = `${b.position.y}px`;
    });

    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener("resize", () => {
    bouncers.forEach(b => {
      b.position.x = Math.min(b.position.x, window.innerWidth - 80);
      b.position.y = Math.min(b.position.y, window.innerHeight - 10);
    });
  });
});


// Particles.js configuration
particlesJS('particles-js', {
    particles: {
    number: { value: 20, density: { enable: true, value_area: 800 } },
    color: { value: '#00f0ff' }, // Match palette
    shape: { type: 'circle' },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    line_linked: { enable: true, distance: 350, color: '#00f0ff', opacity: 0.4, width: 1 },
    move: { enable: true, speed: 1, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
    },
    interactivity: {
    detect_on: 'canvas',
    events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
    modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
    },
    retina_detect: true
});