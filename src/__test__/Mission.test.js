// Mission.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import { toggleReserve } from '../../redux/missions/missionsSlice';
import Mission from './Mission';

// Mock the useDispatch hook to avoid actual Redux store actions
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

describe('Mission Component', () => {
  const mockDispatch = jest.fn();

  // Mock the useDispatch hook to return our mockDispatch function
  useDispatch.mockReturnValue(mockDispatch);

  const mockMission = {
    id: '1',
    name: 'Test Mission',
    description: 'This is a test mission',
    wikipedia: 'https://en.wikipedia.org/wiki/Test_Mission',
    reserved: false,
  };

  test('renders mission details correctly', () => {
    render(<Mission mission={mockMission} />);

    const missionTitle = screen.getByText(mockMission.name);
    const missionDescription = screen.getByText(mockMission.description);
    const joinButton = screen.getByText('Join Mission');

    expect(missionTitle).toBeInTheDocument();
    expect(missionDescription).toBeInTheDocument();
    expect(joinButton).toBeInTheDocument();
  });

  test('renders "Join Mission" button when the mission is not reserved', () => {
    render(<Mission mission={mockMission} />);

    const joinButton = screen.getByText('Join Mission');
    const leaveButton = screen.queryByText('Leave Mission');

    expect(joinButton).toBeInTheDocument();
    expect(leaveButton).not.toBeInTheDocument();
  });

  test('renders "Leave Mission" button when the mission is reserved', () => {
    const reservedMission = { ...mockMission, reserved: true };
    render(<Mission mission={reservedMission} />);

    const joinButton = screen.queryByText('Join Mission');
    const leaveButton = screen.getByText('Leave Mission');

    expect(joinButton).not.toBeInTheDocument();
    expect(leaveButton).toBeInTheDocument();
  });

  test('dispatches "toggleReserve" action when the buttons are clicked', () => {
    render(<Mission mission={mockMission} />);

    const joinButton = screen.getByText('Join Mission');
    const leaveButton = screen.queryByText('Leave Mission');

    fireEvent.click(joinButton);
    expect(mockDispatch).toHaveBeenCalledWith(toggleReserve(mockMission.id));

    fireEvent.click(leaveButton);
    expect(mockDispatch).toHaveBeenCalledWith(toggleReserve(mockMission.id));
  });
});
