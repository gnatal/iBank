import React from 'react';
import { useHistory } from 'react-router-dom';
import ImgLogoWhite from '../../styles/componentes/LogoWhite';
import LogoSRC from '../../assets/ibank-logo-white.png';

const LogoWhite: React.FC = () => {
    const history = useHistory();

    return (
        <ImgLogoWhite onClick={() => history.push('/')} src={LogoSRC} alt="Logo principal" />
    );
}

export default LogoWhite;