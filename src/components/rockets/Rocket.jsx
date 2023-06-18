import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleReserve } from '../../redux/rockets/rocketsSlice';

function Rocket({ key, rocket }) {
  const dispatch = useDispatch();

  function toggleReserved(id) {
    dispatch(toggleReserve(id));
  }

  return (
    <div key={key}>
      <div>
        <img src={rocket.image} alt={rocket.name} />
      </div>
      <div>
        <h2>{rocket.name}</h2>
        <p>
          {rocket.reserved && <span style={{ color: '#fff', background: '#007bff' }}>Reserved</span>}
          {rocket.description}
        </p>
        <button style={rocket.reserved ? { color: '#6c757d', background: '#fff' } : { color: '#fff', background: '#007bff' }} type="button" onClick={() => toggleReserved(rocket.id)}>{ rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket' }</button>
      </div>
    </div>
  );
}

Rocket.propTypes = {
  key: PropTypes.string.isRequired,
  rocket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    wikipedia: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Rocket;
