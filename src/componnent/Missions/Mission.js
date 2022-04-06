import React from 'react';
import PropTypes from 'prop-types';

export default function Mission({ mission }) {
  return (
    <div className="mission-container">
      <div className="mission-name">{mission.missionName}</div>
      <div className="mission-description">{mission.description}</div>
    </div>
  );
}

Mission.propTypes = {
  mission: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
