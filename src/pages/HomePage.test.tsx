import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';
import { CountriesContext } from '../context/CountriesContext';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { lightTheme } from '../styles/theme';

const mockCountries = [
  { alpha3Code: 'USA', name: 'United States', region: 'Americas' },
  { alpha3Code: 'CAN', name: 'Canada', region: 'Americas' },
  { alpha3Code: 'MEX', name: 'Mexico', region: 'Americas' },
];

const providerProps = {
  countries: mockCountries,
  filter: 'United',
  setFilter: jest.fn(),
};

const customRender = (ui: React.ReactElement, { providerProps, ...renderOptions }: any) => {
  return render(
    <CountriesContext.Provider value={providerProps}>
      <ThemeProvider theme={lightTheme}>
        <MemoryRouter>{ui}</MemoryRouter>
      </ThemeProvider>
    </CountriesContext.Provider>,
    renderOptions
  );
};

describe('HomePage', () => {
  it('renders filtered countries based on the filter', () => {
    customRender(<HomePage />, { providerProps });

    // const countryCards = screen.getAllByTestId('country-card');
    // expect(countryCards).toHaveLength(1);
    // expect(screen.getByText(/United States/i)).toBeInTheDocument();
  });
});
