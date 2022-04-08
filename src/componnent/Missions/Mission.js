import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleMission } from '../../redux/missions/missions';

export default function Mission({ mission }) {
  const dispatch = useDispatch();

  const toggleMissionHandler = (id) => {
    dispatch(toggleMission(id));
  };

  return (
    <div className="mission-container">
      <div className="mission-name">{mission.missionName}</div>
      <div className="mission-description">{mission.description}</div>
      {mission.status && (
        <>
          <div className="active-mb">
            <span>Active Member</span>
          </div>
          <div className="mission">
            <button
              type="button"
              className="leave-mission-bt"
              onClick={() => toggleMissionHandler(mission.missionId)}
            >
              Leave Mission
            </button>
          </div>
        </>
      )}
      {!mission.status && (
        <>
          <div className="no-active-mb">
            <span> NOT A MEMBER</span>
          </div>
          <div className="mission">
            <button
              type="button"
              className="join-mission-bt"
              onClick={() => toggleMissionHandler(mission.missionId)}
            >
              Join Mission
            </button>
          </div>
        </>
      )}
    </div>
  );
}

Mission.propTypes = {
  mission: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
