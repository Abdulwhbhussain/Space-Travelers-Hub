import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { toggleReserve } from '../../redux/missions/missionsSlice';

function Mission({ mission }) {
  const dispatch = useDispatch();

  const toggleReserved = (id) => {
    dispatch(toggleReserve(id));
  };

  return (
    <tr className="mission-row">
      <td className="mission-title">{mission.name}</td>
      <td className="mission-description">{mission.description}</td>
      <td className="member">{mission.reserved ? 'Active Member' : 'NOT A MEMBER'}</td>
      <td className="not-member">
        <Button variant="primary" onClick={() => toggleReserved(mission.id)}>
          {mission.reserved ? 'Leave Mission' : 'Join Mission'}
        </Button>
      </td>
    </tr>
  );
}

Mission.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    wikipedia: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Mission;
