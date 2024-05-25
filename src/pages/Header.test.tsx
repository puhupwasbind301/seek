import React from 'react';
import { render } from '@testing-library/react';
import HomePage from './HomePage';
import { CountriesProvider, CountriesContextProps, Country } from '../context/CountriesContext'; 
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { lightTheme } from '../styles/theme';


const mockCountries: Country[] = [
  { alpha3Code: 'USA', name: 'United States', region: 'Americas', population: 331449281, capital: 'Washington, D.C.', flag: 'USA_flag.png' },
  { alpha3Code: 'CAN', name: 'Canada', region: 'Americas', population: 38005238, capital: 'Ottawa', flag: 'CAN_flag.png' },
  { alpha3Code: 'MEX', name: 'Mexico', region: 'Americas', population: 128932753, capital: 'Mexico City', flag: 'MEX_flag.png' },
];


const providerProps: CountriesContextProps = { 
  countries: mockCountries,
  filter: 'United',
  setFilter: jest.fn(),
};

const customRender = (ui: React.ReactElement, providerProps: CountriesContextProps, renderOptions?: any) => { 
  return render(
    <CountriesProvider value={providerProps}>
      <ThemeProvider theme={lightTheme}>
        <MemoryRouter>{ui}</MemoryRouter>
      </ThemeProvider>
    </CountriesProvider>,
    renderOptions
  );
};

describe('HomePage', () => {
  it('renders filtered countries based on the filter', () => {
    customRender(<HomePage />, providerProps);
  });
});
