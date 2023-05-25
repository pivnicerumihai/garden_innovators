import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function Contact() {
    return (
        <>
            <Header />
            <main className="flex flex-col items-center justify-center py-2 px-4 sm:px-8 lg:px-16 min-h-screen">
                <div className="mt-40 w-full sm:w-3/4 text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-accent">Contact Us</h1>
                    <p className="text-lg text-accent p-10">Thank you for your interest in our garden and landscaping services. We would be delighted to assist you with any inquiries or projects you have in mind. Please feel free to reach out to us using the contact information provided below or by filling out the contact form. We will get back to you promptly.</p>

                    <div className='flex flex-col p-5 mx-10 sm:mx-0 mt-10'>
                        <form className="w-full">
                            <div className="flex flex-wrap justify-between">
                                <div className="w-full sm:w-1/3 p-2">
                                    <label className="text-accent text-lg font-bold m-5" htmlFor="name">Name</label>
                                    <input className="border-2 border-primary rounded-lg p-2 w-full " type="text" id="name" name="name" placeholder="Your name.." />
                                </div>

                                <div className="w-full sm:w-1/3 p-2">
                                    <label className="text-accent text-lg font-bold m-5" htmlFor="email">Email</label>
                                    <input className="border-2 border-primary rounded-lg p-2 w-full " type="email" id="email" name="email" placeholder="Your email.." />
                                </div>

                                <div className="w-full sm:w-1/3 p-2">
                                    <label className="text-accent text-lg font-bold m-5" htmlFor="phone">Phone</label>
                                    <input className="border-2 border-primary rounded-lg p-2 w-full " type="string" id="phone" name="phone" placeholder="Your phone number.." />
                                </div>
                            </div>

                            <div className="p-2">
                                <label className="text-accent text-lg font-bold text-center m-5" htmlFor="subject">Subject</label>
                                <textarea className="border-2 border-primary rounded-lg p-2 w-full h-[200px]" id="subject" name="subject" placeholder="Your message.."></textarea>
                            </div>

                            <input className="border-2 border-primary rounded-lg p-2 w-2/5 m-6 text-accent hover:font-bold hover:cursor-pointer" type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
