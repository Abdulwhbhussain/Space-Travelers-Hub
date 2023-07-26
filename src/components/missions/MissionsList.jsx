import React from 'react';
import PropTypes from 'prop-types';
import Mission from './Mission';
import Table from 'react-bootstrap/Table';

function MissionsList({ missions }) {
  return (
    <Table className="mission-container">
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody className="mission">
        {missions.map((mission) => (
          <Mission key={mission.id} mission={mission} />
        ))}
      </tbody>
    </Table>
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
    })
  ).isRequired,
};

export default MissionsList;
