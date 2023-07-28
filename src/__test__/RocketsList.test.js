import React from 'react';
import { render, screen, fireEvent  } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Rocket from '../components/rockets/Rocket';

// Create a mock Redux store
const mockStore = configureStore([]);

describe('Rocket', () => {
  it('renders rocket details correctly', () => {
    const mockRocket = {
      id: '1',
      name: 'Rocket 1',
      description: 'Description for Rocket 1',
      image: 'path/to/image',
      wikipedia: 'https://example.com/rocket1',
      reserved: true,
    };

    render(
      <Provider store={mockStore({})}>
        <Rocket rocket={mockRocket} />
      </Provider>
    );

    // Assertions for rocket details
    const rocketName = screen.getByText('Rocket 1');
    const rocketDescription = screen.getByText('Description for Rocket 1');
    const cancelReservationButton = screen.getByText('Cancel Reservation');

    expect(rocketName).toBeInTheDocument();
    expect(rocketDescription).toBeInTheDocument();
    expect(cancelReservationButton).toBeInTheDocument();

    // Ensure "Reserve Rocket" button is not present
    const reserveRocketButton = screen.queryByText('Reserve Rocket');
    expect(reserveRocketButton).toBeNull();
  });

  it('handles button click correctly', () => {
    const mockRocket = {
      id: '2',
      name: 'Rocket 2',
      description: 'Description for Rocket 2',
      image: 'path/to/image',
      wikipedia: 'https://example.com/rocket2',
      reserved: false,
    };

    const store = mockStore({});

    render(
      <Provider store={store}>
        <Rocket rocket={mockRocket} />
      </Provider>
    );

    // Click on the "Reserve Rocket" button
    const reserveRocketButton = screen.getByText('Reserve Rocket');
    fireEvent.click(reserveRocketButton);

    // Ensure that the action was dispatched with the correct rocket ID
    const actions = store.getActions();
    expect(actions).toEqual([{ type: 'rockets/toggleReserve', payload: '2' }]);
  });
});
