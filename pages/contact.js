import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function Contact() {

    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Header/>
           <div className="mt-36 w-3/4">
           <h1 className="text-3xl font-bold text-accent p-2 text-center">Contact Us</h1>
              <p className=" text-lg text-accent p-10">Thank you for your interest in our garden and landscaping services. We would be delighted to assist you with any inquiries or projects you have in mind. Please feel free to reach out to us using the contact information provided below or by filling out the contact form. We will get back to you promptly.</p>
            <div className='flex flex-col  p-5 mx-10  h-[500px] mt-10'>
           
        <form className="flex flex-col items-center">
            <div className="flex flex-row">
                <div className="m-5">
            <label className="text-accent text-lg font-bold m-2" htmlFor="name">Name</label>
            
            <input className="border-2 border-[#79b473] rounded-3xl p-2 w-full " type="text" id="name" name="name" placeholder="Your name.."/>
            </div>
            <div className="m-5">
             <label className="text-accent text-lg font-bold m-2" htmlFor="email">Email</label>
            <input className="border-2 border-[#79b473] rounded-3xl p-2 w-full " type="email" id="email" name="email" placeholder="Your email.."/>
            </div>
           </div>
           <div className="m-5">
            <label className="text-accent text-lg font-bold m-5" htmlFor="subject">Subject</label>
            <textarea className="border-2 border-[#79b473] rounded-3xl p-2" id="subject" name="subject" placeholder="Write something.."></textarea>  
                </div>
                <input className="border-2 border-[#79b473] rounded-3xl p-2 w-2/5" type="submit" value="Submit"/>
        </form>
        </div>
        </div>
        <Footer/>
        </div>
    )
}
