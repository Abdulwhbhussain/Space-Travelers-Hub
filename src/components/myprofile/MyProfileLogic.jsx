import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

function MyProfileLogic() {
  const { rockets } = useSelector((state) => state.rockets);
  const { missions } = useSelector((state) => state.missions);
  console.log(rockets);
  console.log(missions);

  const filteredRockets = rockets.filter((rocket) => rocket.reserved === true);
  const filteredMissions = missions.filter((mission) => mission.reserved === true);
  console.log(filteredMissions);
  console.log(filteredRockets);

  useEffect(() => {
    console.log('useEffect');
  });

  return (
    <div style={{
      width: '100%',
      padding: '0rem',
      height: 'fit-content',
      display: 'flex',
      marginLeft: '10%',
    }}>
      <div style={{ width: '40%' }}>
        <h2>My Missions</h2>
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {filteredMissions.map((mission) => (
              <tr key={mission.id}>
                <td>{mission.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ width: '40%', marginLeft: '2%' }}>
        <h2>My Rockets</h2>
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {filteredRockets.map((rocket) => (
              <tr key={rocket.id}>
                <td>{rocket.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyProfileLogic;
