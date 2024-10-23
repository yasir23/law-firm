import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 pt-28"> {/* Added pt-24 to create space */}
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">About Us</h1>
        
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12 flex flex-col lg:flex-row items-center">
          <img 
            src="/pngtree-legal-law-justice-service-3d-illustration-law-assistance-law-firm-and-png-image_10146690.png" 
            alt="Law Firm Building" 
            className="w-full lg:w-1/2 rounded-lg mb-6 lg:mb-0 lg:mr-8"
          />
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-semibold text-yellow-600 mb-4">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed">
              Our law firm has been providing expert legal services for over a decade. With a team of dedicated professionals specializing in criminal, civil, corporate, and cyber law, we are committed to delivering justice and protecting the rights of our clients.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We pride ourselves on our personalized approach and our unwavering commitment to achieving the best possible outcomes for each and every client.
            </p>
          </div>
        </div>

        {/* Vision and Mission Section */}
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 mb-12">
          <div className="p-8 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              Our vision is to become a leading law firm in the region, recognized for excellence, integrity, and a client-centered approach. We aim to redefine legal services by setting the highest standards of professionalism and transparency.
            </p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to provide exceptional legal services with a focus on delivering justice, safeguarding rights, and ensuring a fair outcome for our clients. We strive to combine legal expertise with compassionate service.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-semibold text-center text-yellow-600 mb-6">Our Core Values</h3>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <h4 className="text-xl font-bold text-blue-700 mb-2">Integrity</h4>
              <p className="text-gray-700">We uphold the highest ethical standards in every case we handle.</p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold text-blue-700 mb-2">Transparency</h4>
              <p className="text-gray-700">Our clients are fully informed throughout the legal process.</p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold text-blue-700 mb-2">Dedication</h4>
              <p className="text-gray-700">We are committed to achieving the best outcomes for our clients.</p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold text-blue-700 mb-2">Excellence</h4>
              <p className="text-gray-700">We deliver high-quality legal services with precision and care.</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center text-blue-700 mb-8">Meet Our Team</h3>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img 
                src="/WhatsApp Image 2024-10-15 at 4.54.51 PM.jpeg" 
                alt="Team Member" 
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-bold text-yellow-600">Adv Shakeel Lodhi</h4>
              <p className="text-gray-700">Founder - Senior Lawyer</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img 
                src="/1678645062916.jpg" 
                alt="Team Member" 
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-bold text-yellow-600">Adv Yasir Memon</h4>
              <p className="text-gray-700">Managing Partner - Civil Law</p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img 
                src="/OIP (3).jpg" 
                alt="Team Member" 
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-bold text-yellow-600">Adv Ayesha lodhi</h4>
              <p className="text-gray-700">Lead Attorney - Corporate Law</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-blue-700 mb-4">Get in Touch</h3>
          <p className="text-gray-700 mb-6">
            Have any questions or need legal assistance? Contact us today to schedule a consultation.
          </p>
          <button className="bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-800 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
