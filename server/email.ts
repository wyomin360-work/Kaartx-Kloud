import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtppro.zoho.in',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: true,
  auth: {
    user: process.env.SMTP_USER || 'noreply@kloud.kaartx.com',
    pass: process.env.SMTP_PASSWORD,
  },
});

interface MarketplaceRequestData {
  marketplaceName: string;
  email: string;
  plan: string;
}

export async function sendUserAcknowledgmentEmail(data: MarketplaceRequestData): Promise<void> {
  const { email } = data;

  await transporter.sendMail({
    from: `"Kaartx Kloud" <${process.env.SMTP_USER || 'noreply@kloud.kaartx.com'}>`,
    to: email,
    subject: 'Your Marketplace Request Has Been Received',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1E2A5E;">Thank You for Your Request</h2>
        <p>Your request has been received. Our team will activate your marketplace shortly.</p>
        <p>We will contact you within 24-48 hours to complete your marketplace setup.</p>
        <p style="margin-top: 30px;">Best regards,<br/><strong>Kaartx Kloud Team</strong></p>
      </div>
    `,
  });
}

export async function sendAdminNotificationEmail(data: MarketplaceRequestData): Promise<void> {
  const { marketplaceName, email, plan } = data;
  const timestamp = new Date().toISOString();

  await transporter.sendMail({
    from: `"Kaartx Kloud" <${process.env.SMTP_USER || 'noreply@kloud.kaartx.com'}>`,
    to: 'support@kaartx.com',
    subject: 'New Marketplace Setup Request',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1E2A5E;">New Marketplace Request</h2>
        <p>A new marketplace setup request has been submitted.</p>
        <table style="border-collapse: collapse; width: 100%; margin-top: 20px;">
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Marketplace Name</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${marketplaceName}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Email</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Plan</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${plan}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Submitted</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${timestamp}</td>
          </tr>
        </table>
        <p style="margin-top: 20px;">Please review and manually activate this marketplace.</p>
      </div>
    `,
  });
}

export async function sendMarketplaceRequestEmails(data: MarketplaceRequestData): Promise<void> {
  try {
    await Promise.all([
      sendUserAcknowledgmentEmail(data),
      sendAdminNotificationEmail(data),
    ]);
    console.log(`Emails sent successfully for marketplace request: ${data.marketplaceName}`);
  } catch (error) {
    console.error('Error sending emails:', error);
    throw error;
  }
}
