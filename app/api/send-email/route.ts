// app/api/send-email/route.ts
import { NextRequest, NextResponse } from 'next/server';
import * as nodemailer from 'nodemailer';
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

        // Create transporter using environment variables
        const transporter = nodemailer.createTransport({
            service: 'gmail', // You can change this to your email service
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS, // Use App Password for Gmail
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'ambureddy1@gmail.com', // Your email address
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

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Email sent successfully!' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error sending email:', error);

        return NextResponse.json(
            { error: 'Failed to send email. Please try again later.' },
            { status: 500 }
        );
    }
}