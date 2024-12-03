import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClasses = classNames(
    'fixed top-0 w-full z-50 flex items-center transition-all duration-300',
    {
      'navbar-scrolled shadow-lg': isScrolled || isMobileMenuOpen,
      'bg-white': true
    }
  );

  const navClasses = classNames(
    'navbar',
    {
      'navbar-mobile': isMobileMenuOpen
    }
  );

  return (
    <header id="header" className={headerClasses}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="logo">
          <Link href="/">
            <Image
              src="/assets/img/logo.webp"
              alt="Techatix logo"
              width={180}
              height={60}
              className="img-fluid w-600"
            />
          </Link>
        </div>

        <nav id="navbar" className={navClasses}>
          <ul className="flex items-center space-x-6">
            <li>
              <Link href="/" className="nav-link scrollto active">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="nav-link scrollto">
                About
              </Link>
            </li>
            <li>
              <Link href="/solutions" className="nav-link scrollto">
                Solutions
              </Link>
            </li>
            <li>
              <Link href="https://blog.techatix.com" className="nav-link scrollto">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/careers" className="nav-link scrollto">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/contact" className="nav-link scrollto">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/solutions" className="getstarted scrollto">
                Get Started
              </Link>
            </li>
          </ul>
          <button
            className="mobile-nav-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`bi ${isMobileMenuOpen ? 'bi-x' : 'bi-list'}`}></i>
          </button>
        </nav>
      </div>
    </header>
  );
}