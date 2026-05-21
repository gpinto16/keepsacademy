

import { FaBullseye, FaUsers, FaChartLine } from "react-icons/fa";

export const AboutPage = () => {
  return (
    <section className="about-section">
      <div className="about-header">
        <span className="about-pill">Our Story</span>
        <h1>We empower goalkeeper talent through specialized training</h1>
        <p>
          We are an academy focused on comprehensive goalkeeper development, blending technique,
          mental performance, and tactical strength to help every athlete reach their best version.
        </p>
      </div>

      <div className="about-grid">
        <article className="about-card">
          <div className="about-card-title">
            <div className="about-card-icon about-icon-primary">
              <FaBullseye />
            </div>
            <div>
              <h3>Personalized training</h3>
            </div>
          </div>
          <p>
            We build tailored programs for each goalkeeper, from blocking technique to game reading
            and specific physical preparation.
          </p>
        </article>

        <article className="about-card">
          <div className="about-card-title">
            <div className="about-card-icon about-icon-secondary">
              <FaUsers />
            </div>
            <div>
              <h3>Team-based development</h3>
            </div>
          </div>
          <p>
            We work with coaches, analysts, and physical trainers to deliver a collaborative experience
            grounded in real results.
          </p>
        </article>

        <article className="about-card">
          <div className="about-card-title">
            <div className="about-card-icon about-icon-tertiary">
              <FaChartLine />
            </div>
            <div>
              <h3>Measurable progress</h3>
            </div>
          </div>
          <p>
            We track each goalkeeper's development with clear metrics, smart training sessions,
            and a continuous improvement mindset.
          </p>
        </article>
      </div>

      <div className="about-highlight">
        <h2>Our mission</h2>
        <p>
          To build confidence, discipline, and excellence in goalkeeper development, using a structured
          method and personalized support for every stage of growth.
        </p>
      </div>
    </section>
  );
};
