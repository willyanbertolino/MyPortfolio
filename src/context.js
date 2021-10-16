import React, { useState, useContext } from 'react';
import { links } from './data/links';
import { projects } from './data/projects';

const PortfolioContext = React.createContext();

export const PortfolioProvider = ({ children }) => {
  const [page, setPage] = useState('home');

  const changePage = (value) => {
    setPage(value);
  };

  return (
    <PortfolioContext.Provider value={{ links, page, changePage, projects }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortifolioContext = () => {
  return useContext(PortfolioContext);
};
