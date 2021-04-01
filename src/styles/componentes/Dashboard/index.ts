import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';

export const StyleNavbar = styled(Navbar)`
  @media (max-width: 920px) {
    display: none;
  }
  height: 8vh;
  background: var(--primary-bg-color) !important;
  margin-bottom: 0px;

  .navbar-nav {
    align-items: center;
  }

  a {
    color: #fff !important;
    margin: 0 0.5rem;
    transition: all 0.2s;

    &.active {
      font-weight: bolder;
      font-size: 105%;
      background: #fff;
      color: #000 !important;
      border-radius: 1rem;
      padding: 0.5rem;
    }

    &:hover {
      font-weight: bolder;
      transform: scale(1.05);
    }
  }
`;

export const BottomNavigationBox = styled.div`
  @media (min-width: 920px) {
    display: none;
  }
  width: 100vw;
  height: 10vh;
  position: fixed;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primary-bg-color);
  padding: 5px 0;
  z-index: 100;
  /* border-top: 1vh solid #573b61; */
`;

export const TabsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Tab = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: #fff;
`;

export const TabName = styled.span`
  font-size: 0.8em;
  text-align: center;
  color: #fff;
  text-transform: capitalize;
`;

export const IconImage = styled.img`
  width: 25px;
  height: 25px;
`;
