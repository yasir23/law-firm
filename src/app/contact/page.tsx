import React from 'react';

const ContactPage = () => {
  return (



    <main><br/>
      <br/>
      <br/>
      <br/>
      <br/>
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white shadow-md rounded-lg w-full max-w-lg p-8 mx-4">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">Contact Us</h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Your Message"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-yellow-500"
          >
            Send Message
          </button>
        </form>
      </div>
      <br/>
      <br/>
      
      <div className="mt-8 text-center">
        <p className="text-gray-700">Or reach us at:</p>
        <p className="font-medium text-blue-700">contact@yourlawfirm.com</p>
        <p className="font-medium text-blue-700">+1 (555) 123-4567</p>
        <p className="font-medium text-blue-700">1234 Justice Ave, Lawville, USA</p>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
    </div></main>
  );
};

export default ContactPage;
