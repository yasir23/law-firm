import React from "react";
import { FlipWords } from "./ui/flip-words";
import Image from 'next/image';

export function FlipWordsDemo() {
  const words = [
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
    "Bail before/after Arrest",
    "Protection Bail",
    "ATC Cases",
    "CNS (Control of Narcotic Substance) Cases",
    "Civil Suit (Declaration, Cancellation, Benami, Specific Performance, Permanent Injunction, Damages, etc.)",
    "Criminal Case/Direct Complaint",
    "Habeas Corpus Petition",
    "Constitution Petition CP",
    "Writ Petition/Harassment Petition",
    "NAB, Anti-Corruption & FIA Cases",
    "Immigration/Custom Cases",
    "Appeal/Revision of Family, Civil & Criminal Cases",
    "FBR/Return file/Audit",
    "Income Tax/Sale Tax/Property Tax",
    "Registration of Company/Trade Mark/Society/Trust/Firm/NGO",
    "Import/Export License"
  ];

  return (
    <div className="h-auto flex flex-col md:flex-row justify-center items-center px-4">
    {/* Text Section */}
    <div className="md:w-1/2 p-4">
      <div className="text-6xl font-semibold text-neutral-600 dark:text-neutral-400">
        <div className="text-4xl">
        Many problems...   <br/>       One Solution...</div> <br/>Best solution provider<br/> We deal in <br/><FlipWords words={words} /> <br /> 
      </div>
    </div>
    
    {/* Image Section */}
    <div className="md:w-1/2 p-4">
      <Image
        src="/WhatsApp_Image_2024-10-05_at_6.53.18_PM-removebg-preview.png"
        alt="Hero Section Image"
        width={200}  // Set width based on your requirements
        height={200} // Set height based on your requirements
        className="w-full h-auto object-cover"
      />
    </div>
  </div>
  );
}
