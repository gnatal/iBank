import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

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
        <Navbar.Brand href="#home">IBank</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => changeComponent('Depósitos')} href="">Depósitos</Nav.Link>
            <Nav.Link onClick={() => changeComponent('Pagamentos')} href=""> Pagamentos</Nav.Link>
            <Nav.Link onClick={() => changeComponent('Planos')} href="" > Planos</Nav.Link>
            <Nav.Link onClick={() => changeComponent('Transações')} href=""> Transações</Nav.Link>
            <Nav.Link 
              style={{ position: "absolute", right: "20px" }} 
              onClick={handleOpenExitModal} href=""
            > 
              Sair
              <FaArrowRight size={21} /> 
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
      <main>
        {currentScreen === 'Depósitos' && <Deposit />}
        {currentScreen === 'Pagamentos' && <Payments func={changeComponent}></Payments>}
        {currentScreen === 'Planos' && <Plans />}
        {currentScreen === 'Transações' && <Transactions></Transactions>}
      </main>

    </>
  );
}



const NavBarWeb = () => {

}


export default Dashboard;