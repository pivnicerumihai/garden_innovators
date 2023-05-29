import sgMail from "@sendgrid/mail";

export default async function handler(req, res) {
    let { name, email, phone, subject } = req.body;

    sgMail.setApiKey(process.env.SEND_GRID_API_KEY);

    const msg = {
        to: 'contact@elegance-engineering.co.uk', 
        from: 'contact@elegance-engineering.co.uk',
        subject: "Contact Form Message",
        html: `<p>You have a new contact form submission</p><br>
        <p><strong>Name: </strong> ${name} </p><br>
        <p><strong>Email: </strong> ${email} </p><br>
        <p><strong>Phone: </strong> ${phone} </p><br>
        <p><strong>Message: </strong> ${subject} </p><br>`,
    };

    try {
        await sgMail.send(msg);
        console.log("Message sent");
        res.status(200).json({ status: 'Ok' });
    } catch(err) {
        console.log(err);
        res.status(500).json({ error: 'Error in email sending' });
    }
}
