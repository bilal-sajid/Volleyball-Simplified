import { Link } from 'react-router-dom';

const PrimaryButton = ({ to, children, size = 'md', fullWidth = false, extraClasses = '' }) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <Link
      to={to}
      className={`inline-block rounded-full bg-primary text-primary-text font-semibold shadow-md
        hover:bg-primary-hover hover:scale-105 transform transition-transform duration-300 
        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
        ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} ${extraClasses}`}
    >
      {children}
    </Link>
  );
};

export default PrimaryButton;
