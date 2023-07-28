import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import MyProfileLogic from '../components/myprofile/MyProfileLogic';

// Create a mock Redux store
const mockStore = configureStore([]);

describe('MyProfileLogic', () => {
  it('renders filtered rockets and missions correctly', () => {
    // Mock data for rockets and missions
    const mockRockets = [
      { id: '1', name: 'Rocket 1', reserved: true },
      { id: '2', name: 'Rocket 2', reserved: false },
    ];

    const mockMissions = [
      { id: '1', name: 'Mission 1', reserved: true },
      { id: '2', name: 'Mission 2', reserved: false },
    ];

    const store = mockStore({
      rockets: { rockets: mockRockets },
      missions: { missions: mockMissions },
    });

    render(
      <Provider store={store}>
        <MyProfileLogic />
      </Provider>
    );

    const myMissionsTitle = screen.getByText('My Missions');
    const myRocketsTitle = screen.getByText('My Rockets');

    expect(myMissionsTitle).toBeInTheDocument();
    expect(myRocketsTitle).toBeInTheDocument();

    const joinedMission = screen.queryByText('Mission 1');
    expect(joinedMission).toBeInTheDocument();

    const reservedRocket = screen.queryByText('Rocket 1');
    expect(reservedRocket).toBeInTheDocument();

    const notJoinedMission = screen.queryByText('Mission 2');
    expect(notJoinedMission).toBeNull();

    const notReservedRocket = screen.queryByText('Rocket 2');
    expect(notReservedRocket).toBeNull();
  });
});
