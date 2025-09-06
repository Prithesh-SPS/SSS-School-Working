// ...existing code...
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-card shadow-lg sticky top-0 z-50" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link to="/" aria-label="Springs Secondary School home" className="flex items-center">
                <img src="/lovable-uploads/2d604ffc-7ae7-4f77-8b84-030336d9701c.png" alt="Springs Secondary School Logo" className="h-16 w-16" />
                <span className="ml-3 text-xl font-bold text-primary">Springs Secondary School</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link to="/" className="text-primary font-semibold hover:text-accent-foreground transition duration-300">Home</Link>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition duration-300">About Us</Link>
                <Link to="/academics" className="text-muted-foreground hover:text-primary transition duration-300">Academics</Link>
                <Link to="/admissions" className="text-muted-foreground hover:text-primary transition duration-300">Admissions</Link>
                <Link to="/studentlife" className="text-muted-foreground hover:text-primary transition duration-300">Student Life</Link>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-muted-foreground hover:text-primary"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label="Toggle navigation menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden bg-card border-t border-border" role="menu" aria-label="Mobile navigation">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-primary font-semibold" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link to="/about" className="block px-3 py-2 text-muted-foreground hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
              <Link to="/academics" className="block px-3 py-2 text-muted-foreground hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Academics</Link>
              <Link to="/admissions" className="block px-3 py-2 text-muted-foreground hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Admissions</Link>
              <Link to="/studentlife" className="block px-3 py-2 text-muted-foreground hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Student Life</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/lovable-uploads/2d604ffc-7ae7-4f77-8b84-030336d9701c.png" alt="Springs Secondary School Logo" className="h-12 w-12" />
                <span className="ml-3 text-xl font-bold">Springs Secondary School</span>
              </div>
              <p className="text-muted-foreground">Knowledge Spreads Light</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>📍 123 Education Avenue, Springs, Gauteng</p>
                <p>📞 <a href="tel:+27111234567" className="hover:underline">+27 11 123 4567</a></p>
                <p>✉️ <a href="mailto:info@springssecondary.edu.za" className="hover:underline">info@springssecondary.edu.za</a></p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/about" className="block text-muted-foreground hover:text-accent transition duration-300">About Us</Link>
                <Link to="/academics" className="block text-muted-foreground hover:text-accent transition duration-300">Academics</Link>
                <Link to="/admissions" className="block text-muted-foreground hover:text-accent transition duration-300">Admissions</Link>
                <Link to="/studentlife" className="block text-muted-foreground hover:text-accent transition duration-300">Student Life</Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Springs Secondary School. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
// ...existing code...