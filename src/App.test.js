import { render, screen } from '@testing-library/react';
import App from './App';
// import { MapContainer, Marker, TileLayer } from 'react-leaflet';
jest.mock("react-leaflet");

// Example test case
test('First Test case - Check IP Address is rendered', () => {
  render(<App />);


  const ipElement = screen.getByText('IP Address'); // If using data-testid attribute

  expect(ipElement).toBeInTheDocument();
});
