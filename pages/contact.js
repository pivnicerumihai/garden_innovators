import { useState } from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Head from "next/head";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
  });
  const [captchaValue, setCaptchaValue] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch('/api/sendMail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            subject: e.target.subject.value,
            captcha: captchaValue
        })
    });
    const data = await response.json();

    // Clear the form and the captcha
    if (data.success) {
        setCaptchaValue(true);
        e.target.reset();
    }
}

  const handleCaptchaResponseChange = (value) => {
    setCaptchaValue(value);
  };
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center py-2 px-4 sm:px-8 lg:px-16 min-h-screen">
        <div className="mt-40 w-full sm:w-3/4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-accent">
            Contact Us
          </h1>
          <p className="text-lg text-accent p-10">
            Thank you for your interest in our garden and landscaping services.
            We would be delighted to assist you with any inquiries or projects
            you have in mind. Please feel free to reach out to us using the
            contact information provided below or by filling out the contact
            form. We will get back to you promptly.
          </p>

          <div className="flex flex-col p-5 mx-10 sm:mx-0 mt-10">
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="flex flex-wrap justify-between">
                <div className="w-full sm:w-1/3 p-2">
                  <label
                    className="text-accent text-lg font-bold m-5"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="border-2 border-primary rounded-lg p-2 w-full"
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name.."
                  />
                </div>

                <div className="w-full sm:w-1/3 p-2">
                  <label
                    className="text-accent text-lg font-bold m-5"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="border-2 border-primary rounded-lg p-2 w-full"
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="Your email.."
                  />
                </div>

                <div className="w-full sm:w-1/3 p-2">
                  <label
                    className="text-accent text-lg font-bold m-5"
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <input
                    className="border-2 border-primary rounded-lg p-2 w-full"
                    type="string"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    placeholder="Your phone number.."
                  />
                </div>
              </div>

              <div className="p-2">
                <label
                  className="text-accent text-lg font-bold text-center m-5"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <textarea
                  className="border-2 border-primary rounded-lg p-2 w-full h-[200px]"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={(e) =>
                    setForm({ ...form, subject: e.target.value })
                  }
                  placeholder="Your message.."
                ></textarea>
              </div>
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={handleCaptchaResponseChange}
              />

              <input
                className="border-2 border-primary rounded-lg p-2 w-2/5 m-6 text-accent hover:font-bold hover:cursor-pointer"
                type="submit"
                value="Send"
              />
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
