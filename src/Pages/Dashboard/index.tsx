import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import gamaIcon from '../../assets/svgs/gama-icon.svg';
import CardMenu from '../../components/Dashboard/CardMenu';
import CardMenuMobile from '../../components/Dashboard/CardMenuMobile';
import Deposit from '../../components/Dashboard/Deposit';
import Payments from '../../components/Dashboard/Payments';
import Plans from '../../components/Dashboard/Plans';
import Transactions from '../../components/Dashboard/Transactions';
import { useDispatch, useSelector } from 'react-redux';
import { remove_user } from '../../store/user/actions';
import { ApplicationStore } from '../../store';
import { change_screen } from '../../store/dashboard/actions';
import { Screen } from '../../store/dashboard/types';
import ExitModal from '../../components/Dashboard/ExitModal';

import {
  BottomNavigationBox,
  TabsContainer,
  Tab,
  TabName,
  IconImage
} from '../../styles/componentes/Dashboard'

import Sidemenu from '../../components/Sidemenu'

const Dashboard: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const currentScreen = useSelector((store: ApplicationStore) => store.dashboard.current_screen);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  //Setting data accounts;
  const changeComponent = useCallback((title: Screen) => {
    setIsOpen(false);
    dispatch(change_screen(title));
  }, [dispatch]);

  const handleLogOut = useCallback((accepted: boolean) => {
    if (accepted) {
      dispatch(remove_user());

      history.push('/');
    } else {
      setIsExiting(false);
    }
  }, [dispatch, history]);

  function setModal() {
    if (modalIsOpen === true)
      setIsOpen(false);
    else
      setIsOpen(true);
  }

  function close() {
    setIsSideMenuOpen(false);
  }

  return (
    <>
      { isExiting && <ExitModal setResponse={handleLogOut} />}
      <BottomNavigationBox>
        <Sidemenu isOpen={isSideMenuOpen} close={close} changeComponent={changeComponent} />
        <TabsContainer>
          <Tab  >
            <IconImage onClick={() => { setIsSideMenuOpen(!isSideMenuOpen) }} src="/menu-mobile.png" alt="Menu" />
            <TabName >Operações</TabName>
          </Tab>
          <Tab >
            <FaArrowRight size={28} onClick={() => setIsExiting(true)} />
            <TabName>Sair</TabName>
          </Tab>
        </TabsContainer>
      </BottomNavigationBox>
      <main>
        {/* Render component by currentScreen */}
        {currentScreen === 'Depósitos' && <Deposit />}
        {currentScreen === 'Pagamentos' && <Payments func={changeComponent}></Payments>}
        {currentScreen === 'Planos' && <Plans />}
        {currentScreen === 'Transações' && <Transactions></Transactions>}
      </main>

    </>
  );
}

export default Dashboard;