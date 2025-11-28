import React from 'react';

function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',        
  rounded = 'md',     
  className = '', 
  ...props 
}) {
  
  const baseStyles = 'font-semibold shadow-md transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizes = {
    sm: 'py-1 px-4 text-sm',
    md: 'py-2 px-6 text-base',
    lg: 'py-3 px-8 text-lg',
  };

  const roundness = {
    sm: 'rounded-md',
    md: 'rounded-lg',
    lg: 'rounded-xl',
    full: 'rounded-full',
  };

  const variants = {
    primary: 'bg-primary text-secondary hover:opacity-80 active:brightness-90 focus:ring-primary',
    secondary: 'bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-white active:bg-secondary active:opacity-80 focus:ring-secondary',
    tertiary: 'bg-secondary text-gray-100 hover:opacity-80 active:brightness-90 focus:ring-tertiary'
  };

  const variantStyles = variants[variant] || variants.primary;
  const sizeStyles = sizes[size] || sizes.md;
  const roundedStyles = roundness[rounded] || roundness.md;

  return (
    <button
      className={`${baseStyles} ${sizeStyles} ${roundedStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;