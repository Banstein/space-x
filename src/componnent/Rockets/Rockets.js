import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { rocketDispatcher } from '../../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(rocketDispatcher());
  }, []);

  return (
    <div>
      <h1>Rockets Page</h1>
    </div>
  );
};

export default Rockets;
