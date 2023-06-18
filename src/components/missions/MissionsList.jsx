import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import Mission from './Mission';

function MissionsList({ missions }) {
  return (
    <Container>
      <Row>
        <Col>Mission</Col>
        <Col xs={6}>Description</Col>
        <Col>Status</Col>
        <Col>   </Col>
      </Row>
      {missions.map((mission) => (
        <Mission key={mission.id} mission={mission} />
      ))}
    </Container>
  );
}

MissionsList.propTypes = {
  missions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      wikipedia: PropTypes.string.isRequired,
      reserve: PropTypes.bool,
    }),
  ).isRequired,
};

export default MissionsList;
