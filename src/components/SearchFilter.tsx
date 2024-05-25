import React from 'react';
import styled from 'styled-components';

const SearchFilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const SearchInput = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 5px;
  border: none;
  width: 300px;
  background-color: ${({ theme }) => theme.elementBackgroundColor};
  color: ${({ theme }) => theme.textColor};
`;

const FilterSelect = styled.select`
  padding: 0.75rem 1rem;
  border-radius: 5px;
  border: none;
  background-color: ${({ theme }) => theme.elementBackgroundColor};
  color: ${({ theme }) => theme.textColor};
`;

interface SearchFilterProps {
  searchValue: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  regionValue: string;
  handleRegionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  searchValue,
  handleSearchChange,
  regionValue,
  handleRegionChange,
}) => {
  return (
    <SearchFilterContainer>
      <SearchInput
        type="text"
        placeholder="Search for a country..."
        value={searchValue}
        onChange={handleSearchChange}
      />
      <FilterSelect value={regionValue} onChange={handleRegionChange}>
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </FilterSelect>
    </SearchFilterContainer>
  );
};

export default SearchFilter;
