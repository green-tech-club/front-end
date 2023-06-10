import React from 'react';
import './TargetVisual.css'

const TargetVisual = ({ targets, achievements }) => {
  return (
    <div>
      <h2>Targets and Achievements</h2>
      <ul>
        {targets.map((target, index) => (
          <li key={index}>
            <div>
              <span>{target}</span>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${achievements[index]}%` }}
                ></div>
              </div>
              <span>{`${achievements[index]}%`}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TargetVisual;
