const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(req, res, next) {
  const { name, email, subject, message } = req.body || {};
  const errors = {};
  if (!name || name.trim().length < 2) errors.name = "Name must be at least 2 characters";
  if (!email || !emailRe.test(email)) errors.email = "Enter a valid email";
  if (!subject || subject.trim().length < 3) errors.subject = "Subject must be at least 3 characters";
  if (!message || message.trim().length < 10) errors.message = "Message must be at least 10 characters";
  if (Object.keys(errors).length) {
    return res.status(400).json({ success: false, message: "Validation failed", errors });
  }
  next();
}
