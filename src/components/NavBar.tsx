import { FC } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

interface NavBarProps {
  variant: 'shopper' | 'merchant';
}

const NavBar: FC<NavBarProps> = ({ variant }) => {
  return (
    <nav className="fixed top-0 inset-x-0 flex items-center justify-between px-6 py-4 max-w-[1100px] mx-auto">
      <Link to="/" aria-label="Yumi Home" className="text-text-primary hover:text-accent transition-colors">
        <Logo className="w-24 h-auto" />
      </Link>

      {variant === 'shopper' && (
        <Link
          to="/merchant"
          className="text-text-secondary hover:text-accent transition-colors text-sm font-medium"
        >
          For Merchants ↓
        </Link>
      )}

      {variant === 'merchant' && (
        <Link
          to="https://cal.com/your-booking-link" // placeholder
          className="bg-accent text-background font-medium px-6 py-2 rounded-md hover:-translate-y-[2px] transition-transform hover:glow"
        >
          Book a Call
        </Link>
      )}
    </nav>
  );
};

export default NavBar; 