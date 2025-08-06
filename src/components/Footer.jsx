import React from "react";
import { Link } from "react-router-dom";

import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-sky-200 py-6 text-sm text-gray-700">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
      <div>
        <h4 className="font-bold mb-2 relative inline-block after:block after:w-50 after:border-t-2 after:border-gray-500 after:mt-1">
          KNOW
        </h4>

        <ul className="mt-4 space-y-2 text-left">
          <li>
            <Link to="/about" className="hover:text-sky-600">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/about-store" className="hover:text-sky-600">
              About Earthbubs Store
            </Link>
          </li>
          <li>
            <Link to="/gifts" className="hover:text-sky-600">
              Bulk Purchase & Corporate Gifts
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-2 relative inline-block after:block after:w-50 after:border-t-2 after:border-gray-500 after:mt-1">
          TERMS & CONDITIONS
        </h4>
        <ul className="mt-4 space-y-2 text-left">
          <li>
            <Link to="/shipping" className="hover:text-sky-600">
              Shipping & Return Policies
            </Link>
          </li>
          <li>
            <Link to="/policy" className="hover:text-sky-600">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/#faq" className="hover:text-sky-600">FAQ's</Link>

          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-2 relative inline-block after:block after:w-50 after:border-t-2 after:border-gray-500 after:mt-1">
          CONTACT US
        </h4>
        <ul className="mt-4 space-y-2 text-left">
          <li>For Sale: Earthbubs@co.in</li>
          <li>Call: +91 1234567890</li>
          <li>For Complaints: 1800 202 2222</li>
          <li>
            Chat Time: Our Team is Available From Monday to Saturday from 9.00AM
            to 8.00PM
          </li>
          <li>For Complaints: Ebcustomercare.com</li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-2 relative inline-block after:block after:w-50 after:border-t-2 after:border-gray-500 after:mt-1">
          FOLLOW US
        </h4>
        <div className="mt-4 flex gap-4 text-xl">
          <a href="#" className="hover:text-sky-600">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-sky-600">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-sky-600">
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
    <hr className="border-gray-900 my-4 mx-20" />
    <p className="text-center">&copy; 2025 All Rights Reserved.</p>
  </footer>
);

export default Footer;
