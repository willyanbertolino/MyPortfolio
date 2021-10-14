import React, { useState, useContext } from 'react';

const PortfolioContext = React.createContext();

export const PortfolioProvider = ({ children }) => {
  const links = [
    {
      path: '/',
      pageName: 'home',
    },
    {
      path: '/about',
      pageName: 'about',
    },
    {
      path: '/projects',
      pageName: 'projects',
    },
    {
      path: '/contact',
      pageName: 'contact',
    },
  ];

  const [page, setPage] = useState('home');

  const changePage = (value) => {
    console.log(value);
    setPage(value);
  };

  return (
    <PortfolioContext.Provider value={{ links, page, changePage }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortifolioContext = () => {
  return useContext(PortfolioContext);
};
