import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { AiOutlineLogout } from 'react-icons/ai';

import { remove_user } from '../../store/user/actions';
import { ApplicationStore } from '../../store';
import { change_screen } from '../../store/dashboard/actions';
import { Screen } from '../../store/dashboard/types';

import CardMenu from '../../components/Dashboard/CardMenu';
import CardMenuMobile from '../../components/Dashboard/CardMenuMobile';
import Deposit from '../../components/Dashboard/Deposit';
import Payments from '../../components/Dashboard/Payments';
import Plans from '../../components/Dashboard/Plans';
import Transactions from '../../components/Dashboard/Transactions';
import Sidemenu from '../../components/Sidemenu'
import { ExitModal } from '../../components/Dashboard/ExitModal';

import logoImg from '../../assets/ibank-logo-white.png';

import {
  BottomNavigationBox,
  TabsContainer,
  Tab,
  TabName,
  IconImage,
  StyleNavbar
} from '../../styles/componentes/Dashboard'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Background } from '../../styles/componentes/Dashboard/Background';

const Dashboard: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const currentScreen = useSelector((store: ApplicationStore) => store.dashboard.current_screen);

  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isExitModalOpen, setIsExitModalOpen] = useState(false);

  const changeComponent = useCallback((title: Screen) => {
    setIsExitModalOpen(false);
    dispatch(change_screen(title));
  }, [dispatch]);

  function close() {
    setIsSideMenuOpen(false);
  }

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

  return (
    <>
      <ExitModal
        isOpen={isExitModalOpen}
        onRequestClose={handleCloseExitModal}
        onLogOut={handleLogOut}
      />

      <StyleNavbar bg="light" expand="lg">
        <Navbar.Brand >
          <img src={logoImg} alt="Logo" width={100}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              className={currentScreen === 'Depósitos' ? 'active' : ''} 
              onClick={() => changeComponent('Depósitos')} 
            >
              Depósitos
            </Nav.Link>
            <Nav.Link
              className={currentScreen === 'Pagamentos' ? 'active' : ''} 
              onClick={() => changeComponent('Pagamentos')} 
            > 
              Pagamentos
            </Nav.Link>
            <Nav.Link 
              className={currentScreen === 'Planos' ? 'active' : ''} 
              onClick={() => changeComponent('Planos')}  
            > 
              Planos
            </Nav.Link>
            <Nav.Link
              className={currentScreen === 'Transações' ? 'active' : ''} 
              onClick={() => changeComponent('Transações')} 
            > 
              Transações
            </Nav.Link>
            <Nav.Link
              style={{ position: "absolute", right: "20px" }}
              onClick={handleOpenExitModal}
            >
              <AiOutlineLogout size={24} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </StyleNavbar>

      <BottomNavigationBox>
        <Sidemenu isOpen={isSideMenuOpen} close={close} changeComponent={changeComponent} />
        <TabsContainer>
          <Tab  >
            <IconImage onClick={() => { setIsSideMenuOpen(!isSideMenuOpen) }} src="/menu-mobile.png" alt="Menu" />
            <TabName >Operações</TabName>
          </Tab>
          <Tab >
            <FaArrowRight size={28} onClick={handleOpenExitModal} />
            <TabName>Sair</TabName>
          </Tab>
        </TabsContainer>
      </BottomNavigationBox>


      <Background>
        {currentScreen === 'Depósitos' && <Deposit />}
        {currentScreen === 'Pagamentos' && <Payments func={changeComponent}></Payments>}
        {currentScreen === 'Planos' && <Plans />}
        {currentScreen === 'Transações' && <Transactions></Transactions>}
      </Background>

    </>
  );
}



const NavBarWeb = () => {

}


export default Dashboard;