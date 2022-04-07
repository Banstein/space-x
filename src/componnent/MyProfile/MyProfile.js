import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const missionsList = useSelector((state) => state.missionsReducer.missions);
  const rockets = useSelector((state) => state.rocketsReducer.data);
  const reservedRockets = rockets || [];
  const missions = missionsList || [];

  return (
    <section className="profile-section">
      <div className="rockets-profile-container">
        <h1 style={{ paddingBottom: '1rem' }}>My Rockets</h1>
        <div className="reserv-rockets">
          <ul className="reserv-rockets-list">
            {reservedRockets.length === 0 ? (
              <li className="no-reserved-rocket">
                No Rockets Reserved
              </li>
            ) : (
              reservedRockets
                .filter(({ reserved }) => reserved === true)
                .map((rocket) => (
                  <li key={rocket.id} className="reserved-rocket-item">
                    <span className="name" style={{ paddingLeft: '0.4rem', fontWeight: 'bold' }}>{rocket.rocket_name}</span>
                  </li>
                ))
            )}
          </ul>
        </div>
      </div>
      <section className="missions-section">
        <h2>My Missions </h2>
        <ul>
          {missions
            .filter((mission) => mission.status)
            .map((filteredMission) => (
              <li key={filteredMission.missionId}>
                {filteredMission.missionName}
              </li>
            ))}
        </ul>
      </section>
    </section>
  );
};

export default MyProfile;
