import Logo from '../Logo';

import styled from 'styled-components';

const HeaderStyled = styled.header`
  width: 100%;
  margin: 1rem 0;
  text-align:center;
`


const Header = () => {
  return (
    <HeaderStyled>
        <Logo />
    </HeaderStyled>
  )
}

export default Header;
