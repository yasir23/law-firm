// components/HamburgerIcon.tsx
import React from "react";

const HamburgerIcon = ({ onClick }: { onClick: () => void }) => {
  return (
    <button onClick={onClick} className="flex items-center justify-center p-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </button>
  );
};

export default HamburgerIcon;
