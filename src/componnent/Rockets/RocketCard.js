import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelRocketBooking } from '../../redux/rockets/rockets';

const RocketCard = ({
  id, description, name, image, reserved,
}) => {
  const dispatch = useDispatch();
  const reservingRocket = (e) => {
    const { id } = e.target;
    dispatch(reserveRocket(+id));
  };

  const cancelReservation = (e) => {
    const { id } = e.target;
    dispatch(cancelRocketBooking(+id));
  };

  return (
    <div className="rocket-container flex-center">
      <div className="rocket-image">
        <img src={image} alt={name} />
      </div>
      <div className="rocket-info">
        <h3 className="rocket-name">{name}</h3>
        <p className="description">
          {reserved && <span className="reserved">Reserved</span>}
          {description}
        </p>
        {!reserved && (
          <button
            type="button"
            id={id}
            className="reserve-btn clickable"
            onClick={reservingRocket}
          >
            Reserve Rocket
          </button>
        )}
        {reserved && (
          <button
            type="button"
            id={id}
            className="cancel-btn clickable"
            onClick={cancelReservation}
          >
            Cancel Reservation
          </button>
        )}
      </div>
    </div>
  );
};

RocketCard.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default RocketCard;
