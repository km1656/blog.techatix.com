import Link from 'next/link';

export default function Footer() {
  return (
    <div className="container-fluid text-white-50 footer pt-5 bg-[#00529f]">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
            <Link href="/" className="d-inline-block mb-3">
              <h2 className="text-[#ff7f00]">Techatix Corp</h2>
            </Link>
            <p>At Techatix, we are not just another IT consulting firm – we are your strategic partner in unlocking the full potential of technology to drive growth, efficiency, and success. With a relentless focus on innovation and a passion for excellence, we empower businesses of all sizes to embrace the future with confidence.</p>
          </div>
          
          <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
            <h5 className="text-white mb-4">Get In Touch</h5>
            <div className="mt-4 mt-md-0">
              <div className="info">
                <div className="flex items-start">
                  <i className="ri-map-pin-line text-xl mt-1"></i>
                  <p className="ml-3">5900 Balcones Drive #8694<br />Austin, TX 78731</p>
                </div>
                <div className="flex items-start">
                  <i className="ri-mail-send-line text-xl"></i>
                  <p className="ml-3">info@techatix.com</p>
                </div>
                <div className="flex items-start">
                  <i className="ri-phone-line text-xl"></i>
                  <p className="ml-3">512-812-7667</p>
                </div>
              </div>
            </div>
            
            <div>
              <h5 className="text-white mb-4">Social Media</h5>
              <div className="flex space-x-4">
                <a href="https://twitter.com/TechatixCom" className="twitter">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61556193136440" className="facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://www.instagram.com/techatixcom/" className="instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://linkedin.com/company/techatix" className="linkedin">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
            <h5 className="text-white mb-4">Popular Links</h5>
            <ul className="list-unstyled space-y-2">
              <li><Link href="/about" className="link-light text-white-50 hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="link-light text-white-50 hover:text-white">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="link-light text-white-50 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="link-light text-white-50 hover:text-white">Terms and Condition</Link></li>
              <li><Link href="/careers" className="link-light text-white-50 hover:text-white">Careers</Link></li>
              <li><Link href="/html-sitemap" className="link-light text-white-50 hover:text-white">Site Map</Link></li>
            </ul>
          </div>

          <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
            <h5 className="text-white mb-4">Solutions</h5>
            <ul className="list-unstyled space-y-2">
              <li><Link href="/solutions" className="link-light text-white-50 hover:text-white">Cloud Computing Services</Link></li>
              <li><Link href="/solutions" className="link-light text-white-50 hover:text-white">Data Analytics and Business Intelligence</Link></li>
              <li><Link href="/solutions" className="link-light text-white-50 hover:text-white">IT Outsourcing and Managed Services</Link></li>
              <li><Link href="/solutions" className="link-light text-white-50 hover:text-white">Data Science</Link></li>
              <li><Link href="/solutions" className="link-light text-white-50 hover:text-white">Talent Solutions</Link></li>
            </ul>
          </div>

          <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
            <h5 className="text-white mb-4">Legal Notices</h5>
            <ul className="list-unstyled space-y-2">
              <li><a href="/assets/IER_RightToWorkPoster_Eng_Es.pdf" target="_blank" className="link-light text-white-50 hover:text-white">IER Poster</a></li>
              <li><a href="/assets/E-Verify_Participation_Poster_Eng_Es.pdf" target="_blank" className="link-light text-white-50 hover:text-white">E-Verify Participation Poster</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container wow fadeIn" data-wow-delay="0.1s">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              © {new Date().getFullYear()} TechAtix Corp. All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <Link href="/" className="mx-2">Home</Link>
                <Link href="/help" className="mx-2">Help</Link>
                <Link href="#faq" className="mx-2 scrollto">FAQs</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}