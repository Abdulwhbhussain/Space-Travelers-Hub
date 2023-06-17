import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import './styles/Header.css';

const StyledHeader = styled.header`

`;

function Header() {
  return (
    <StyledHeader>
      <div>
        <img src="../../assets/planet.png" alt="Space Travelers' Hub" />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">Rockets</NavLink>
          </li>
          <li>
            <NavLink to="/missions" activeClassName="active">Missions</NavLink>
          </li>
          <hr />
          <li>
            <NavLink to="/profile" activeClassName="active">My Profile</NavLink>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
}

export default Header;
