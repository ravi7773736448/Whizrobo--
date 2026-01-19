import React from "react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-12 lg:px-16 font-sans">
      
      {/* Page Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-12">
        Privacy Policy
      </h1>

      {/* Content Section */}
      <div className="space-y-8 text-gray-700 leading-relaxed">

        <p>
          This privacy policy (“Policy”) forms an electronic contract within the provisions of the Information Technology Act, 2000 (“IT Act”) and the rules made thereunder. This Policy is a legally binding document between You and WHIZROBO. The terms of this Policy will be effective upon Your acceptance and will govern the relationship between You and WHIZROBO for Your use of the Website.
        </p>

        <p>
          By visiting this Website, the User agrees to be bound by the terms and conditions of this Policy. If a User does not agree with the terms, they should refrain from using the Website.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">1. Collection of Information</h2>
        <p>
          The Website may collect the following information from Users:
        </p>

        <h3 className="text-xl font-semibold mt-4">1.1 Personal Information:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Name</li>
          <li>Phone number</li>
          <li>Gender</li>
          <li>Date of birth</li>
          <li>Address</li>
          <li>Email ID</li>
          <li>Social media information if registered via social networks</li>
          <li>IP Address</li>
          <li>Other personal data as per IT Act rules</li>
          <li>Any other info required for accessing the Website</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">1.2 Non-Personal Information:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Internet/telecom service provider details</li>
          <li>Location of the User</li>
          <li>Browser type</li>
          <li>Other info required to access the Website</li>
          <li>User-generated content uploaded for projects or competitions</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">2. Representation and Warranties</h2>
        <p>
          Users represent and warrant that all information provided is true, correct, and authorized for use. Users agree to indemnify WHIZROBO in case of any breach of this Policy.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">3. Purpose and Use of Information</h2>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Provide info about new products and services</li>
          <li>Improve the Website and offerings</li>
          <li>Conduct research and surveys</li>
          <li>Ensure security of personal data</li>
          <li>Administer user accounts</li>
          <li>Communicate important updates</li>
          <li>Send verification messages</li>
          <li>Other purposes as deemed fit by WHIZROBO</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">4. Sharing of Information</h2>
        <p>
          WHIZROBO may share information with affiliates, employees, third parties, or social platforms for operational, safety, legal, and promotional purposes, subject to compliance with reasonable data protection standards.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">5. Third Party Website Links</h2>
        <p>
          The Website may contain links to third-party websites. WHIZROBO is not responsible for the privacy practices or content of these websites.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">6. Protection of Information</h2>
        <p>
          WHIZROBO employs security measures to protect User information. However, Users acknowledge that no method of transmission over the internet is 100% secure.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">7. Withdrawal of Information</h2>
        <p>
          Users can withdraw information at any time by contacting the grievance officer via email.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">8. Grievance Redressal</h2>
        <p>
          For privacy complaints, Users may contact:
          <br />
          <strong>Email:</strong> <a href="mailto:info@whizrobo.com" className="text-indigo-600 hover:underline">info@whizrobo.com</a>
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">9. Video Content</h2>
        <p>
          Video content is hosted on AWS Cloud Services and adheres to the AWS Privacy Policy.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">10. Changes to Policy</h2>
        <p>
          WHIZROBO reserves the right to update this Policy at any time. Changes take effect immediately upon posting on the Website.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
