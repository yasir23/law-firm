import React from 'react';

const CivilServicesPage = () => {
  const services = [
    "Rent Case",
    "Labour Case/Service Tribunal Matters",
    "Family Suit (Khula)",
    "Maintenance Suit",
    "Recovery of Dower Amount & Dowry Articles",
    "Guardian & Wards",
    "NADRA record correction Cases",
    "Matric & Inter Board/College Cases",
    "Succession (SMA)",
    "Paper Marriage/Divorce",
    "Recovery Suit",
    "Summary Suit",
    "Banking Cases",
    "Civil Suit (Declaration, Cancellation, Benami, Specific Performance, Permanent Injunction, Damages, etc.)",
    "Appeal/Revision of Family & Civil Cases",
    "FBR/Return file/Audit",
    "Income Tax/Sale Tax/Property Tax",
    "Registration of Company/Trade Mark/Society/Trust/Firm/NGO",
    "Import/Export License",
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-12">Our Civil Services</h1>
        
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-yellow-600 mb-4">{service}</h2>
              <p className="text-gray-700">Contact us for expert legal assistance regarding {service} and other civil law matters.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CivilServicesPage;
