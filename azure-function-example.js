// Azure Function Example: send-contact-email
// This is an example of what your Azure Function should look like
// Deploy this to Azure Functions and set AZURE_CONTACT_FUNCTION_URL in your .env.local

const { app } = require('@azure/functions');
const nodemailer = require('nodemailer');

// Option 1: Using SendGrid (recommended for Azure)
// npm install @sendgrid/mail
// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Option 2: Using SMTP (works with any email provider)
// npm install nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.office365.com', // Office 365, Gmail, etc.
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER, // e.g., noreply@anuritinnovation.com
    pass: process.env.SMTP_PASSWORD,
  },
});

app.http('sendContactEmail', {
  methods: ['POST'],
  authLevel: 'function', // Or 'anonymous' if you want to handle auth in your function
  handler: async (request, context) => {
    try {
      const body = await request.json();
      const { to, from, replyTo, subject, name, email, interest, message } = body;

      if (!to || !from || !message) {
        return {
          status: 400,
          jsonBody: { error: 'Missing required fields: to, from, message' },
        };
      }

      const html = `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${name || '—'}</p>
        <p><strong>Email:</strong> ${email || from}</p>
        <p><strong>Interest:</strong> ${interest || '—'}</p>
        <p><strong>Message:</strong></p>
        <p>${(message || '').replace(/\n/g, '<br />')}</p>
      `;

      // Option 1: SendGrid
      // const msg = {
      //   to: to,
      //   from: process.env.FROM_EMAIL || 'noreply@anuritinnovation.com',
      //   replyTo: replyTo || from,
      //   subject: subject,
      //   html: html,
      // };
      // await sgMail.send(msg);

      // Option 2: SMTP (Nodemailer)
      await transporter.sendMail({
        from: `"Anurit Innovation Contact" <${process.env.FROM_EMAIL || 'noreply@anuritinnovation.com'}>`,
        to: to,
        replyTo: replyTo || from,
        subject: subject,
        html: html,
      });

      return {
        status: 200,
        jsonBody: { success: true, message: 'Email sent successfully' },
      };
    } catch (error) {
      context.log.error('Error sending email:', error);
      return {
        status: 500,
        jsonBody: { error: 'Failed to send email', details: error.message },
      };
    }
  },
});
