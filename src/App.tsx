import React, { useEffect } from 'react';
import Routes from './routes';

import { checkIsAuth } from './services/getIsAuth';
import updateReduxState from './services/updateReduxState';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import GlobalStyle from '../src/styles/GlobalStyle';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './customToast.css'

const App: React.FC = () => {
  useEffect(() => {
    checkIsAuth();
    updateReduxState();
  }, []);

  return (
    <>
      <Routes />
      <ToastContainer />
      <GlobalStyle />
    </>
  );
}

export default App;
