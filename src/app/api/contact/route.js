import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

// --- embed logo as inline attachment (cid) ---
const logoCid = "logo@cid";
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

  try {
    const logoPath = path.join(process.cwd(), "public", "images", "logo.svg");
    if (fs.existsSync(logoPath)) {
      const logoBuffer = fs.readFileSync(logoPath);
      // prepend so logo is available as cid:logo@cid
      attachments.unshift({
        filename: "logo.svg",
        content: logoBuffer,
        cid: logoCid,
        contentType: "image/svg+xml",
      });
    } else {
      console.warn("Logo not found at", logoPath);
    }
  } catch (err) {
    console.warn("Error loading logo file:", err);
  }

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

  const primary = "#0ea5e9";
  const secondary = "#233b75";
  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>New Contact — Restyle Renovation</title>
  <style>
    body { margin:0; padding:20px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; background:#f4f7fb; color:#10263b; }
    .container { max-width:700px; margin:0 auto; }
    .card { background:white; border-radius:12px; overflow:hidden; box-shadow:0 8px 30px rgba(16,24,40,0.06); }
    .header { display:flex; align-items:center; gap:14px; padding:18px 20px; background:linear-gradient(90deg, ${primary}, ${secondary}); color:#fff; }
    .logo { width:64px; height:auto; display:block; border-radius:8px; background:rgba(255,255,255,0.06); padding:6px; }
    .title { font-size:18px; font-weight:700; margin:0; }
    .sub { font-size:13px; opacity:0.95; margin-top:4px; }
    .body { padding:20px; display:block; gap:16px; }
    .row { display:flex; gap:12px; flex-wrap:wrap; margin-bottom:12px; }
    .info { flex:1 1 200px; min-width:180px; background:#fbfdff; border-radius:8px; padding:12px; border:1px solid rgba(17,48,94,0.04); }
    .label { font-size:12px; color:#6b7b90; margin-bottom:6px; }
    .value { font-weight:600; color:#11305e; font-size:15px; }
    .message { background:#fff; border-radius:8px; padding:14px; border:1px solid rgba(17,48,94,0.04); color:#1f2d3d; white-space:pre-wrap; line-height:1.5; }
    .attachments { background:#fff; border-radius:8px; padding:12px; border:1px dashed rgba(17,48,94,0.06); color:#1f2d3d; }
    .cta { padding:20px; display:flex; gap:10px; align-items:center; }
    .btn-primary { display:inline-block; padding:10px 14px; border-radius:8px; background:${primary}; color:#fff; text-decoration:none; font-weight:600; }
    .btn-outline { display:inline-block; padding:10px 14px; border-radius:8px; border:2px solid ${secondary}; color:${secondary}; text-decoration:none; font-weight:600;margin-left:10px; }
    .footer { padding:14px 20px; background:#fafcff; border-top:1px solid rgba(17,48,94,0.03); font-size:13px; color:#6b7b90; display:flex; justify-content:space-between; gap:12px; flex-wrap:wrap; }
    @media (max-width:600px) {
      .row { flex-direction:column; }
      .header { padding:14px; gap:10px; }
      .logo { width:48px; }
      .body { padding:16px; }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="card">
      <div class="header">
        <div>
          <div class="title">Restyle Renovation — New lead</div>
          <div class="sub">Received ${new Date().toLocaleString()}</div>
        </div>
      </div>

      <div class="body">
        <div class="row">
          <div class="info">
            <div class="label">Name</div>
            <div class="value">${escapeHtml(name || "—")}</div>
          </div>

          <div class="info">
            <div class="label">Phone</div>
            <div class="value">${escapeHtml(phone || "—")}</div>
          </div>

          <div class="info">
            <div class="label">Email</div>
            <div class="value">${escapeHtml(email || "—")}</div>
          </div>
        </div>

        <div style="margin-bottom:12px">
          <div class="label">Message</div>
          <div class="message">${escapeHtml(message || "—").replace(
            /\n/g,
            "<br/>"
          )}</div>
        </div>

        <div style="margin-bottom:12px">
          <div class="label">Attachments</div>
          <div class="attachments">${attachmentsListHtml}</div>
        </div>

        <div class="cta" style="padding-top:6px;">
          <a href="mailto:${escapeHtml(
            email || ""
          )}" class="btn-primary">Reply to lead</a>
          <a href="tel:${escapeHtml(phone || "")}" class="btn-outline">Call</a>
        </div>
      </div>

      <div class="footer">
        <div>
          <div style="font-weight:700;color:${secondary}">Restyle Renovation</div>
          <div style="color:#777">Serving Calgary & surrounding communities</div>
        </div>
        <div style="text-align:right">
          <div style="font-weight:700;color:${secondary}">Phone: (403) 361-4968</div>
          <div style="color:#777">Email: restlyerenovation@gmail.com</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
`;

  try {
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.GMAIL_USER}>`,
      to: "info@restylerenovation.ca",
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
