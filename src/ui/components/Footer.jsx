import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-contact">
          <p className="footer-title">Contacto</p>
          <p className="footer-phone">
            Teléfono: <a href="tel:+573001234567">+57 300 123 4567</a>
          </p>
        </div>

        <div className="footer-socials">
          <p className="footer-title">Síguenos</p>
          <div className="footer-social-links">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
