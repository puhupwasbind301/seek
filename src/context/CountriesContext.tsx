import React, { createContext, useState, useContext, ReactNode } from 'react';
import countriesData from '../assets/data.json';

export interface Country {
  name: string;
  alpha3Code: string;
  population?: number;
  region?: string;
  capital?: string;
  flag?: string;
  [key: string]: any;
}

export interface CountriesContextProps {
  countries: Country[];
  filter: string;
  setFilter: (filter: string) => void;
}

export const CountriesContext = createContext<CountriesContextProps | undefined>(undefined);

export const useCountries = () => {
  const context = useContext(CountriesContext);
  if (!context) {
    throw new Error('useCountries must be used within a CountriesProvider');
  }
  return context;
};

interface CountriesProviderProps extends React.HTMLAttributes<HTMLDivElement> {
  value: CountriesContextProps;
}

export const CountriesProvider: React.FC<CountriesProviderProps> = ({ children, value }) => {
  const [countries, setCountries] = useState<Country[]>(countriesData as any);
  const [filter, setFilter] = useState<string>('');

  return (
    <CountriesContext.Provider value={{ countries, filter, setFilter }}>
      {children}
    </CountriesContext.Provider>
  );
};
