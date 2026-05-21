import { useState } from "react";

export const TrainersCard = ({ trainer = [] }) => {
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  const closeModal = () => setSelectedTrainer(null);

  return (
    <section className="trainer-section">
      <div className="trainer-header">
        <h2>Our Trainers</h2>
        <p className="trainer-subtitle">
          Meet our expert trainers who are here to help you achieve your fitness goals with personalized training programs and support.
        </p>
      </div>

      <div className="trainer-grid">
        {trainer.map((trainer) => (
          <article key={trainer.id} className="trainer-card">
            <div className="trainer-cardheader">
              <div className="trainer-card-title">
                <span className="trainer-badge" style={{ backgroundColor: trainer.color }} />
                <h3>{trainer.name}</h3>
              </div>
            </div>

            <div className="trainer-info">
              <h4>{trainer.position}</h4>
              <p>{trainer.experience} of experience</p>
            </div>

            <div className="trainer-specialty">
              <strong>Specialty:</strong> {trainer.specialty}
            </div>

            <p className="trainer-background">{trainer.background}</p>

            <div className="trainer-actions">
              <button className="btn-trainer-primary" onClick={() => setSelectedTrainer(trainer)}>
                View Complete Profile
              </button>
            </div>
          </article>
        ))}
      </div>

      {selectedTrainer && (
        <div className="trainer-modal" onClick={closeModal}>
          <div className="trainer-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="trainer-modal-header">
              <h2>{selectedTrainer.name}</h2>
              <button className="close-trainer-button" onClick={closeModal}>
                X
              </button>
            </div>

            <div className="trainer-modal-body">
              <div className="trainer-modal-details">
                <div className="trainer-modal-section">
                  <h4>{selectedTrainer.position}</h4>
                  <p>{selectedTrainer.experience} of experience</p>

                  <div className="trainer-modal-meta">
                    <h6 className="trainer-item">Specialty:</h6>
                    <p>{selectedTrainer.specialty}</p>
                  </div>

                  <div className="trainer-modal-item">
                    <h6 className="trainer-item">Background:</h6>
                    <p>{selectedTrainer.background}</p>
                  </div>
                </div>

                <div className="trainer-modal-section">
                  <h4>Achievements and Certifications</h4>
                  <ul className="certifications-list">
                    {selectedTrainer.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
