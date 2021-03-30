import React, { useEffect } from 'react';
import Modal from 'react-modal'
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import { checkIsAuth } from './services/getIsAuth';
import updateReduxState from './services/updateReduxState';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.min.css';
import GlobalStyle from '../src/styles/GlobalStyle';

Modal.setAppElement("#root");

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
