import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../redux/store';
import MissionsList from '../components/missions/MissionsList';

const mockMissions = [
  {
    id: '1',
    name: 'Mission 1',
    description: 'Description for Mission 1',
    wikipedia: 'https://example.com/mission1',
    reserve: true,
  },
  {
    id: '2',
    name: 'Mission 2',
    description: 'Description for Mission 2',
    wikipedia: 'https://example.com/mission2',
    reserve: false,
  },
];

describe('MissionsList', () => {
  it('renders mission data correctly', () => {
    render(
      <Provider store={store}>
        <MissionsList missions={mockMissions} />
      </Provider>
    );

    const mission1Name = screen.getByText('Mission 1');
    const mission2Name = screen.getByText('Mission 2');

    expect(mission1Name).toBeInTheDocument();
    expect(mission2Name).toBeInTheDocument();
  });
});