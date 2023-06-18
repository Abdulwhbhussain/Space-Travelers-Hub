import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../../redux/rockets/rocketsSlice';
import styled from 'styled-components';
import '../utilities/styles/Loader.css';

const styledDiv = styled.div`
  width: 100%;
  margin: 2rem;
  height: fit-content;
`;

function RocketsLogic() {
  const { rockets, isLoading, error } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  console.log(rockets);
  console.log(isLoading);
  console.log(error);

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  if (isLoading) return <div className="loader" />;

  if (error) return <div>{error}</div>;

  return (
    <styledDiv>RocketsLogic</styledDiv>
  );
}

export default RocketsLogic;
