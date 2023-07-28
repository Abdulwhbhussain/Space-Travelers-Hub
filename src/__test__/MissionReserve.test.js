import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Mission from '../components/missions/Mission';

// Create a mock Redux store
const mockStore = configureStore([]);

describe('Mission', () => {
  it('renders mission details correctly', () => {
    const mockMission = {
      id: '1',
      name: 'Mission 1',
      description: 'Description for Mission 1',
      wikipedia: 'https://example.com/mission1',
      reserved: true,
    };

    render(
      <Provider store={mockStore({})}>
        <Mission mission={mockMission} />
      </Provider>
    );

    const missionTitle = screen.getByText('Mission 1');
    const missionDescription = screen.getByText('Description for Mission 1');
    const activeMemberButton = screen.getByText('Active Member');

    expect(missionTitle).toBeInTheDocument();
    expect(missionDescription).toBeInTheDocument();
    expect(activeMemberButton).toBeInTheDocument();

    const notMemberButton = screen.queryByText('NOT A MEMBER');
    expect(notMemberButton).toBeNull();
  });

  it('handles button clicks correctly', () => {
    const mockMission = {
      id: '2',
      name: 'Mission 2',
      description: 'Description for Mission 2',
      wikipedia: 'https://example.com/mission2',
      reserved: false,
    };

    const store = mockStore({});

    render(
      <Provider store={store}>
        <Mission mission={mockMission} />
      </Provider>
    );

    const joinMissionButton = screen.getByText('Join Mission');
    fireEvent.click(joinMissionButton);

    const actions = store.getActions();
    expect(actions).toEqual([{ type: 'missions/toggleReserve', payload: '2' }]);
  });
});
