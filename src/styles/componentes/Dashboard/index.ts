import styled from 'styled-components'

export const BottomNavigationBox = styled.div`
  @media (min-width: 600px) {
    display: none;
  }
  width: 100vw;
  height: 10vh;
  position: fixed;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
  padding: 5px 0;
  z-index: 100;
  /* border-top: 1vh solid #573b61; */
`

export const TabsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

export const Tab = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: #222;
`

export const TabName = styled.span`
  font-size: 0.8em;
  text-align: center;
  color: #222;
  text-transform: capitalize;
`

export const IconImage = styled.img`
  width: 25px;
  height: 25px;
`
