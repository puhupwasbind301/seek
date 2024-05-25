import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Scene = styled.div`
  width: 200px;
  height: 200px;
  perspective: 600px;
  margin: 3rem;

  @media (min-width: 777px) and (max-width: 877px) {
    margin: 50px auto;
  }
    
  @media (max-width: 596px) {
    margin: 50px auto;
  }
`;

const Cube = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 3s;

  &:hover {
    transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
  }
`;

const Face = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  backface-visibility: hidden;
`;

const Front = styled(Face)`
  transform: translateZ(180px);
  background-color: ${({ theme }) => theme.elementBackgroundColor};

  @media (min-width: 596px) and (max-width: 696px) {
    width: 90% !important;
  }
  
  @media (min-width: 877px) and (max-width: 977px) {
      width: 90% !important;
  }

  @media (min-width: 1160px) and (max-width: 1260px) {
    width: 90% !important;
  }
`;

const Back = styled(Face)`
  transform: rotateY(180deg) translateZ(180px);
  background-color: ${({ theme }) => theme.accentColor ?  theme.accentColor : "blue"};
  
  @media (min-width: 596px) and (max-width: 696px) {
    width: 90% !important;
  }

  @media (min-width: 877px) and (max-width: 977px) {
      width: 90% !important;
  }

  @media (min-width: 1160px) and (max-width: 1260px) {
    width: 90% !important;
  }
`;

const Left = styled(Face)`
  transform: rotateY(-90deg) translateZ(100px);
  background-color: ${({ theme }) => theme.secondaryColor};

  @media (min-width: 596px) and (max-width: 696px) {
    width: 90% !important;
  }

  @media (min-width: 877px) and (max-width: 977px) {
      width: 90% !important;
  }

  @media (min-width: 1160px) and (max-width: 1260px) {
    width: 90% !important;
  }
`;

const Right = styled(Face)`
  transform: rotateY(90deg) translateZ(100px);
  background-color: ${({ theme }) => theme.tertiaryColor};

  @media (min-width: 596px) and (max-width: 696px) {
    width: 90% !important;
  }

  @media (min-width: 877px) and (max-width: 977px) {
      width: 90% !important;
  }

  @media (min-width: 1160px) and (max-width: 1260px) {
    width: 90% !important;
  }
`;

const Flag = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.textColor};
`;

const CardText = styled.p`
  font-size: 0.875rem;
  margin: 0.25rem 0;
  color: ${({ theme }) => theme.textColor};
`;

const CountryCard: React.FC<{ country: any }> = ({ country }) => {
  return (
    <Link to={`/country/${country?.alpha3Code}`}>
      <Scene>
        <Cube>
          <Front>
            <Flag src={country?.flag} alt={`${country?.name} flag`} />
            <CardTitle>{country?.name}</CardTitle>
            <CardText><strong>Population:</strong> {country?.population?.toLocaleString()}</CardText>
            <CardText><strong>Region:</strong> {country?.region}</CardText>
            <CardText><strong>Capital:</strong> {country?.capital}</CardText>
          </Front>
          <Back>
            <Flag src={country?.flag} alt={`${country?.name} flag`} />
            <CardTitle>{country?.name}</CardTitle>
            <CardText><strong>Population:</strong> {country?.population?.toLocaleString()}</CardText>
            <CardText><strong>Region:</strong> {country?.region}</CardText>
            <CardText><strong>Capital:</strong> {country?.capital}</CardText>
          </Back>
          <Left>
            <Flag src={country?.flag} alt={`${country?.name} flag`} />
            <CardTitle>{country?.name}</CardTitle>
            <CardText><strong>Population:</strong> {country?.population?.toLocaleString()}</CardText>
            <CardText><strong>Region:</strong> {country?.region}</CardText>
            <CardText><strong>Capital:</strong> {country?.capital}</CardText>
          </Left>
          <Right>
            <Flag src={country?.flag} alt={`${country?.name} flag`} />
            <CardTitle>{country?.name}</CardTitle>
            <CardText><strong>Population:</strong> {country?.population?.toLocaleString()}</CardText>
            <CardText><strong>Region:</strong> {country?.region}</CardText>
            <CardText><strong>Capital:</strong> {country?.capital}</CardText>
          </Right>
        </Cube>
      </Scene>
    </Link>
  );
};

export default CountryCard;
