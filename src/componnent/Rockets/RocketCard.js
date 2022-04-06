import React from 'react';
import PropTypes from 'prop-types';

const RocketCard = ({
  id, description, name, image,
}) => (
  <div className="rocket-container flex-center">
    <div className="rocket-image">
      <img src={image} alt={name} />
    </div>
    <div className="rocket-info">
      <h3 className="rocket-name">{name}</h3>
      <p className="description">{description}</p>
      <button type="button" id={id} className="reserve-btn clickable">Reserve Rocket</button>
    </div>
  </div>
);

RocketCard.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default RocketCard;
