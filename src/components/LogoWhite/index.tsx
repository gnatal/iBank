import React from 'react';
import ImgLogoWhite from '../../styles/componentes/LogoWhite';
import LogoSRC from '../../assets/ibank-logo-white.png';

const LogoWhite: React.FC = () => {

  return (
    <ImgLogoWhite src={LogoSRC} alt="Logo principal" />
  );
}

export default LogoWhite;