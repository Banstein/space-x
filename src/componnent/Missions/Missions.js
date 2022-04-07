import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissionsDispatcher } from '../../redux/missions/missions';
import Mission from './Mission';
import '../../CSS/base/missions.css';

export default function Missions() {
  const dispatch = useDispatch();
  const isMissionsStored = useSelector((state) => state.missionsReducer.isMissionsStored || false);
  const missions = useSelector((state) => state.missionsReducer.missions || []);

  useEffect(() => {
    if (!isMissionsStored) {
      dispatch(getMissionsDispatcher());
    }
  });

  return (
    <div className="missions-container">
      <div className="header-missions">
        <div className="mission-name-header">Mission</div>
        <div className="mission-description-header">Description</div>
        <div className="mission-status-header">Status</div>
        <div className="mission-other-header">#</div>
      </div>
      {missions.map((mission) => (
        <Mission key={mission.missionId} mission={mission} />
      ))}
    </div>
  );
}
