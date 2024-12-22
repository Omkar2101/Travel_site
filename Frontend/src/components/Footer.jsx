import { FaFacebookF, FaGoogle, FaInstagram, FaYoutube } from 'react-icons/fa';
import Logo from "../assets/Logoo.svg";

const Footer = () => {
  return (
    <footer className="bg-zinc-800 w-screen text-white py-8 font-quicksand">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:flex-wrap justify-between space-y-8 md:space-y-0">
          
          {/* Logo and Description */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
            <div className="mb-4">
              <img src={Logo} alt="Travel Company Logo" className="w-32" />
            </div>
            <h2 className="text-orange-500 text-3xl font-bold mb-4">
              Bonjour Inde Voyages
            </h2>
            <p className="mb-4 text-gray-400">
              Discover India with Bonjour Inde Voyages. We offer curated travel experiences that bring you closer to the wonders of the globe.
            </p> 
            <h3 className="font-bold mb-2">Subscribe for Travel Deals</h3>
            <div className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 mb-2 sm:mb-0 sm:mr-2 w-full sm:w-auto rounded-l-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
          
          {/* Popular Destinations */}
          <div className="w-full md:w-1/2 lg:w-1/5 mb-8 md:mb-0">
            <h3 className="font-bold mb-4 text-orange-500 text-lg">Popular Destinations</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Jaipur, Rajasthan</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Delhi, India</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Jodhpur, Rajasthan</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Udaipur, Rajasthan</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Agra, Uttar Pradesh</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/2 lg:w-1/5 mb-8 md:mb-0">
            <h3 className="font-bold mb-4 text-orange-500 text-lg">Get In Touch</h3>
            <p className="mb-2">support@wanderlustvoyages.com</p>
            <p className="mb-2">inquiries@wanderlustvoyages.com</p>
            <h3 className="font-bold text-orange-500 mb-2 text-lg">Call Us</h3>
            <p className="mb-2">Phone: +91 9876543210</p>
            <p className="mb-2">Toll Free: 1800 789 012</p>

            {/* Social Media Links */}
            <div className="mt-4">
              <h3 className="font-bold mb-4 text-lg">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-orange-500 hover:text-white transition-colors">
                  <FaFacebookF size={24} />
                </a>
                <a href="#" className="text-orange-500 hover:text-white transition-colors">
                  <FaGoogle size={24} />
                </a>
                <a href="#" className="text-orange-500 hover:text-white transition-colors">
                  <FaInstagram size={24} />
                </a>
                <a href="#" className="text-orange-500 hover:text-white transition-colors">
                  <FaYoutube size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Address and Map */}
          <div className="w-full md:w-1/2 lg:w-1/5 flex flex-col">
            <div>
              <h3 className="font-bold mb-4 text-orange-500 text-lg">Visit Us</h3>
              <p className="text-gray-400 mb-4">
                456 Explorer's Lane, Near Traveler's Square, Jaipur, Rajasthan, India
              </p>
            </div>

            <div className="w-full h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.766328400472!2d75.7815589148967!3d26.912434983062684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db77f6b1bbcd5%3A0x5f539d85cf3c1c7f!2sTraveler&#39;s%20Square%2C%20Jaipur%2C%20Rajasthan%20302001%2C%20India!5e0!3m2!1sen!2sus!4v1625588028327!5m2!1sen!2sus"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                className="border-0 rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-400">
            Copyright © 2024 BONJOUR INDE Voyages
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
