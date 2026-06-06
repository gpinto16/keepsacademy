import { useState } from "react";
import { MdOutlineTimer } from "react-icons/md";

export const KeepersCard = ({ drills = [] }) => {

  const [selectedDrill, setSelectedDrill] = useState(null);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'beginner': return '#4CAF50';
      case 'intermediate': return '#FF9800';
      case 'advanced': return '#F44336';
      default: return '#2196F3';
    }
  };

  return (

    <div className="training-section">
      <div className="training-header">
        <h2>Home Training Drills</h2>
      </div>

      <div className="drill-grid">
        {drills.map(drill => (
          <div key={drill.id} className="drill-card">
            <div className="drill-header">
              <h3>{drill.name}</h3>
            </div>

            <div className="drill-info">
              <div
                className="difficulty-badge"
                style={{ backgroundColor: getDifficultyColor(drill.difficulty) }}
              >
                {drill.difficulty}
              </div>
              <div className="drill-duration">
                <span><MdOutlineTimer /> {drill.duration}</span>
              </div>
            </div>

            <p className="drill-description">
              {drill.description}
            </p>

            <div className="drill-stats">
              <div className="stat">
                <span className="stat-label">Sessions:</span>
                <span className="stat-value">{drill.completedSessions}</span>
              </div>
              <div className="stat">
                <span className="stat-label">Focus:</span>
                <span className="stat-value">{drill.focus}</span>
              </div>
            </div>

            <div className="drill-actions">
              <button
                className="btn-primary"
                onClick={() => setSelectedDrill(drill)}
              >
                View Details
              </button>
            </div>

          </div>
        ))}
      </div>

      {selectedDrill && (
        <div className="drill-modal" onClick={() => setSelectedDrill(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedDrill.name}</h2>
              <button
                className="close-button"
                onClick={() => setSelectedDrill(null)}
              >
                X
              </button>
            </div>

            <div className="modal-body">
              <div className="drill-details">
                <div className="detail-section">
                  <h4>Overview</h4>
                  <p>{selectedDrill.description}</p>
                  <div className="drill-meta">
                    <span className="meta-item">
                      <strong>Duration:</strong> {selectedDrill.duration} minutes
                    </span>
                    <span className="meta-item">
                      <strong>Difficulty:</strong> {selectedDrill.difficulty}
                    </span>
                    <span className="meta-item">
                      <strong>Focus Area:</strong> {selectedDrill.focus}
                    </span>
                  </div>
                </div>

                <div className="detail-section">
                    <h4>Instructions</h4>
                    <ol className="instructions-list">
                      {selectedDrill.instructions.map( (instruction, index) => 
                        ( <li key={index}>{instruction}</li> )
                      )}
                    </ol>
                </div>

                <div className="detail-section">
                    <h4>Equipment Needed</h4>
                    <div className="equipment-list">
                      {selectedDrill.equipment.map(( item, index ) => (
                        <span key={index} className="equipment-tag">{item}</span>
                      ))}
                    </div>
                </div>

                <div className="detail-section">
                    <h4>Tips for Success</h4>
                    <ul className="tips-list">
                      {selectedDrill.tips.map( (tip, index) => (
                        <li key={index}>{tip}</li>
                      ))}
                    </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
