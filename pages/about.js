import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />

      <main className="flex-grow mt-24 text-accent">
        <section className="mt-16 px-4 md:px-10">
          <div className="container mx-auto flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Our Story
            </h2>
            <div className="flex flex-row">
              <p className=" text-base text-accent">
                Welcome to Elegance Engineered, your premier choice for
                professional gardening services. As a team of dedicated experts,
                we are passionate about transforming outdoor spaces and bringing
                our clients' visions to life.
                <br />
                <br />
                Our mission has always been to provide top-tier landscaping
                solutions while promoting sustainability and beauty. Our team
                possesses a diverse set of skills, including fence & decking,
                artificial grass installation, porcelain patio design, Victorian
                pathway construction, and painting. With these specialized
                capabilities, we are uniquely equipped to handle a broad range
                of garden designs and transformations.
              </p>
            </div>
            <br/>
            <p className=" text-base text-accent ">
              At Elegance Engineered, we believe in providing exceptional
              service, superior craftsmanship, and innovative design solutions.
              Whether you're looking to create a tranquil retreat, a space for
              entertaining, or a practical outdoor area, we promise to exceed
              your expectations.
              <br />
              <br />
              We understand that every garden is unique, which is why we offer
              bespoke services tailored to meet your specific needs and
              preferences. We treat every project, no matter how large or small,
              with the same level of care and attention to detail.{" "}
            </p>

            <p className=" text-base text-accent">
              We invite you to explore our website and learn more about the
              services we offer. Feel free to reach out to us with any questions
              or to schedule a consultation. We look forward to making your
              dream garden a reality.{" "}
            </p>

            <div className="w-full md:w-1/2 lg:w-3/4 p-4 flex flex-col items-center">
              <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/gallery_4.svg"
                alt="Our Values"
                width={800}
                height={400}
              />
              </div>
              <h3 className="text-2xl font-bold mt-4 mb-2">Our Values</h3>
              <p>
                We believe in integrity, professionalism, and a personalized
                approach to every project. Our work is a reflection of our
                commitment to these values.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
