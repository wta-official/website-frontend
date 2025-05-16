import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
};

const PrivacyPolicy = () => {
  return (
    <section className="max-w-4xl mx-auto pt-20 md:pt-24 lg:pt-32 pb-12 px-4 text-white">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      {/* <p className="mb-4">
        <strong>Effective Date:</strong> May 16, 2025
      </p> */}

      <p className="mb-6">
        Welcome to <strong>Working Talent Agency (WTA)</strong>. We are
        committed to protecting the privacy of all visitors and users of our
        platform. This Privacy Policy outlines how we collect, use, disclose,
        and safeguard your personal information when you interact with us.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        1. Information We Collect
      </h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Full name</li>
        <li>Email address</li>
        <li>Phone number</li>
      </ul>
      <p className="mb-6">
        We may also collect non-personal information like browser type, device
        details, and pages visited to improve your experience.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. How We Use Your Information
      </h2>
      <ul className="list-disc ml-6 mb-4">
        <li>To communicate with you</li>
        <li>To respond to inquiries and support requests</li>
        <li>To promote and represent talents</li>
        <li>To improve our website and services</li>
        <li>To analyze site usage and user behavior</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        3. Analytics & Tracking
      </h2>
      <p className="mb-6">
        We may use tools such as Google Analytics to help us understand user
        behavior. These tools may collect technical data like device type,
        location, and time spent on the site. You can manage your preferences
        through browser settings.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        4. Sharing Your Information
      </h2>
      <p className="mb-6">
        We don’t sell your data. However, we may share your data with
        third-party services like hosting platforms, analytics tools, or email
        systems that help us operate efficiently.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Data Retention</h2>
      <p className="mb-6">
        Your data is stored only as long as necessary for the purposes outlined
        in this policy, unless otherwise required by law.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        6. International Users
      </h2>
      <p className="mb-6">
        If you’re accessing our services from outside Nigeria, be aware that
        your data may be processed in countries with different data protection
        laws.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Your Rights</h2>
      <p className="mb-6">
        You may have the right to access, update, or delete your data, or
        withdraw consent. To make a request, email us at{' '}
        <a
          href="mailto:wta.officaial@gmail.com"
          className="text-blue-600 underline"
        >
          wta.officaial@gmail.com
        </a>
        .
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Security</h2>
      <p className="mb-6">
        We use appropriate security measures to protect your data. However, no
        method of transmission over the internet is 100% secure.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">9. Children’s Privacy</h2>
      <p className="mb-6">
        Our platform is not intended for children under 13. We do not knowingly
        collect personal information from children.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        10. Changes to This Policy
      </h2>
      <p className="mb-6">
        We may update this policy. The latest version will always be available
        on our site with an updated effective date.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">11. Contact Us</h2>
      <p className="mb-2">
        For any questions about this Privacy Policy or your data, reach out to
        us at:
      </p>
      <p>
        <a
          href="mailto:wta.officaial@gmail.com"
          className="text-blue-600 underline"
        >
          wta.officaial@gmail.com
        </a>
      </p>
    </section>
  );
};

export default PrivacyPolicy;
