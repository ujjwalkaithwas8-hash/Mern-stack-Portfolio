import mongoose from "mongoose";
import nodemailer from "nodemailer";
import Message from "../models/Message.js";

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

export async function sendContact(req, res) {
  const { name, email, subject, message } = req.body;
  try {
    if (mongoose.connection.readyState === 1) {
      await Message.create({ name, email, subject, message });
    }

    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      });
      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
        to: process.env.MAIL_TO || process.env.SMTP_USER,
        replyTo: email,
        subject: `[Portfolio] ${subject}`,
        html: `<h3>New message from ${esc(name)}</h3><p><b>Email:</b> ${esc(email)}</p><p>${esc(message).replace(/\n/g, "<br/>")}</p>`,
      });
    } else {
      console.warn("SMTP not configured - email skipped.");
    }

    res.status(201).json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    console.error("Contact error:", err.message);
    res.status(500).json({ success: false, message: "Could not send message. Please try again later." });
  }
}
