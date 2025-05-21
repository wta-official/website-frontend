const TermsAndConditions = () => {
  return (
    <section className="max-w-4xl mx-auto pt-20 md:pt-24 lg:pt-32 pb-12 px-4 text-white">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

      {/* <p className="mb-4">
        <strong>Effective Date:</strong> May 16, 2025
      </p> */}

      <p className="mb-6">
        Welcome to <strong>Working Talent Agency (WTA)</strong>. By using our
        website, you agree to these Terms and Conditions. Please read them
        carefully.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Use of the Website</h2>
      <p className="mb-6">
        This website is provided solely for informational purposes and to
        showcase the talents represented by WTA. You agree to use this website
        only for lawful purposes.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. Intellectual Property
      </h2>
      <p className="mb-6">
        All content on this website — including images, text, branding, and
        design — is the property of WTA or its clients. You may not copy,
        modify, distribute, or exploit any part of the website without our
        written consent.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Talent Bookings</h2>
      <p className="mb-6">
        You may submit booking inquiries through the platform. However,
        submitting a form does not constitute a confirmed booking. All bookings
        are subject to availability and final confirmation by WTA.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Disclaimers</h2>
      <p className="mb-6">
        WTA makes no guarantees regarding the availability, performance, or
        outcome of any talent booking. We are not liable for any issues that
        occur if communications or transactions take place outside of our
        official booking process.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        5. Prohibited Activities
      </h2>
      <p className="mb-6">Users agree not to:</p>
      <ul className="list-disc ml-6 mb-6">
        <li>Use the platform for illegal purposes</li>
        <li>Attempt to scrape or extract data from the site</li>
        <li>Impersonate any individual or organization</li>
        <li>Interfere with the site's performance or security</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Third-Party Links</h2>
      <p className="mb-6">
        This website may contain links to third-party websites. We are not
        responsible for the content or privacy practices of those sites.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Modifications</h2>
      <p className="mb-6">
        WTA reserves the right to update or change these terms at any time.
        Continued use of the site constitutes acceptance of those changes.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Contact</h2>
      <p className="mb-2">
        If you have any questions about these Terms and Conditions, please
        contact us at:
      </p>
      <p>
        <a
          href="mailto:hello@workingtalentagency.com"
          className="text-blue-600 underline"
        >
          hello@workingtalentagency.com{' '}
        </a>
      </p>
    </section>
  );
};

export default TermsAndConditions;
