import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/global';
import './scss/style.scss';
import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <Routes />

    <GlobalStyle />
  </Router>
);
export default App;
