import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";

export const createContactLead = async (req, res) => {
    try {
        const { name, email, service, message } = req.body;

        // Save in MongoDB
        const lead = await Contact.create({ name, email, service, message });

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // ── 1. ADMIN NOTIFICATION EMAIL ──────────────────────
        await transporter.sendMail({
            from: `"Zenovate Website" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `New Lead from Zenovate Website — ${name}`,
            html: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
</head>
<body style="margin:0;padding:0;background:#f0f5ee;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f0f5ee;padding:40px 0;">
    <tr><td align="center">
      <table width="580" cellpadding="0" cellspacing="0" border="0" style="max-width:580px;width:100%;">
        <tr><td style="background:#8ab87a;height:3px;font-size:0;line-height:0;">&nbsp;</td></tr>
        <tr>
          <td style="background:#1e3a1a;padding:32px 40px 28px;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td>
                  <p style="margin:0;font-family:Georgia,serif;font-size:22px;letter-spacing:4px;color:rgba(255,255,255,0.92);text-transform:uppercase;">ZENO<em style="font-style:italic;color:#8ab87a;">VATE</em></p>
                  <p style="margin:4px 0 0;font-size:9px;letter-spacing:6px;text-transform:uppercase;color:rgba(255,255,255,0.3);">TECHNOLOGY &nbsp;·&nbsp; DESIGN &nbsp;·&nbsp; CRAFT</p>
                </td>
                <td align="right" valign="middle">
                  <span style="display:inline-block;background:rgba(138,184,122,0.15);border:1px solid rgba(138,184,122,0.3);padding:6px 14px;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#8ab87a;">NEW LEAD</span>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr><td style="background:rgba(255,255,255,0.06);height:1px;font-size:0;line-height:0;">&nbsp;</td></tr>
        <tr>
          <td style="background:#1e3a1a;padding:0 40px 36px;">
            <p style="margin:0;font-family:Georgia,serif;font-size:28px;line-height:1.2;color:#ffffff;">New Contact Form<br/><em style="font-style:italic;color:#8ab87a;">Submission Received</em></p>
            <p style="margin:12px 0 0;font-size:11px;letter-spacing:1.5px;line-height:1.9;color:rgba(255,255,255,0.38);">A new lead has been submitted. Please review the details and follow up within 24 hours.</p>
          </td>
        </tr>
        <tr><td style="background:#8ab87a;height:2px;font-size:0;line-height:0;">&nbsp;</td></tr>
        <tr>
          <td style="background:#ffffff;padding:36px 40px 0;">
            <p style="margin:0 0 20px;font-size:9px;letter-spacing:4px;text-transform:uppercase;color:#8ab87a;border-bottom:1px solid #e4ede1;padding-bottom:12px;">Lead Details</p>
          </td>
        </tr>
        <tr>
          <td style="background:#ffffff;padding:0 40px;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-bottom:1px solid #f0f5ee;">
              <tr>
                <td style="padding:14px 0;width:120px;vertical-align:top;"><p style="margin:0;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#7a9a74;">Name</p></td>
                <td style="padding:14px 0;vertical-align:top;"><p style="margin:0;font-size:14px;font-weight:500;color:#1e3a1a;">${name}</p></td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="background:#ffffff;padding:0 40px;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-bottom:1px solid #f0f5ee;">
              <tr>
                <td style="padding:14px 0;width:120px;vertical-align:top;"><p style="margin:0;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#7a9a74;">Email</p></td>
                <td style="padding:14px 0;vertical-align:top;"><a href="mailto:${email}" style="font-size:14px;color:#3d6e38;text-decoration:none;">${email}</a></td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="background:#ffffff;padding:0 40px;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-bottom:1px solid #f0f5ee;">
              <tr>
                <td style="padding:14px 0;width:120px;vertical-align:top;"><p style="margin:0;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#7a9a74;">Service</p></td>
                <td style="padding:14px 0;vertical-align:top;"><span style="display:inline-block;background:#f0f5ee;border:1px solid #c8ddc4;padding:4px 12px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#3d6e38;">${service}</span></td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="background:#ffffff;padding:0 40px 32px;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="padding:14px 0;width:120px;vertical-align:top;"><p style="margin:0;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#7a9a74;">Message</p></td>
                <td style="padding:14px 0;vertical-align:top;"><p style="margin:0;font-size:13px;line-height:1.85;color:#3d4a3a;">${message}</p></td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="background:#e4ede1;padding:24px 40px;border-top:1px solid #c8ddc4;border-bottom:1px solid #c8ddc4;">
            <a href="mailto:${email}?subject=Re%3A%20Your%20Zenovate%20Inquiry&body=Hi%20${encodeURIComponent(name)}%2C%0A%0AThank%20you%20for%20reaching%20out%20to%20Zenovate%20Technologies.%0A%0A"
               style="display:inline-block;background:#1e3a1a;color:#ffffff;font-size:9px;letter-spacing:3px;text-transform:uppercase;padding:12px 22px;text-decoration:none;">
              Reply via Email
            </a>
          </td>
        </tr>
        <tr>
          <td style="background:#f0f5ee;padding:24px 40px;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td>
                  <p style="margin:0;font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#7a9a74;">Zenovate Technologies &nbsp;·&nbsp; Ahmedabad, India</p>
                  <p style="margin:4px 0 0;font-size:9px;color:#7a9a74;">contact.zenovate@gmail.com &nbsp;·&nbsp; +91 98981 94788</p>
                </td>
                <td align="right"><p style="margin:0;font-size:8px;letter-spacing:2px;text-transform:uppercase;color:#c8ddc4;">Auto-generated notification</p></td>
              </tr>
            </table>
          </td>
        </tr>
        <tr><td style="background:#1e3a1a;height:4px;font-size:0;line-height:0;">&nbsp;</td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
        });

        // ── 2. CLIENT CONFIRMATION EMAIL ─────────────────────
        await transporter.sendMail({
            from: `"Zenovate Technologies" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: `We've received your message, ${name.split(" ")[0]} — Zenovate`,
            html: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
</head>
<body style="margin:0;padding:0;background:#f0f5ee;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f0f5ee;padding:40px 0;">
    <tr><td align="center">
      <table width="580" cellpadding="0" cellspacing="0" border="0" style="max-width:580px;width:100%;">

        <!-- TOP ACCENT -->
        <tr><td style="background:#8ab87a;height:3px;font-size:0;line-height:0;">&nbsp;</td></tr>

        <!-- HEADER -->
        <tr>
          <td style="background:#1e3a1a;padding:32px 40px 28px;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td>
                  <p style="margin:0;font-family:Georgia,serif;font-size:22px;letter-spacing:4px;color:rgba(255,255,255,0.92);text-transform:uppercase;">ZENO<em style="font-style:italic;color:#8ab87a;">VATE</em></p>
                  <p style="margin:4px 0 0;font-size:9px;letter-spacing:6px;text-transform:uppercase;color:rgba(255,255,255,0.3);">TECHNOLOGY &nbsp;·&nbsp; DESIGN &nbsp;·&nbsp; CRAFT</p>
                </td>
                <td align="right" valign="middle">
                  <span style="display:inline-block;background:rgba(138,184,122,0.15);border:1px solid rgba(138,184,122,0.3);padding:6px 14px;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#8ab87a;">CONFIRMED</span>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- DIVIDER -->
        <tr><td style="background:rgba(255,255,255,0.06);height:1px;font-size:0;line-height:0;">&nbsp;</td></tr>

        <!-- HERO -->
        <tr>
          <td style="background:#1e3a1a;padding:0 40px 36px;">
            <p style="margin:0;font-family:Georgia,serif;font-size:28px;line-height:1.2;color:#ffffff;">
              Thank you, ${name.split(" ")[0]}.<br/>
              <em style="font-style:italic;color:#8ab87a;">We'll be in touch soon.</em>
            </p>
            <p style="margin:14px 0 0;font-size:11px;letter-spacing:1.5px;line-height:1.9;color:rgba(255,255,255,0.38);">
              We've received your message and our team will review it shortly. Expect a reply within <strong style="color:rgba(255,255,255,0.6);">24 hours</strong>.
            </p>
          </td>
        </tr>
        <tr><td style="background:#8ab87a;height:2px;font-size:0;line-height:0;">&nbsp;</td></tr>

        <!-- WHAT YOU SENT -->
        <tr>
          <td style="background:#ffffff;padding:32px 40px 0;">
            <p style="margin:0 0 18px;font-size:9px;letter-spacing:4px;text-transform:uppercase;color:#8ab87a;border-bottom:1px solid #e4ede1;padding-bottom:10px;">Your Submission</p>
          </td>
        </tr>
        <tr>
          <td style="background:#ffffff;padding:0 40px;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-bottom:1px solid #f0f5ee;">
              <tr>
                <td style="padding:12px 0;width:120px;vertical-align:top;"><p style="margin:0;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#7a9a74;">Service</p></td>
                <td style="padding:12px 0;vertical-align:top;"><span style="display:inline-block;background:#f0f5ee;border:1px solid #c8ddc4;padding:4px 12px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#3d6e38;">${service}</span></td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="background:#ffffff;padding:0 40px 28px;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="padding:12px 0;width:120px;vertical-align:top;"><p style="margin:0;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#7a9a74;">Message</p></td>
                <td style="padding:12px 0;vertical-align:top;"><p style="margin:0;font-size:13px;line-height:1.85;color:#3d4a3a;">${message}</p></td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- WHAT HAPPENS NEXT -->
        <tr>
          <td style="background:#f0f5ee;padding:28px 40px;border-top:1px solid #e4ede1;border-bottom:1px solid #e4ede1;">
            <p style="margin:0 0 16px;font-size:9px;letter-spacing:4px;text-transform:uppercase;color:#8ab87a;">What Happens Next</p>
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="padding:8px 0;vertical-align:top;width:32px;">
                  <span style="font-family:Georgia,serif;font-size:18px;color:#c8ddc4;font-weight:300;">01</span>
                </td>
                <td style="padding:8px 0 8px 12px;vertical-align:top;border-bottom:1px solid #e4ede1;">
                  <p style="margin:0;font-size:12px;font-weight:500;color:#1e3a1a;">Review your requirement</p>
                  <p style="margin:3px 0 0;font-size:11px;color:#7a9a74;line-height:1.7;">Our team will carefully go through your project details.</p>
                </td>
              </tr>
              <tr>
                <td style="padding:8px 0;vertical-align:top;width:32px;">
                  <span style="font-family:Georgia,serif;font-size:18px;color:#c8ddc4;font-weight:300;">02</span>
                </td>
                <td style="padding:8px 0 8px 12px;vertical-align:top;border-bottom:1px solid #e4ede1;">
                  <p style="margin:0;font-size:12px;font-weight:500;color:#1e3a1a;">Free consultation call</p>
                  <p style="margin:3px 0 0;font-size:11px;color:#7a9a74;line-height:1.7;">We'll reach out to understand your goals better.</p>
                </td>
              </tr>
              <tr>
                <td style="padding:8px 0;vertical-align:top;width:32px;">
                  <span style="font-family:Georgia,serif;font-size:18px;color:#c8ddc4;font-weight:300;">03</span>
                </td>
                <td style="padding:8px 0 8px 12px;vertical-align:top;">
                  <p style="margin:0;font-size:12px;font-weight:500;color:#1e3a1a;">Clear proposal & timeline</p>
                  <p style="margin:3px 0 0;font-size:11px;color:#7a9a74;line-height:1.7;">Honest pricing and a delivery plan — no surprises.</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- CTA -->
        <tr>
          <td style="background:#ffffff;padding:28px 40px;text-align:center;">
            <p style="margin:0 0 16px;font-size:12px;color:#7a9a74;letter-spacing:0.5px;">Need a faster reply? Chat with us directly.</p>
            <a href="https://wa.me/919898194788?text=Hi%20Zenovate%2C%20I%20just%20submitted%20a%20contact%20form.%20My%20name%20is%20${encodeURIComponent(name)}."
               style="display:inline-block;background:#8ab87a;color:#1e3a1a;font-size:9px;letter-spacing:3px;text-transform:uppercase;padding:13px 28px;text-decoration:none;font-weight:500;">
              Chat on WhatsApp
            </a>
          </td>
        </tr>

        <!-- FOOTER -->
        <tr>
          <td style="background:#f0f5ee;padding:22px 40px;border-top:1px solid #e4ede1;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td>
                  <p style="margin:0;font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#7a9a74;">Zenovate Technologies &nbsp;·&nbsp; Ahmedabad, India</p>
                  <p style="margin:4px 0 0;font-size:9px;color:#7a9a74;">contact.zenovate@gmail.com &nbsp;·&nbsp; +91 98981 94788</p>
                </td>
                <td align="right" valign="middle">
                  <p style="margin:0;font-size:8px;letter-spacing:1.5px;text-transform:uppercase;color:#c8ddc4;">zenovate.in</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr><td style="background:#1e3a1a;height:4px;font-size:0;line-height:0;">&nbsp;</td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`,
        });

        res.status(201).json({
            success: true,
            message: "Lead Saved & Emails Sent",
            lead,
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};