import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { AiOutlineLogout } from 'react-icons/ai';

import { remove_user } from '../../store/user/actions';
import { ApplicationStore } from '../../store';
import { change_screen } from '../../store/dashboard/actions';
import { Screen } from '../../store/dashboard/types';

import Deposit from '../../components/Dashboard/Deposit';
import Payments from '../../components/Dashboard/Payments';
import Plans from '../../components/Dashboard/Plans';
import Transactions from '../../components/Dashboard/Transactions';
import { ExitModal } from '../../components/Dashboard/ExitModal';

import LogoWhite from './../../components/LogoWhite/index';
import { Background, Header, NavSection } from '../../styles/pages/Dashboard';

const Dashboard: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const currentScreen = useSelector((store: ApplicationStore) => store.dashboard.current_screen);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExitModalOpen, setIsExitModalOpen] = useState(false);

  const changeComponent = useCallback((title: Screen) => {
    setIsMenuOpen(false);
    dispatch(change_screen(title));
  }, [dispatch]);

  const handleLogOut = () => {
    dispatch(remove_user());
    history.push('/');
  }
  const handleOpenExitModal = () => {
    setIsExitModalOpen(true);
  }
  const handleCloseExitModal = () => {
    setIsExitModalOpen(false);
  }

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <Background>
      <Header>
        <LogoWhite />

        <NavSection isOpen={isMenuOpen} className={isMenuOpen ? 'on' : ''}>
          <div className="menu-toggle" onClick={handleMenuOpen}>
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </div>

          <div className="navbar">
            <button
              className={currentScreen === 'transactions' ? 'active' : ''} 
              onClick={() => changeComponent('transactions')} 
            > 
              Transações
            </button>

            <button
              className={currentScreen === 'deposits' ? 'active' : ''} 
              onClick={() => changeComponent('deposits')} 
            >
              Depósitos
            </button>
            <button
              className={currentScreen === 'payments' ? 'active' : ''} 
              onClick={() => changeComponent('payments')} 
            > 
              Pagamentos
            </button>
            <button 
              className={currentScreen === 'plans' ? 'active' : ''} 
              onClick={() => changeComponent('plans')}  
            > 
              Planos
            </button>

            <button
              onClick={handleOpenExitModal}
            > 
              <AiOutlineLogout size={isMenuOpen ? 38 : 30} />
            </button>
          </div>
        </NavSection>
      </Header>

      <main>
        {currentScreen === 'deposits' && <Deposit />}
        {currentScreen === 'payments' && <Payments func={changeComponent}></Payments>}
        {currentScreen === 'plans' && <Plans />}
        {currentScreen === 'transactions' && <Transactions></Transactions>}
      </main>

      <ExitModal
        isOpen={isExitModalOpen}
        onRequestClose={handleCloseExitModal}
        onLogOut={handleLogOut}
      />
    </Background>
  );
}

export default Dashboard;