import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-contact">
          <p className="footer-title">Contacto</p>
          <p className="footer-phone">
            Teléfono: <a href="tel:+50496746331">+504 9674-6331</a>
          </p>
        </div>

        <div className="footer-socials">
          <p className="footer-title">Síguenos</p>
          <div className="footer-social-links">
            <a href="https://www.instagram.com/keeps.hn?igsh=bjA4YWlhNjMxdnJ0" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/share/1Ge1ShBtcq/?mibextid=wwXIfr" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.tiktok.com/@keeps.hn?_r=1&_t=ZS-96yRPZSzS1l" target="_blank" rel="noreferrer" aria-label="TikTok">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
