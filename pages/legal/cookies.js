import Head from 'next/head'

export default function CookiesPolicy() {
  return (
    <div className="mx-auto px-4 sm:px-6 md:px-8">
      <Head>
        <title>Cookies Policy</title>
      </Head>
      <h1 className="text-2xl font-bold mb-4">Cookies Policy</h1>
      <div className="space-y-6 text-lg">
        <p><strong>1. Introduction</strong><br/>
        Our website uses cookies to enhance and personalize your browsing experience.</p>

        <p><strong>2. What are Cookies?</strong><br/>
        Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.</p>

        <p><strong>3. How We Use Cookies</strong><br/>
        We use cookies to understand how you use our website, to remember your preferences, and to enhance certain aspects of your user experience.</p>

        <p><strong>4. Your Choices Regarding Cookies</strong><br/>
        You can choose to disable cookies on our site, but it may affect the functionality of the site and your user experience.</p>

        <p><strong>5. Changes to This Cookies Policy</strong><br/>
        We may update our Cookies Policy from time to time. We will notify you of any changes by posting the new Cookies Policy on this page.</p>

        <p><strong>6. Contact Information</strong><br/>
        If you have any questions about this Cookies Policy, please contact us at [Your Contact Information].</p>
      </div>
    </div>
  )
}
