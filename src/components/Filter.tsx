
import React from 'react';
import styled from 'styled-components';
import { useCountries } from '../context/CountriesContext';

const FilterContainer = styled.div`
  background: ${({ theme }) => theme.elementBackground};
  padding: 0.5rem 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-left: 1rem;
`;

const Select = styled.select`
  background: none;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.text};
  font-size: 0.9rem;
`;

const Filter: React.FC = () => {
  const { setFilter } = useCountries();

  return (
    <FilterContainer>
      <Select onChange={(e) => setFilter(e.target.value)}>
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
    </FilterContainer>
  );
};

export default Filter;
