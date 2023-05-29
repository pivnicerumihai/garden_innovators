import axios from 'axios';
import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SEND_GRID_API_KEY);

export default async function handler(req, res) {
    const { name, email, phone, subject, captcha } = req.body;

    // Verify the captcha
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captcha}`;
    const response = await axios.post(verificationURL);
    const captchaIsValid = response.data.success;

    console.log(captchaIsValid)
    if (!captchaIsValid) {
        res.status(400).json({ message: 'Invalid captcha.' });
        return;
    }

    // Send the email
    const msg = {
        to: 'contact@elegance-engineering.co.uk',
        from: 'contact@elegance-engineering.co.uk',
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${subject}`,
    };

    try {
        await sgMail.send(msg);
        res.status(200).json({ success: true });
    } catch (error) {
        console.error(error);
        if (error.response) {
            console.error(error.response.body)
        }
        res.status(500).json({ success: false });
    }
}
