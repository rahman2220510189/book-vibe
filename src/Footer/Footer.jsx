import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
     <footer className="bg-white text-gray-700 border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
      
        <div>
          <h2 className="text-2xl font-bold text-[#0a2d04]">Shanta Book Store</h2>
          <p className="mt-3 text-sm">
            We provide quality books and reading resources to help you grow your knowledge every day.
          </p>
        </div>

     
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link  className="hover:text-[#23BE0A] transition">home</Link></li>
            <li><Link  className="hover:text-[#23BE0A] transition">Listed Books</Link></li>
            <li><Link  className="hover:text-[#23BE0A] transition">Pages to Read</Link></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li><Link  className="hover:text-[#23BE0A] transition">Help Center</Link></li>
            <li><Link  className="hover:text-[#23BE0A] transition">Terms & Conditions</Link></li>
            <li><Link  className="hover:text-[#23BE0A] transition">Privacy Policy</Link></li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
          <p className="text-sm mb-3">Get updates on new books and resources.</p>
          <form className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="border border-gray-300 px-3 py-2 rounded-l-lg focus:outline-none w-full"
            />
            <button 
              type="submit" 
              className="bg-[#23BE0A] text-white px-4 rounded-r-lg hover:bg-[#1f9a07] transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

    
      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
};



export default Footer;