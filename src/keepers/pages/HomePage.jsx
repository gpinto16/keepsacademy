import { FaStar, FaBolt, FaChartLine } from "react-icons/fa";
import { useNavigate } from "react-router";
import { EventsSection } from "../components/EventsSection";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero-copy">
          <span className="home-pill">Elite Goalkeeper Training</span>
          <h1>Train smarter, react faster, and dominate the goal.</h1>
          <p>
            Unlock the next level of your game with cutting-edge goalkeeper coaching, tactical mastery,
            and a performance-first training system designed for every level.
          </p>
          <div className="home-hero-actions">
            <button className="btn-home-primary" onClick={() => navigate('/contact')}>
              Join a Session
            </button>
            <button className="btn-home-secondary" onClick={() => navigate('/trainers')}>
              Explore the Team
            </button>
          </div>
        </div>

        <div className="home-hero-stats">
          <div className="stat-card stat-card-glow">
            <h3>20+</h3>
            <p>Years of elite coaching experience</p>
          </div>
          <div className="stat-card">
            <h3>300+</h3>
            <p>Professional save drills curated</p>
          </div>
          <div className="stat-card">
            <h3>95%</h3>
            <p>Client satisfaction rate</p>
          </div>
        </div>
      </section>

      <section className="home-features">
        <div className="feature-intro">
          <span className="home-pill home-pill-secondary">What makes us different</span>
          <h2>Focused training for confident goalkeepers.</h2>
          <p>
            Our methodology combines technical precision, mental sharpness, and tactical awareness to build
            goalkeepers who perform under pressure.
          </p>
        </div>

        <div className="feature-grid">
          <article className="feature-card feature-card-primary">
            <div className="feature-icon">
              <FaBolt />
            </div>
            <h3>Dynamic reaction training</h3>
            <p>Develop explosive reflexes with drills designed for real-match speed and unpredictability.</p>
          </article>

          <article className="feature-card feature-card-secondary">
            <div className="feature-icon">
              <FaStar />
            </div>
            <h3>Personalized coaching path</h3>
            <p>Receive individualized programs that adapt to your strengths, weaknesses, and growth goals.</p>
          </article>

          <article className="feature-card feature-card-tertiary">
            <div className="feature-icon">
              <FaChartLine />
            </div>
            <h3>Performance tracking</h3>
            <p>Measure progress with clear metrics and feedback focused on continuous improvement.</p>
          </article>
        </div>
      </section>

      <EventsSection />
    </main>
  );
};
