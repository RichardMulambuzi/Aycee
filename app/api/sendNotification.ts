import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Extract necessary data from the request
    const { type, data } = req.body;

    // Create a nodemailer transporter using your email service credentials
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "your-email@example.com",
        pass: "your-email-password",
      },
    });

    // Define email content
    let mailOptions;

    if (type === "investment") {
      // Handle stakeholder investment email
      const { name, email } = data;
      mailOptions = {
        from: "your-email@example.com",
        to: "admin@example.com", // Admin's email address for investments
        subject: "New Stakeholder Investment",
        text: `New stakeholder ${name} (${email}) has invested.`,
      };
    } else if (type === "delivery") {
      // Handle delivery information email
      const { pickupLocation, deliveryOption } = data;
      mailOptions = {
        from: "your-email@example.com",
        to: "transporter@example.com", // Transporter's email address for deliveries
        subject: "New Delivery Information",
        text: `New delivery information:\n\nPickup Location: ${pickupLocation}\nDelivery Option: ${deliveryOption}`,
      };
    } else {
      throw new Error("Invalid message type");
    }

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Email could not be sent" });
  }
}
