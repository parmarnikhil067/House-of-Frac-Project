export interface ICustomButtonProps {
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'outline';
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function CustomButton({
  type = 'button',
  children,
  variant = 'primary',
  disabled = false,
  onClick,
  className = '',
}: ICustomButtonProps) {
  const baseClasses =
    'py-2 px-4 rounded-lg font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-1';

  const variantClasses: Record<string, string> = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-400',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-400',
    outline:
      'bg-transparent border border-gray-400 text-gray-700 hover:bg-gray-100 focus:ring-gray-400',
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
