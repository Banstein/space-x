import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissionsDispatcher } from '../../redux/missions/missions';
import Mission from './Mission';
import '../../CSS/base/missions.css';

export default function Missions() {
  const dispatch = useDispatch();
  const missionsDatas = useSelector((state) => state.missionsReducer);

  useEffect(() => {
    dispatch(getMissionsDispatcher());
  }, []);

  const missionsList = missionsDatas.data;
  const missions = missionsList
    ? missionsList.map((mission) => <Mission key={mission.missionId} mission={mission} />) : [];

  return (
    <div className="missions-container">
      <div className="header-missions">
        <div className="mission-name-header">Mission</div>
        <div className="mission-description-header">Description</div>
        <div className="mission-status-header">Status</div>
        <div className="mission-other-header">#</div>
      </div>
      {missions}
    </div>
  );
}
