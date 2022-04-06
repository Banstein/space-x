import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rocketDispatcher } from '../../redux/rockets/rockets';
import RocketCard from './RocketCard';

const Rockets = () => {
  const dispatch = useDispatch();
  const rocketsData = useSelector((state) => state.rocketsReducer);

  useEffect(() => {
    if (!rocketsData.isDataStored) {
      dispatch(rocketDispatcher());
    }
  }, []);

  const rockets = rocketsData.data;
  let rocketsList = [];
  if (rockets) {
    rocketsList = rockets.map((rocket) => (
      <li key={rocket.id} className="rocket-item">
        <RocketCard
          className="rocket-card"
          description={rocket.description}
          image={rocket.image}
          name={rocket.rocket_name}
          id={rocket.id}
          reserved={rocket.reserved}
        />
      </li>
    ));
  }

  return (
    <section>
      <div className="rockets">
        <ul classeName="rocket-list">
          {rocketsList}
        </ul>
      </div>
    </section>
  );
};

export default Rockets;
