import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CountriesProvider, CountriesContextProps } from './context/CountriesContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import Header from './components/Header';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  const countriesContextValue: CountriesContextProps = {
    countries: [], 
    filter: '', 
    setFilter: () => {}, 
  };

  return (
    <ThemeProvider>
      <CountriesProvider value={countriesContextValue}>
        <Router  basename="/seek">
          <GlobalStyles />
          <HeaderWrapper />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/country/:alpha3Code" element={<DetailPage />} />
          </Routes>
        </Router>
      </CountriesProvider>
    </ThemeProvider>
  );
};

const HeaderWrapper: React.FC = () => {
  const { toggleTheme } = useTheme();
  return <Header toggleTheme={toggleTheme} />;
};

export default App;
