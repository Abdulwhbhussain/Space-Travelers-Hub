import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

function MyProfileLogic() {
  const { rockets } = useSelector((state) => state.rockets);
  const { missions } = useSelector((state) => state.missions);

  const filteredRockets = rockets.filter((rocket) => {
    if (rocket.reserved) {
      return true;
    }
    return false;
  });

  const filteredMissions = missions.filter((mission) => {
    if (mission.reserved) {
      return true;
    }
    return false;
  });

  let reservedRockets = [];
  let reservedMissions = [];

  useEffect(() => {
    reservedRockets = filteredRockets();
    reservedMissions = filteredMissions();
  });

  return (
    <div style={{
      width: '100%',
      margin: '2rem',
      height: 'fit-content',
      display: 'flex',
    }}
    >
      <div style={{ width: '50%' }}>
        <h2>My Missions</h2>
        <hr />
        {reservedMissions.map((mission) => (
          <>
            <div>{mission.name}</div>
            <hr />
          </>
        ))}
      </div>
      <div style={{ width: '50%' }}>
        <h2>My Rockets</h2>
        <hr />
        {reservedRockets.map((rocket) => (
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
