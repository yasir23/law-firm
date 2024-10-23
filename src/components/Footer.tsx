import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4'>
      

  <div className="p-4">
    <h2 className="text-xl font-semibold mb-2">About Us</h2>
    <ul>
      <li className="hover:text-white">We are a team of professionals.</li>
      <li className="hover:text-white">Dedicated to providing the best services.</li>
      <li className="hover:text-white">Delivering high-quality results.</li>
    </ul>
  </div>

 
  <div className="p-4">
    <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
    <ul>
      <li className="hover:text-white">
        <a href="#" className="hover:text-white">Services</a>
      </li>
      <li className="hover:text-white">
        <a href="#" className="hover:text-white">Products</a>
      </li>
      <li className="hover:text-white">
        <a href="#" className="hover:text-white">Customer Support</a>
      </li>
    </ul>
  </div>


  <div className="p-4">
    <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
    <ul>
      <li className="hover:text-white">
        <a href="https://facebook.com" target="_blank" className="hover:text-white">Facebook</a>
      </li>
      <li className="hover:text-white">
        <a href="https://twitter.com" target="_blank" className="hover:text-white">Twitter</a>
      </li>
      <li className="hover:text-white">
        <a href="https://instagram.com" target="_blank" className="hover:text-white">Instagram</a>
      </li>
    </ul>
  </div>

  <div className="p-4">
    <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
    <ul>
      <li className="hover:text-white">Email: infotech2353@gmail.com</li>
      <li className="hover:text-white">Phone: +92 313-123-4567</li>
      <li className="hover:text-white">Address: NIC NED University karachi, Pakistan</li>
    </ul>
  </div>
</div>

<div className="text-center p-4 bg-gray-900 text-gray-500">
  <p>© 2024 Your Company Name. All rights reserved.</p>
</div>
       
    </footer>
  );
};

export default Footer;
