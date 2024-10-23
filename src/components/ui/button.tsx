import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  const baseStyles = 'px-6 py-2 rounded-lg font-semibold focus:outline-none';
  const primaryStyles = 'bg-blue-600 text-white hover:bg-blue-700';
  const secondaryStyles = 'bg-gray-200 text-gray-700 hover:bg-gray-300';

  const styles = variant === 'primary' ? primaryStyles : secondaryStyles;

  return (
    <button
      className={`${baseStyles} ${styles}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
