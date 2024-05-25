import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import DetailPage from './DetailPage';
import countriesData from '../assets/data.json';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../styles/theme';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

const mockUseParams = require('react-router-dom').useParams;

describe('DetailPage', () => {
  it('displays loading state initially', () => {
    mockUseParams.mockReturnValue({ alpha3Code: 'TST' });

    render(
      <BrowserRouter>
        <ThemeProvider theme={lightTheme}>
          <DetailPage />
        </ThemeProvider>
      </BrowserRouter>
    );

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it('renders country details correctly', async () => {
    const testCountry = countriesData[0];
    mockUseParams.mockReturnValue({ alpha3Code: testCountry.alpha3Code });

    render(
      <MemoryRouter initialEntries={[`/country/${testCountry.alpha3Code}`]}>
        <ThemeProvider theme={lightTheme}>
          <Routes>
            <Route path="/country/:alpha3Code" element={<DetailPage />} />
          </Routes>
        </ThemeProvider>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(testCountry.name)).toBeInTheDocument();
    });

    expect(screen.getByText(testCountry.capital || "")).toBeInTheDocument();
    expect(screen.getByText(testCountry.region)).toBeInTheDocument();
  });

  it('navigates back to the home page when the back button is clicked', async () => {
    const testCountry = countriesData[0];
    mockUseParams.mockReturnValue({ alpha3Code: testCountry.alpha3Code });

    render(
      <MemoryRouter initialEntries={[`/country/${testCountry.alpha3Code}`]}>
        <ThemeProvider theme={lightTheme}>
          <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="/country/:alpha3Code" element={<DetailPage />} />
          </Routes>
        </ThemeProvider>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(testCountry.name)).toBeInTheDocument();
    });

    const backButton = screen.getByRole('link', { name: /back/i });
    expect(backButton).toBeInTheDocument();
    await waitFor(() => {
      backButton.click();
    });

    await waitFor(() => {
      expect(screen.getByText(/Home Page/i)).toBeInTheDocument();
    });
  });
});
