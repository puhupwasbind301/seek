import React from 'react';
import { useCountries } from '../context/CountriesContext';
import CountryCard from '../components/CountryCard';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2rem;
`;

const HomePage: React.FC = () => {
  const { countries, filter } = useCountries();

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <HomeContainer>
      {filteredCountries?.map((country) => (
        <CountryCard key={country.alpha3Code} country={country} />
      ))}
    </HomeContainer>
  );
};

export default HomePage;
