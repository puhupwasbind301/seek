

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Flag = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  margin-bottom: 2rem;
`;

const DetailInfo = styled.div`
  max-width: 600px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const DetailText = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0;
`;

const BorderCountries = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
`;

const BorderCountryLink = styled(Link)`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.elementBackgroundColor};
  color: ${({ theme }) => theme.textColor};
  border-radius: 5px;
  text-decoration: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

interface CountryDetailProps {
  country: any;
}

const CountryDetail: React.FC<CountryDetailProps> = ({ country }) => {
  return (
    <DetailContainer>
      <Flag src={country.flag} alt={`${country.name} flag`} />
      <DetailInfo>
        <Title>{country.name}</Title>
        <DetailText><strong>Native Name:</strong> {country.nativeName}</DetailText>
        <DetailText><strong>Population:</strong> {country.population.toLocaleString()}</DetailText>
        <DetailText><strong>Region:</strong> {country.region}</DetailText>
        <DetailText><strong>Subregion:</strong> {country.subregion}</DetailText>
        <DetailText><strong>Capital:</strong> {country.capital}</DetailText>
        <DetailText><strong>Top Level Domain:</strong> {country.topLevelDomain.join(', ')}</DetailText>
        <DetailText><strong>Currencies:</strong> {country.currencies.map((currency: any) => currency.name).join(', ')}</DetailText>
        <DetailText><strong>Languages:</strong> {country.languages.map((lang: any) => lang.name).join(', ')}</DetailText>
        <DetailText><strong>Borders:</strong></DetailText>
        <BorderCountries>
          {country.borders && country.borders?.map((border: string) => (
            <BorderCountryLink key={border} to={`/country/${border}`}>
              {border}
            </BorderCountryLink>
          ))}
        </BorderCountries>
      </DetailInfo>
    </DetailContainer>
  );
};

export default CountryDetail;
