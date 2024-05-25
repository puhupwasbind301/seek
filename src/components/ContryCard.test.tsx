///* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CountryCard from './CountryCard';

const mockCountry = {
  name: 'Test Country',
  alpha3Code: 'TST',
  population: 1000000,
  region: 'Test Region',
  capital: 'Test Capital',
  flag: 'test-flag.jpg',
};

describe('CountryCard Component', () => {
  it('should render country details correctly', () => {
    render(
      <Router>
        <CountryCard country={mockCountry} />
      </Router>
    );
 });
});
