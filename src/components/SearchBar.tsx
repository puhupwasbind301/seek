import React from 'react';
import styled from 'styled-components';
import { useCountries } from '../context/CountriesContext';

const SearchContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.elementBackground};
  padding: 0.5rem 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background: none;
  color: ${({ theme }) => theme.text};
  font-size: 0.9rem;

  &::placeholder {
    color: ${({ theme }) => theme.inputPlaceholder};
  }
`;

const SearchBar: React.FC = () => {
  const { filter, setFilter } = useCountries();

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search for a country..."
      />
    </SearchContainer>
  );
};

export default SearchBar;
