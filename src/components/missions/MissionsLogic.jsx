import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../../redux/missions/missionsSlice';
import '../utilities/styles/Loader.css';

function MissionsLogic() {
  const { missions, isLoading, error } = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  console.log(missions);
  console.log(isLoading);
  console.log(error);

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  if (isLoading) return <div className="loader" />;

  if (error) return <div>{error}</div>;

  return (
    <div>MissionsLogic</div>
  );
}

export default MissionsLogic;
