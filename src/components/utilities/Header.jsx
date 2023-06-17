import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import picture from '../../assets/planet.png';
import './styles/Header.css';

const StyledHeader = styled.header`
  width: 100%;
  height: 100px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  div {
    margin-left: 2rem;
    width: 70%;
    display: flex;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
    }
    h1 {
      font-size: 1.5rem;
      margin-left: 1rem;
    }
  }
  nav {
    width: 30%;
    ul {
      display: flex;
      list-style: none;
      li {
        margin: 0 1rem;
        color: #3366CC !important;
        &:hover {
          font-weight: bold;
          text-decoration: underline;
          color: #3366CC !important;
        }
        
          
          
        
      }
    }
  }
`;

function Header() {
  return (
    <>
      <StyledHeader>
        <div className="title">
          <img src={picture} alt="Space Travelers' Hub" />
          <h1>Space Travelers&apos; Hub</h1>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact style={{ textDecoration: 'none', color: '#3366CC' }} activeClassName="active">Rockets</NavLink>
            </li>
            <li>
              <NavLink to="/missions" style={{ textDecoration: 'none', color: '#3366CC' }} activeClassName="active">Missions</NavLink>
            </li>
            <li>
              <NavLink to="/profile" style={{ textDecoration: 'none', color: '#3366CC' }} activeClassName="active">My Profile</NavLink>
            </li>
          </ul>
        </nav>
      </StyledHeader>
      <hr />
    </>
  );
}

export default Header;
