

import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export const ContactPage = () => {
  return (
    <section className="contact-section">
      <div className="contact-header">
        <span className="contact-pill">Contact Us</span>
        <h1>Get in touch with our goalkeeper coaching team</h1>
        <p>
          Whether you want to learn more about our training programs, schedule a session, or ask a question,
          our team is ready to support you every step of the way.
        </p>
      </div>

      <div className="contact-grid">
        <article className="contact-card">
          <div className="contact-card-title">
            <div className="contact-card-icon contact-icon-primary">
              <FaEnvelope />
            </div>
            <div>
              <h3>Email Support</h3>
            </div>
          </div>
          <p>Reach out with questions on training plans, schedules, or academy details.</p>
          <a href="mailto:info@keepersacademy.com" className="contact-link">info@keepersacademy.com</a>
        </article>

        <article className="contact-card">
          <div className="contact-card-title">
            <div className="contact-card-icon contact-icon-secondary">
              <FaPhone />
            </div>
            <div>
              <h3>Call Us</h3>
            </div>
          </div>
          <p>Speak directly with our coaching staff to tailor the best path for your development.</p>
          <a href="tel:+1234567890" className="contact-link">+1 (234) 567-890</a>
        </article>

        <article className="contact-card">
          <div className="contact-card-title">
            <div className="contact-card-icon contact-icon-tertiary">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h3>Location</h3>
            </div>
          </div>
          <p>Visit our training facility and experience our academy environment in person.</p>
          <p className="contact-text">123 Goalkeeper Avenue, Suite 10, Fitness City</p>
        </article>
      </div>

      <div className="contact-form-card">
        <h2>Send us a message</h2>
        <form className="contact-form">
          <label>
            Name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            Message
            <textarea rows="5" placeholder="Tell us how we can help"></textarea>
          </label>
          <button type="submit" className="btn-trainer-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};
