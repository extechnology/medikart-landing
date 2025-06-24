import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50 py-3">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to={'/'}>
              <div className="flex items-center">
                <img src="./logo2.png" alt="Logo" className='w-12 h-12 sm:w-16 sm:h-16 object-contain' />
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to={"/" } className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200">Home</Link>
            <Link to={"/shop"}  className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200">Shop</Link>
            <Link to={"/about"}  className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200">About us</Link>
            <Link to={"/contact"}  className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200">Contact us</Link>
          </nav>
          
          {/* Desktop Order Button */}
          <Link to={"/shop"}>
          <Button className="hidden md:block rounded-[12px] bg-gradient-to-r from-[#22A295] to-[#6AD8CD] hover:bg-teal-600 text-white px-6 py-2 transition-colors duration-200">
            Order Now
          </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <nav className="py-4 space-y-4">
              <Link 
                to={"/"}
                className="block px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to={"/shop"} 
                className="block px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                to={"/about"} 
                className="block px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About us
              </Link>
              <Link 
                to={"/contact"} 
                className="block px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact us
              </Link>
              <div className="px-4 pt-2">
                <Link to={"/shop"}>
                <Button 
                  className="w-fit rounded-[12px] bg-gradient-to-r from-[#22A295] to-[#6AD8CD] text-white py-2 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Order Now
                </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;