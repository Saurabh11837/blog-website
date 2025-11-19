"use client";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { BiMessageRoundedDetail } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-700 px-6 py-6 ">
      <div className="  flex gap-5 flex-col md:flex-row  mb-6">
        {/* --- Brand Section --- */}
        <div className="w-1/2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 flex items-center justify-center bg-indigo-500 text-white rounded-lg font-bold text-lg">
              <BiMessageRoundedDetail size={20} />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Myblog</h2>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Rerum unde quaerat eveniet cumque accusamus atque qui error quo enim fugiat?
          </p>
        </div>

        <div className="w-1/2 flex flex-row gap-5">
            {/* --- Quick Links --- */}
            <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Best Sellers</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Offers & Deals</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">FAQs</a></li>
            </ul>
            </div>

            {/* --- Need Help --- */}
            <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Need Help?</h3>
            <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Delivery Information</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Return & Refund Policy</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Payment Methods</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Track your Order</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Contact Us</a></li>
            </ul>
            </div>

            {/* --- Follow Us --- */}
            <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Follow Us</h3>
            <div className="flex space-x-4 text-gray-500">
                <a href="#" className="hover:text-indigo-600"><FaInstagram size={18} /></a>
                <a href="#" className="hover:text-indigo-600"><FaTwitter size={18} /></a>
                <a href="#" className="hover:text-indigo-600"><FaFacebookF size={18} /></a>
                <a href="#" className="hover:text-indigo-600"><FaYoutube size={18} /></a>
            </div>
            </div>
        </div>
        </div>
      {/* --- Bottom Section --- */}
      <div className="border-t text-center py-4 text-sm text-gray-500">
        Copyright © {new Date().getFullYear()} <span className="text-indigo-600 font-medium">MyBlog</span> by Saurabh — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
