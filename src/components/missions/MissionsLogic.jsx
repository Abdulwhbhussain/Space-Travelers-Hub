import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../../redux/missions/missionsSlice';
import MissionsList from './MissionsList';
import '../utilities/styles/Loader.css';

function MissionsLogic() {
  const { missions, isLoading, error } = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  if (isLoading) return <div className="loader" />;

  if (error) return <div>{error}</div>;

  return (
    <div style={{ width: '100%', padding: '0', height: 'fit-content' }}>
      <MissionsList missions={missions} />
    </div>
  );
}

export default MissionsLogic;
