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
    }}
    >
      <div style={{ width: '40%' }}>
        <h2>My Missions</h2>
        <hr />
        {filteredMissions.map((mission) => (
          <>
            <div>{mission.name}</div>
            <hr />
          </>
        ))}
      </div>
      <div style={{ width: '40%' }}>
        <h2>My Rockets</h2>
        <hr />
        {filteredRockets.map((rocket) => (
          <>
            <div>{rocket.name}</div>
            <hr />
          </>
        ))}
      </div>
    </div>
  );
}

export default MyProfileLogic;
