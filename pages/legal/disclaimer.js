import Head from 'next/head'

export default function LegalDisclaimer() {
  return (
    <div className="mx-auto px-4 sm:px-6 md:px-8">
      <Head>
        <title>Legal Disclaimer</title>
      </Head>
      <h1 className="text-2xl font-bold mb-4">Legal Disclaimer</h1>
      <div className="space-y-6 text-lg">
        <p><strong>1. Introduction</strong><br/>
        The information provided by our company on our website is for general informational purposes only.</p>

        <p><strong>2. Disclaimers</strong><br/>
        All information on the site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the site.</p>

        <p><strong>3. External Links Disclaimer</strong><br/>
        The site may contain links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us.</p>

        <p><strong>4. Professional Disclaimer</strong><br/>
        The site cannot and does not contain professional advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice.</p>

        <p><strong>5. Contact Information</strong><br/>
        If you have any questions about this Legal Disclaimer, please contact us at [Your Contact Information].</p>
      </div>
    </div>
  )
}
