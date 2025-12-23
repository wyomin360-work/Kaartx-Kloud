import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

interface MarketplaceRequest {
  marketplaceName: string;
  email: string;
  plan: string;
}

export async function sendUserConfirmationEmail(data: MarketplaceRequest): Promise<void> {
  const { marketplaceName, email, plan } = data;

  await transporter.sendMail({
    from: `"Kaartx Kloud" <${process.env.SMTP_USER}>`,
    to: email,
    subject: 'Your Kaartx Kloud Marketplace Request Has Been Received',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Hello,</h2>
        <p>Thank you for submitting your marketplace setup request. Our onboarding team has received your details and will contact you shortly to complete the setup.</p>
        <p>A team member will reach out within 24–48 hours to discuss your requirements and activate your marketplace.</p>
        <h3 style="color: #555;">Details submitted:</h3>
        <ul style="list-style: none; padding: 0;">
          <li><strong>Marketplace Name:</strong> ${marketplaceName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Plan:</strong> ${plan}</li>
        </ul>
        <p style="margin-top: 30px;">Thank you,<br/><strong>Kaartx Kloud Team</strong></p>
      </div>
    `,
  });
}

export async function sendAdminNotificationEmail(data: MarketplaceRequest): Promise<void> {
  const { marketplaceName, email, plan } = data;
  const timestamp = new Date().toISOString();

  await transporter.sendMail({
    from: `"Kaartx Kloud" <${process.env.SMTP_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: 'New Marketplace Setup Request Received',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Marketplace Request</h2>
        <p>A new marketplace setup request was submitted.</p>
        <table style="border-collapse: collapse; width: 100%;">
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Marketplace Name</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${marketplaceName}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>User Email</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Plan</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${plan}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Submission Time</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${timestamp}</td>
          </tr>
        </table>
        <p style="margin-top: 20px;">Please review and schedule a meeting.</p>
      </div>
    `,
  });
}

export async function sendMarketplaceRequestEmails(data: MarketplaceRequest): Promise<void> {
  try {
    await Promise.all([
      sendUserConfirmationEmail(data),
      sendAdminNotificationEmail(data),
    ]);
    console.log(`Emails sent successfully for marketplace: ${data.marketplaceName}`);
  } catch (error) {
    console.error('Error sending emails:', error);
    throw error;
  }
}
