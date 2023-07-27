import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './Rocket.css';
import { useDispatch } from 'react-redux';
import { toggleReserve } from '../../redux/rockets/rocketsSlice';

const StyledRocket = styled.div`
  display: flex;
  height: 250px;
  margin: 20px;
  .image {
    width: 350px;
    margin-right: 20px;
    img {
      width: 350px;
      height: 100%;
      object-fit: fill;
    }
  }
  button {
    border-radius: 5px;
    font-size: 20px;
    padding: 10px 20px;
    border: 1px solid #6c757d;
  }
`;

function Rocket({ key, rocket }) {
  const dispatch = useDispatch();

  function toggleReserved(id) {
    dispatch(toggleReserve(id));
  }

  return (
    <StyledRocket key={key} id="mobileVersion">
      <div className="image">
        <img id="rocket-image" src={rocket.image} alt={rocket.name} />
      </div>
      <div>
        <h2>{rocket.name}</h2>
        <p>
          {rocket.reserved && (
          <span style={{
            color: '#fff', background: '#007bff', marginRight: '20px', borderRadius: '5px', padding: '2px 5px',
          }}
          >
            Reserved
          </span>
          )}
          {rocket.description}
        </p>
        <button style={rocket.reserved ? { color: '#6c757d', background: '#fff' } : { color: '#fff', background: '#007bff' }} type="button" onClick={() => toggleReserved(rocket.id)}>{ rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket' }</button>
      </div>
    </StyledRocket>
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
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Rocket;
