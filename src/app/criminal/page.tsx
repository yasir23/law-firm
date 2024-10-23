import React from 'react';

const CriminalServicesPage = () => {
  const services = [
    "Bail before/after Arrest",
    "Protection Bail",
    "ATC Cases",
    "CNS (Control of Narcotic Substance) Cases",
    "Criminal Case/Direct Complaint",
    "Habeas Corpus Petition",
    "Constitution Petition CP",
    "Writ Petition/Harassment Petition",
    "NAB, Anti-Corruption & FIA Cases",
    "Immigration/Custom Cases",
    "Appeal/Revision of Criminal Cases",
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 pt-28">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-12">Our Criminal Services</h1>
        
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-yellow-600 mb-4">{service}</h2>
              <p className="text-gray-700">Contact us for expert legal assistance regarding {service} and other related criminal legal matters.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CriminalServicesPage;
