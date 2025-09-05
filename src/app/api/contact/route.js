import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const config = {
  api: {
    bodyParser: false, // disable Next’s JSON parser
  },
};

export async function POST(request) {
  // Parse multipart/form-data
  const formData = await request.formData();

  const name = formData.get("name")?.toString() || "";
  const phone = formData.get("phone")?.toString() || "";
  const email = formData.get("email")?.toString() || "";
  const message = formData.get("message")?.toString() || "";

  // Gather file attachments
  const attachments = [];
  for (const file of formData.getAll("file")) {
    // file is a File (Web API)
    if (file instanceof File) {
      const arrayBuffer = await file.arrayBuffer();
      attachments.push({
        filename: file.name,
        content: Buffer.from(arrayBuffer),
      });
    }
  }

  // Nodemailer transporter (Gmail)
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const escapeHtml = (unsafe) =>
    (unsafe || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const attachmentsListHtml = attachments.length
    ? `<ul style="margin:0;padding-left:18px;color:#233b75">${attachments
        .map(
          (a) => `<li style="margin-bottom:6px">${escapeHtml(a.filename)}</li>`
        )
        .join("")}</ul>`
    : `<p style="margin:0;color:#666">No attachments provided.</p>`;

  const html = `
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>New Contact — Restyle Renovation</title>
  <style>
    /* Basic responsive rules (many email clients ignore, but useful where supported) */
    @media only screen and (max-width: 620px) {
      .container { width: 100% !important; padding: 16px !important; }
      .two-col { display:block !important; width:100% !important; }
      .column { display:block !important; width:100% !important; }
      .logo { font-size:20px !important; }
    }
    /* Fallback safe fonts for email */
    body, table, td, p, a, li, blockquote { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  </style>
</head>
<body style="background:#f6f9fc;margin:0;padding:20px;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
    <tr>
      <td align="center">
        <!-- Outer container -->
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="700" class="container" style="width:100%;max-width:700px;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 8px 30px rgba(35,59,117,0.08);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(90deg, #233b75 0%, #0ea5e9 100%); padding:18px 22px; color:#fff;">
              <table width="100%" role="presentation">
                <tr>
                  <td style="vertical-align:middle">
                    <div style="display:flex;align-items:center;gap:12px">
                      <div style="width:48px;height:48px;border-radius:8px;background:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;color:#233b75">
                        RR
                      </div>
                      <div>
                        <div style="font-size:18px;font-weight:700;line-height:1;color:#fff">Restyle Renovation</div>
                        <div style="font-size:12px;opacity:0.95">New contact request</div>
                      </div>
                    </div>
                  </td>
                  <td style="text-align:right;vertical-align:middle;font-size:12px;color:rgba(255,255,255,0.95)">
                    ${new Date().toLocaleString()}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:24px 28px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-bottom:16px;">
                    <h1 style="margin:0;font-size:20px;color:#233b75;">New lead from website</h1>
                    <p style="margin:8px 0 0;color:#666;font-size:14px;line-height:1.5">
                      A potential client has submitted your contact form. See details below.
                    </p>
                  </td>
                </tr>

                <!-- Contact info two-column -->
                <tr>
                  <td style="padding-top:18px;padding-bottom:6px;">
                    <table width="100%" role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td class="two-col" style="width:50%;vertical-align:top;padding-right:12px;">
                          <div class="column" style="padding:10px;border-radius:8px;background:#f7fbff;border:1px solid #eef7fb">
                            <div style="font-size:12px;color:#888;margin-bottom:6px">Name</div>
                            <div style="font-weight:600;color:#233b75">${escapeHtml(
                              name
                            )}</div>
                          </div>
                        </td>
                        <td class="two-col" style="width:50%;vertical-align:top;padding-left:12px;">
                          <div class="column" style="padding:10px;border-radius:8px;background:#fff8f6;border:1px solid #fff1ee">
                            <div style="font-size:12px;color:#888;margin-bottom:6px">Phone</div>
                            <div style="font-weight:600;color:#233b75">${escapeHtml(
                              phone
                            )}</div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td style="height:12px"></td>
                        <td style="height:12px"></td>
                      </tr>

                      <tr>
                        <td style="padding-right:12px;">
                          <div style="padding:10px;border-radius:8px;background:#f0fbf9;border:1px solid #eaf9f4">
                            <div style="font-size:12px;color:#888;margin-bottom:6px">Email</div>
                            <div style="font-weight:600;color:#233b75">${escapeHtml(
                              email
                            )}</div>
                          </div>
                        </td>
                        <td style="padding-left:12px;">
                          <div style="padding:10px;border-radius:8px;background:#fffaf7;border:1px solid #fff3ea">
                            <div style="font-size:12px;color:#888;margin-bottom:6px">Source</div>
                            <div style="font-weight:600;color:#233b75">Website Contact Form</div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Message -->
                <tr>
                  <td style="padding-top:18px;padding-bottom:6px;">
                    <div style="font-size:12px;color:#888;margin-bottom:8px">Message</div>
                    <div style="padding:14px;border-radius:8px;background:#f8f9fb;border:1px solid #eef2fb;color:#333;white-space:pre-wrap;line-height:1.5;">
                      ${escapeHtml(message).replace(/\n/g, "<br />")}
                    </div>
                  </td>
                </tr>

                <!-- Attachments -->
                <tr>
                  <td style="padding-top:18px;padding-bottom:6px;">
                    <div style="font-size:12px;color:#888;margin-bottom:8px">Attachments</div>
                    <div style="padding:12px;border-radius:8px;background:#ffffff;border:1px dashed #e6f6ff;color:#333;">
                      ${attachmentsListHtml}
                    </div>
                  </td>
                </tr>

                <!-- CTA / Quick actions -->
                <tr>
                  <td style="padding-top:18px;">
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td>
                          <a href="mailto:${escapeHtml(
                            email
                          )}" style="display:inline-block;padding:10px 16px;border-radius:8px;background:#0ea5e9;color:#ffffff;text-decoration:none;font-weight:600;margin-right:10px;">Reply to lead</a>
                        </td>
                        <td>
                          <a href="tel:${escapeHtml(
                            phone
                          )}" style="display:inline-block;padding:10px 16px;border-radius:8px;border:2px solid #233b75;color:#233b75;text-decoration:none;font-weight:600;">Call</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#fafcff;padding:18px 22px;color:#777;font-size:13px;">
              <div style="display:flex;align-items:center;justify-content:space-between;gap:12px">
                <div>
                  <div style="font-weight:700;color:#233b75">Restyle Renovation</div>
                  <div style="color:#666">Serving Calgary & surrounding communities</div>
                </div>
                <div style="text-align:right">
                  <div style="font-weight:700;color:#233b75">Phone: (403) 361-4968</div>
                  <div style="color:#666">Email: restlyerenovation@gmail.com</div>
                </div>
              </div>
            </td>
          </tr>

        </table>
        <!-- /container -->
      </td>
    </tr>
  </table>
</body>
</html>
`;

  try {
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.GMAIL_USER}>`,
      to: "restlyerenovation@gmail.com",
      subject: `New contact from ${name}`,
      html,
      attachments,
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}
