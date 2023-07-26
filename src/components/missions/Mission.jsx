import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleReserve } from '../../redux/missions/missionsSlice';

function Mission({ key, mission }) {
  const dispatch = useDispatch();

  const toggleReserved = (id) => {
    dispatch(toggleReserve(id));
  };

  return (
    <>
    <Row key={key} className="mission-row">
      <Col className="mission-title">{mission.name}</Col>
      <Col xs={6} className="mission-description">{mission.description}</Col>
      <Col className="member">{mission.reserved ? 'Active Member' : 'NOT A MEMBER'}</Col>
      <Col className="join-member"><button type="button" onClick={() => toggleReserved(mission.id)}>{mission.reserved ? 'Leave Mission' : 'Join Mission'}</button></Col>
    </Row>      
    </>
    
  );
}

Mission.propTypes = {
  key: PropTypes.string.isRequired,
  mission: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    wikipedia: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Mission;
