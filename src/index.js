import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { PortfolioProvider } from './context';

ReactDOM.render(
  <React.StrictMode>
    <PortfolioProvider>
      <App />
    </PortfolioProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
