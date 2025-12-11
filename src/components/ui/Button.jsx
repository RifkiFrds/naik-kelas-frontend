import React from 'react';

function Button({
  children,
  variant = 'primary',
  size = 'md',
  rounded = 'md',
  className = '',
  href,         
  ...props
}) {
  
  const baseStyles =
    'inline-flex items-center justify-center font-semibold shadow-md transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizes = {
    sm: 'py-1 px-4 text-sm',
    md: 'py-2.5 px-4 text-base',
    lg: 'py-4 px-7 text-[15px]',
  };

  const roundness = {
    sm: 'rounded-md',
    md: 'rounded-lg',
    lg: 'rounded-xl',
    full: 'rounded-full',
  };

  const variants = {
    primary:
      'bg-primary text-secondary hover:bg-[#E6A935] active:brightness-90 focus:ring-primary',
    secondary:
      'bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-white active:bg-secondary active:opacity-80 focus:ring-secondary',
    tertiary:
      'bg-secondary text-gray-100 hover:bg-[#0A1A4A] active:brightness-90 focus:ring-secondary',
  };

  const variantStyles = variants[variant] || variants.primary;
  const sizeStyles = sizes[size] || sizes.md;
  const roundedStyles = roundness[rounded] || roundness.md;

  const finalClass = `${baseStyles} ${sizeStyles} ${roundedStyles} ${variantStyles} ${className}`;

  // Jika ada `href` → render <a>
  if (href) {
    return (
      <a
        href={href}
        className={finalClass}
        {...props}
      >
        {children}
      </a>
    );
  }

  // Jika tidak ada href → render <button>
  return (
    <button className={finalClass} {...props}>
      {children}
    </button>
  );
}

export default Button;
