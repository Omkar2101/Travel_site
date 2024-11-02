import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logoo.svg';
import Sidebar from '../components/Sidebar';

function PrivacyPolicy() {
  return (
    <>
    <div className='overflow-x-hidden'>
    <div className='bg-zinc-800 relative text-white w-screen p-12 h-[250px]'>
        <div className='flex items-center justify-between'>
          <div className='h-[50px] w-[70px]'>
            <img src={Logo} alt='Logo' />
          </div>
        </div>
        <div className='z-20 absolute top-8 right-10'>
          <Sidebar />
        </div>
        <div className='text-orange-500 mt-6'>
          <h1 className='text-2xl'>Privacy Policy</h1>
        </div>
      </div>
      <div className="flex font-quicksand justify-center items-center min-h-screen bg-gray-100 px-4 py-8">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden p-8 md:p-10 lg:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">Privacy Policy</h2>
          
          <div className="text-gray-700 text-base md:text-lg space-y-4">
            <p>
              Bonjour Inde Voyage is committed to maintaining the privacy of personal information that you provide to us when using the Bonjour Inde Voyage website. This Privacy Policy describes how we treat personal information received about you when you visit 
              <span className='text-blue-600 underline cursor-pointer'>
                <a href="https://www.bonjourinde.com" target="_blank" rel="noopener noreferrer"> www.bonjourinde.com</a>
              </span>.
              We may make content or services from other websites, including our co-branded websites, available to you from links located on our site. These other websites are not subject to this Privacy Policy, so we recommend reviewing each site’s privacy policy to determine how it protects your privacy.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mt-6">Privacy Policy Promise</h3>
            <p>
              While information is the cornerstone of our ability to provide superior service, our most important asset is our clients’ trust. Here’s our promise to our individual customers:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>We will safeguard any information our customers share with us with strict standards of security and confidentiality.</li>
              <li>We will limit the collection and use of customer information to the minimum required to deliver superior service.</li>
              <li>Only authorized employees trained in handling customer information will have access to that information.</li>
              <li>We will not reveal customer information to any external organization unless we have prior consent or are required by law.</li>
              <li>We will maintain control over the confidentiality of our customer information.</li>
              <li>We will require third-party services to conform to our privacy standards.</li>
              <li>We will keep customer files accurate and up-to-date and provide access to information upon request.</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-semibold mt-6">Information We Collect</h3>
            <p>
              When you register, we may collect personally identifiable information such as your name, address, telephone number, and email address. We do not knowingly collect information from children under 13, and users under 18 should not provide us personal information without consent from a parent/guardian.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mt-6">How We Use Information Collected</h3>
            <p>
              We may use your information to send notifications, improve our services, personalize content, and contact you with special offers. We may also disclose information to enforce our Terms of Use or as required by law.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mt-6">Cookies</h3>
            <p>
              We use cookies to help visitors navigate our site efficiently. A cookie is stored on your computer’s memory to enhance your site experience.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mt-6">Security</h3>
            <p>
              We maintain safeguards to protect the security of the information collected. Please note that Internet transmission involves risks, and by using our site, you agree to these risks.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mt-6">Policy Modifications</h3>
            <p>
              We may change this Privacy Policy from time to time. We’ll post updates here and ensure previous terms remain valid for your information unless consent is given for future policy changes.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mt-6">Comments and Questions</h3>
            <p>
              If you have any questions or concerns about our Privacy Policy, please <Link to="/contact" className='text-blue-600 underline cursor-pointer'>contact us</Link>.
            </p>
          </div>
        </div>
      </div>

    </div>
      
      
      
    </>
  );
}

export default PrivacyPolicy;
