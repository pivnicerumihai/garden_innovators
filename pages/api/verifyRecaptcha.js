// pages/api/verifyRecaptcha.js

import fetch from 'isomorphic-unfetch';

export default async function handler(req, res) {
  const { captchaValue } = req.body;

  // Your Secret Key
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  // Verify URL
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaValue}`;

  // Make a request to verify URL
  const response = await fetch(verifyUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  // Parse the response
  const data = await response.json();

  // Check if reCAPTCHA was successful
  if (data.success) {
    res.status(200).json({ message: "reCAPTCHA passed" });
  } else {
    res.status(400).json({ message: "reCAPTCHA failed" });
  }
}
