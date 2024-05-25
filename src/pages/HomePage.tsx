import React, { useState } from 'react';
import styled from 'styled-components';
import { useCountries } from '../context/CountriesContext';
import CountryCard from '../components/CountryCard';
import SearchFilter from '../components/SearchFilter';

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
`;

const HomePage: React.FC = () => {
  const { countries } = useCountries();
  const [searchValue, setSearchValue] = useState<string>('');
  const [regionValue, setRegionValue] = useState<string>('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRegionValue(e.target.value);
  };

  const filteredCountries = countries.filter((country) => {
    if (!searchValue && !regionValue) return true;
    if (searchValue && !regionValue) {
      return country.name.toLowerCase().includes(searchValue.toLowerCase());
    }
    if (!searchValue && regionValue) {
      return country.region === regionValue;
    }
    return (
      country.name.toLowerCase().includes(searchValue.toLowerCase()) &&
      country.region === regionValue
    );
  });

  return (
    <div>
      <SearchFilter
        searchValue={searchValue}
        handleSearchChange={handleSearchChange}

        regionValue={regionValue}
        handleRegionChange={handleRegionChange}
      />
      <HomeContainer>
        {filteredCountries?.map((country) => (
          <CountryCard key={country.alpha3Code} country={country} />
        ))}
      </HomeContainer>
    </div>
  );
};

export default HomePage;
