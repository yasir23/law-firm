import React from 'react';

const CorporateServicesPage = () => {
  const services = [
    "Registration of Company/Trade Mark/Society/Trust/Firm/NGO",
    "Corporate Governance",
    "Shareholder Disputes",
    "Mergers & Acquisitions",
    "Contractual Disputes",
    "Corporate Restructuring",
    "Employment Law in Corporate Sector",
    "Business Litigation",
    "Intellectual Property Rights",
    "Compliance & Regulatory Issues",
    "Dissolution of Companies",
    "Franchise Agreements",
    "Import/Export License",
    "Taxation (Income Tax/Sale Tax/Property Tax)",
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-12">Our Corporate Services</h1>
        
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-yellow-600 mb-4">{service}</h2>
              <p className="text-gray-700">Contact us for expert legal assistance regarding {service} and other corporate law matters.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CorporateServicesPage;
