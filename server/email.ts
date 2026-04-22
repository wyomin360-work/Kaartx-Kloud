import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtppro.zoho.in",
  port: parseInt(process.env.SMTP_PORT || "465"),
  secure: true,
  auth: {
    user: process.env.SMTP_USER || "noreply@kloud.kaartx.com",
    pass: process.env.SMTP_PASSWORD,
  },
});

interface MarketplaceRequestData {
  marketplaceName: string;
  email: string;
  plan: string;
  billingCycle: string;
}

export async function sendUserAcknowledgmentEmail(
  data: MarketplaceRequestData,
): Promise<void> {
  const { email } = data;

  await transporter.sendMail({
    from: `"Kaartx Kloud" <${process.env.SMTP_USER || "noreply@kloud.kaartx.com"}>`,
    to: email,
    subject: "Your Kaartx Kloud Marketplace Request Has Been Received",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <p>Hi there,</p>
        
        <p>Thank you for submitting your marketplace request!</p>
        
        <p>Our team has received your details and will reach out shortly to understand your business needs and help you begin your Kaartx Kloud setup.</p>
        
        <p><strong>What happens next?</strong></p>
        <ul style="margin: 10px 0; padding-left: 20px;">
          <li>Our team reviews your submitted information</li>
          <li>We schedule a short call to understand your goals</li>
          <li>We configure your marketplace according to your requirements</li>
        </ul>
        
        <p>You do not need to take any additional steps right now. We will contact you soon.</p>
        
        <p style="margin-top: 30px;">Welcome to Kaartx Kloud.<br/>— Team Kaartx<br/>support@kloud.kaartx.com</p>
      </div>
    `,
  });
}

export async function sendAdminNotificationEmail(
  data: MarketplaceRequestData,
): Promise<void> {
  const { marketplaceName, email, plan, billingCycle } = data;
  const timestamp = new Date().toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "long",
  });

  await transporter.sendMail({
    from: `"Kaartx Kloud" <${process.env.SMTP_USER || "noreply@kloud.kaartx.com"}>`,
    to: "support@kloud.kaartx.com",
    subject: "New Marketplace Request – Action Required",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <p>A new marketplace request has been submitted.</p>
        
        <p><strong>Marketplace Name:</strong> ${marketplaceName}<br/>
        <strong>Owner Email:</strong> ${email}<br/>
        <strong>Plan Selected:</strong> ${plan}<br/>
        <strong>Billing Cycle:</strong> ${billingCycle}<br/>
        <strong>Submitted At:</strong> ${timestamp}</p>
        
        <p>Please review this request and proceed with configuration and activation.</p>
      </div>
    `,
  });
}

export async function sendMarketplaceRequestEmails(
  data: MarketplaceRequestData,
): Promise<void> {
  try {
    await Promise.all([
      sendUserAcknowledgmentEmail(data),
      sendAdminNotificationEmail(data),
    ]);
    console.log(
      `Emails sent successfully for marketplace request: ${data.marketplaceName}`,
    );
  } catch (error) {
    console.error("Error sending emails:", error);
    throw error;
  }
}
