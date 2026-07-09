export async function onRequestPost(context) {
  try {
    const { request } = context;
    const body = await request.json();
    const { name, email, company, purpose, date, timeSlot, message } = body;

    // Validation
    if (!name || !email || !company || !purpose || !date || !timeSlot) {
      return new Response(JSON.stringify({ error: "Missing required scheduling fields." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    // HTML Email Template
    const mailHtml = `
      <div style="font-family: sans-serif; background-color: #F5F2EB; color: #363028; padding: 30px; border-radius: 4px; border: 1px solid #6E6252;">
        <h2 style="color: #C27D27; border-bottom: 1px solid rgba(110, 98, 82, 0.2); padding-bottom: 10px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;">
          INCOMING INGESTION: REQUEST FOR LINE CONNECTION
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 8px 0; color: #6E6252; font-weight: bold; width: 140px;">Contact Name:</td>
            <td style="padding: 8px 0; color: #363028;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6E6252; font-weight: bold;">Organization:</td>
            <td style="padding: 8px 0; color: #363028;">${company}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6E6252; font-weight: bold;">Contact Email:</td>
            <td style="padding: 8px 0; color: #363028;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6E6252; font-weight: bold;">Purpose:</td>
            <td style="padding: 8px 0; color: #363028; text-transform: uppercase;">${purpose}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6E6252; font-weight: bold;">Scheduled Date:</td>
            <td style="padding: 8px 0; color: #363028;">${date}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6E6252; font-weight: bold;">Time Slot:</td>
            <td style="padding: 8px 0; color: #363028;">${timeSlot}</td>
          </tr>
        </table>
        
        <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid rgba(110, 98, 82, 0.1);">
          <p style="color: #6E6252; font-weight: bold; margin-bottom: 5px;">Context Transmission:</p>
          <p style="color: #363028; background-color: #EAE3D2; padding: 15px; border-radius: 2px; font-style: italic; border: 1px solid rgba(110, 98, 82, 0.1); margin-top: 0;">
            ${message || 'No additional context provided.'}
          </p>
        </div>

        <div style="margin-top: 30px; text-align: center; font-size: 10px; color: rgba(110, 98, 82, 0.4); border-top: 1px solid rgba(110, 98, 82, 0.1); padding-top: 15px;">
          DUNEBORN CLOUDFLARE BACKEND LOG // RECIPIENT: bhanu@duneborn.dev
        </div>
      </div>
    `;

    // MailChannels Integration: Free Serverless Outgoing Emails for Cloudflare Pages
    const sendRequest = await fetch("https://api.mailchannels.net/tx/v1/send", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: "bhanu@duneborn.dev", name: "Bhanu Duneborn" }]
          }
        ],
        from: {
          email: "portal@duneborn.dev",
          name: "Duneborn Portal"
        },
        subject: `[Duneborn Consultation Request] - ${company} (${name})`,
        content: [
          {
            type: "text/html",
            value: mailHtml
          }
        ]
      })
    });

    if (!sendRequest.ok) {
      const errorText = await sendRequest.text();
      return new Response(JSON.stringify({ error: `Mail transmission error: ${errorText}` }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response(JSON.stringify({ success: true, message: "Secure transmission established." }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
