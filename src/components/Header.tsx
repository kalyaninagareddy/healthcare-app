import { Link } from 'react-router-dom';
import { Search, Menu, Heart } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">NirogGyan</h1>
              <p className="text-sm text-muted-foreground">Healthcare Connect</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary font-medium transition-colors">
              Find Doctors
            </Link>
            <Link to="/appointments" className="text-muted-foreground hover:text-primary transition-colors">
              My Appointments
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
              About Us
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="md:hidden">
              <Menu className="w-6 h-6" />
            </button>
            <Link to="/emergency">
              <button className="px-6 py-2 bg-gradient-to-r from-primary to-primary-glow text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300">
                Emergency
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;