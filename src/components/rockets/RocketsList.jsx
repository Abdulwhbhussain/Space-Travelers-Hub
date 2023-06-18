import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Rocket from './Rocket';

// Styled Unordered List
const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
  overflow: hidden;
`;

function RocketsList({ rockets }) {
  return (
    <StyledUl>
      {rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          rocket={rocket}
        />
      ))}
    </StyledUl>
  );
}

RocketsList.propTypes = {
  rockets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      wikipedia: PropTypes.string.isRequired,
      reserved: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default RocketsList;
