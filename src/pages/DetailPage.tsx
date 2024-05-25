import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import countriesData from '../assets/data.json';
import CountryDetail from '../components/CountryDetail';
import { Country } from '../types';

interface CountryParams {
  alpha3Code: string;
}

const DetailPageContainer = styled.div`
  padding: 2rem;
  background-color: ${(props) => props.theme.bodyBackgroundColor};
  color: ${(props) => props.theme.textColor};
`;

const BackButton = styled(Link)`
  display: inline-block;
  margin-bottom: 2rem;
  padding: 0.5rem 2rem;
  background-color: ${(props) => props.theme.elementBackgroundColor};
  color: ${(props) => props.theme.textColor};
  text-decoration: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const DetailPage: React.FC = () => {
  const { alpha3Code } = useParams<keyof CountryParams>() as CountryParams;
  const [country, setCountry] = useState<Country | null>(null);

  useEffect(() => {
    const foundCountry:any = countriesData.find((c) => c.alpha3Code === alpha3Code);
    setCountry(foundCountry || null);
  }, [alpha3Code]);

  if (!country) return <div>Loading...</div>;

  return (
    <DetailPageContainer>
      <BackButton to="/">Back</BackButton>
      <CountryDetail country={country} />
    </DetailPageContainer>
  );
};

export default DetailPage;
