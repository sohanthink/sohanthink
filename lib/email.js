import { createTransport } from "nodemailer";

// Create transporter function to ensure environment variables are loaded
const createTransporter = () => {
  // Debug: Log environment variables (without password)
  console.log("Email config:", {
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    user: process.env.EMAIL_USER,
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    hasPassword: !!process.env.EMAIL_PASS,
  });

  if (
    !process.env.EMAIL_HOST ||
    !process.env.EMAIL_USER ||
    !process.env.EMAIL_PASS
  ) {
    throw new Error("Missing required email environment variables");
  }

  return createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT) || 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    // Add timeout and debug options
    connectionTimeout: 10000, // 10 seconds
    greetingTimeout: 10000,
    socketTimeout: 10000,
    debug: true, // Enable debug output
    logger: true, // Enable logging
    // Fix for expired certificate
    tls: {
      rejectUnauthorized: false,
    },
  });
};

// Verify transporter configuration
export const verifyEmailConfig = async () => {
  try {
    const transporter = createTransporter();
    console.log("Attempting to verify email configuration...");
    await transporter.verify();
    console.log("Email configuration is valid");
    return true;
  } catch (error) {
    console.error("Email configuration error:", error);
    console.error("Error details:", {
      message: error.message,
      code: error.code,
      command: error.command,
      responseCode: error.responseCode,
      response: error.response,
    });
    return false;
  }
};

// Send contact form email
export const sendContactEmail = async (formData) => {
  const { name, email, subject, message } = formData;
  const transporter = createTransporter();

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    replyTo: email,
    subject: `New Contact Form Submission: ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #00c566;">New Contact Form Submission</h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Contact Details</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
        </div>
        
        <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
          <h3 style="margin-top: 0; color: #333;">Message</h3>
          <p style="line-height: 1.6; color: #555;">${message.replace(
            /\n/g,
            "<br>"
          )}</p>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 8px; font-size: 12px; color: #666;">
          <p><strong>Sent from:</strong> ${
            process.env.NEXT_PUBLIC_SITE_URL || "sohanthink.com"
          }</p>
          <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
        </div>
      </div>
    `,
    text: `
New Contact Form Submission

Contact Details:
- Name: ${name}
- Email: ${email}
- Subject: ${subject}

Message:
${message}

Sent from: ${process.env.NEXT_PUBLIC_SITE_URL || "sohanthink.com"}
Timestamp: ${new Date().toLocaleString()}
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Email sending failed:", error);
    throw error;
  }
};

// Send notification email to sender
export const sendConfirmationEmail = async (formData) => {
  const { name, email, subject } = formData;
  const transporter = createTransporter();

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: `Thank you for contacting SohanThink - ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #00c566;">Thank you for reaching out!</h2>
        
        <p>Dear ${name},</p>
        
        <p>Thank you for contacting me through my portfolio website. I have received your message and will get back to you as soon as possible.</p>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Your Message Details</h3>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
        </div>
        
        <p>In the meantime, you can:</p>
        <ul>
          <li>Check out my <a href="${
            process.env.NEXT_PUBLIC_SITE_URL || "https://sohanthink.com"
          }/portfolio" style="color: #00c566;">portfolio</a> for more examples of my work</li>
          <li>Visit my <a href="https://github.com/sohanthink" style="color: #00c566;">GitHub</a> to see my latest projects</li>
          <li>Connect with me on <a href="https://linkedin.com/in/sohanthink" style="color: #00c566;">LinkedIn</a></li>
        </ul>
        
        <p>Best regards,<br>
        <strong>Muhammad Sohan Mollah</strong><br>
        Full Stack Developer</p>
        
        <div style="margin-top: 30px; padding: 15px; background-color: #e9ecef; border-radius: 8px; font-size: 12px; color: #666;">
          <p>This is an automated response. Please do not reply to this email.</p>
        </div>
      </div>
    `,
    text: `
Thank you for reaching out!

Dear ${name},

Thank you for contacting me through my portfolio website. I have received your message and will get back to you as soon as possible.

Your Message Details:
- Subject: ${subject}
- Submitted: ${new Date().toLocaleString()}

In the meantime, you can:
- Check out my portfolio: ${
      process.env.NEXT_PUBLIC_SITE_URL || "https://sohanthink.com"
    }/portfolio
- Visit my GitHub: https://github.com/sohanthink
- Connect with me on LinkedIn: https://linkedin.com/in/sohanthink

Best regards,
Muhammad Sohan Mollah
Full Stack Developer

This is an automated response. Please do not reply to this email.
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Confirmation email sent successfully:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Confirmation email sending failed:", error);
    // Don't throw error for confirmation email - it's not critical
    return { success: false, error: error.message };
  }
};
