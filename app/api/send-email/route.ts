// app/api/send-email/route.ts
import { NextRequest, NextResponse } from 'next/server';
import * as nodemailer from 'nodemailer';

const parseBoolean = (value: string | undefined, defaultValue: boolean) => {
    if (!value) return defaultValue;
    return value.toLowerCase() === 'true';
};

export async function POST(request: NextRequest) {
    try {
        const { name, email, subject, message } = await request.json();

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        const smtpHost = process.env.SMTP_HOST?.trim() || 'smtp.gmail.com';
        const smtpPort = Number(process.env.SMTP_PORT || 587);
        const smtpSecure = parseBoolean(process.env.SMTP_SECURE, smtpPort === 465);
        const smtpRequireTLS = parseBoolean(process.env.SMTP_REQUIRE_TLS, smtpPort === 587);
        const smtpUser = (process.env.SMTP_USER || process.env.EMAIL_USER || '').trim();
        const smtpPass = (process.env.SMTP_PASS || process.env.EMAIL_PASS || '').trim();
        const smtpFrom = (process.env.SMTP_FROM || smtpUser).trim();
        const smtpTo = (process.env.SMTP_TO || 'ambureddy1@gmail.com').trim();

        if (!Number.isFinite(smtpPort)) {
            return NextResponse.json(
                { error: 'Server email config is invalid: SMTP_PORT must be a number.' },
                { status: 500 }
            );
        }

        if (!smtpUser || !smtpPass) {
            return NextResponse.json(
                { error: 'Server email config is missing SMTP_USER/SMTP_PASS.' },
                { status: 500 }
            );
        }

        // Create transporter using explicit SMTP settings (works with Gmail STARTTLS on 587).
        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: smtpSecure,
            requireTLS: smtpRequireTLS,
            auth: {
                user: smtpUser,
                pass: smtpPass,
            },
        });

        // Email content
        const mailOptions = {
            from: smtpFrom,
            to: smtpTo,
            replyTo: email,
            subject: `Portfolio Contact: ${subject}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a365d; border-bottom: 2px solid #00d4ff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1a365d; margin-top: 0;">Contact Details:</h3>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #666; width: 100px;"><strong>Name:</strong></td>
                <td style="padding: 8px 0; color: #333;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666;"><strong>Email:</strong></td>
                <td style="padding: 8px 0; color: #333;">
                  <a href="mailto:${email}" style="color: #00d4ff; text-decoration: none;">
                    ${email}
                  </a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666;"><strong>Subject:</strong></td>
                <td style="padding: 8px 0; color: #333;">${subject}</td>
              </tr>
            </table>
          </div>

          <div style="background: #f0f8ff; padding: 20px; border-radius: 8px; border-left: 4px solid #00d4ff;">
            <h3 style="color: #1a365d; margin-top: 0;">Message:</h3>
            <p style="color: #333; line-height: 1.6; margin: 0;">
              ${message.replace(/\n/g, '<br>')}
            </p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center;">
            <p style="color: #666; font-size: 12px;">
              This email was sent from your portfolio contact form.
            </p>
          </div>
        </div>
      `,
        };

        // Verify auth/connectivity first so config issues fail with a clear message.
        await transporter.verify();

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Email sent successfully!' },
            { status: 200 }
        );

    } catch (error: unknown) {
        console.error('Error sending email:', error);

        const maybeError = error as { code?: string };
        const errorMessage = maybeError.code === 'EAUTH'
            ? 'SMTP authentication failed. Check app password and SMTP_USER.'
            : 'Failed to send email. Please try again later.';

        return NextResponse.json(
            { error: errorMessage },
            { status: 500 }
        );
    }
}
