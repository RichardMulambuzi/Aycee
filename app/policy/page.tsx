import ContactUs from "../contact-us/contactus";

/* eslint-disable react/no-unescaped-entities */
const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto py-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-gray-700 mb-4">
        Privacy Policy for Aycee and Tee's Investments
      </p>
      <p className="text-gray-700 mb-4">
        At Aycee and Tee's Investments, we respect your privacy and are
        committed to protecting your personal information. This Privacy Policy
        explains how we collect, use, disclose, and safeguard your information
        when you use our website.
      </p>
      <p className="text-gray-700 mb-4">
        <strong>Information We Collect:</strong>
      </p>
      <p className="text-gray-700 mb-4">
        Personal Information: When you make inquiries, sign up for workshops, or
        place orders, we may collect personal information such as your name,
        email address, phone number, and delivery address.
      </p>
      {/* Add the rest of your privacy policy content here */}
      {/* ... */}
      <div>
        <ContactUs />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
