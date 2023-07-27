import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Mission from '../components/missions/Mission';
import '@testing-library/jest-dom/extend-expect';

const mockStore = configureStore([]);

const renderMissionComponent = (missionData) => {
  const store = mockStore({});
  return render(
    <Provider store={store}>
      <table>
        <tbody>
          <Mission /* eslint-disable */{...missionData} />
        </tbody>
      </table>
    </Provider>,
  );
};

describe('Mission component', () => {
  test('renders correctly when not joined', () => {
    const missionData = {
      id: 1,
      name: 'Mission 1',
      description: 'Mission 1 Description',
      joined: false,
    };

    const { getByText } = renderMissionComponent(missionData);

    expect(getByText('Mission 1')).toBeInTheDocument();
    expect(getByText('Mission 1 Description')).toBeInTheDocument();
    expect(getByText('JOIN MISSION')).toBeInTheDocument();
  });

  test('renders correctly when joined', () => {
    const missionData = {
      id: 2,
      name: 'Mission 2',
      description: 'Mission 2 Description',
      joined: true,
    };

    const { getByText } = renderMissionComponent(missionData);

    expect(getByText('Mission 2')).toBeInTheDocument();
    expect(getByText('Mission 2 Description')).toBeInTheDocument();
    expect(getByText('LEAVE MISSION')).toBeInTheDocument();
  });

  test('dispatches joinMission when Join Mission button is clicked', () => {
    const missionData = {
      id: 3,
      name: 'Mission 3',
      description: 'Mission 3 Description',
      joined: false,
    };

    const { getByText } = renderMissionComponent(missionData);

    const joinButton = getByText('JOIN MISSION');
    fireEvent.click(joinButton);

    const store = mockStore({});
    const expectedAction = store.dispatch({ type: 'missionlist/joinMission', payload: 3 });
    expect(store.getActions()).toContainEqual(expectedAction);
  });

  test('dispatches leaveMission when Leave Mission button is clicked', () => {
    const missionData = {
      id: 4,
      name: 'Mission 4',
      description: 'Mission 4 Description',
      joined: true,
    };

    const { getByText } = renderMissionComponent(missionData);

    const leaveButton = getByText('LEAVE MISSION');
    fireEvent.click(leaveButton);

    const store = mockStore({});
    const expectedAction = store.dispatch({ type: 'missionlist/leaveMission', payload: 4 });
    expect(store.getActions()).toContainEqual(expectedAction);
  });
});
