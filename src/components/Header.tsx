import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.elementBackgroundColor};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.textColor};
  text-decoration: none;
`;

const ThemeSwitcher = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.textColor};
`;

interface HeaderProps {
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  return (
    <StyledHeader>
      <Logo to="/">Where in the world?</Logo>
      <ThemeSwitcher onClick={toggleTheme}>Dark Mode</ThemeSwitcher>
    </StyledHeader>
  );
};

export default Header;
