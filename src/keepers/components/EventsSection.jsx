import { useNavigate } from 'react-router';
import KeepsClinicImg from '../../../assets/keepers/KeepsClinic.jpeg';
import KeepsWarImg from '../../../assets/keepers/KeepsWar.jpeg';

export const EventsSection = () => {
  const navigate = useNavigate();
  const events = [
    {
      title: 'Keeps Clinic',
      image: KeepsClinicImg,
      label: 'KeepsClinic',
      subtitle: 'Elite training sessions focused on reaction speed and positioning.',
    },
    {
      title: 'Keeps War',
      image: KeepsWarImg,
      label: 'KeepsWar',
      subtitle: 'Competitive goalkeeper challenge day for sharp decision-making.',
    },
  ];

  return (
    <section className="events-section">
      <div className="events-header">
        <span className="home-pill home-pill-secondary">Upcoming Events</span>
        <div className="feature-intro">
          <h2>Stay sharp with our next goalkeeper sessions.</h2>
          <p>
            Join events designed for real game readiness, team coordination, and fast decision-making. Perfect for
            goalkeepers who want smart training and a friendly community.
          </p>
        </div>
      </div>

      <div className="events-grid">
        {events.map((event) => (
          <article key={event.title} className="event-card event-card-image">
            <div className="event-image-wrap">
              <img src={event.image} alt={event.title} className="event-image" />
            </div>
            <div className="event-copy">
              <span className="event-label">{event.label}</span>
              <h3>{event.title}</h3>
              <p>{event.subtitle}</p>
              <button className="event-button" onClick={() => navigate('/contact')}>
                Reserve your place
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
