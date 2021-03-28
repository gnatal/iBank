import React from 'react';
import { useHistory } from 'react-router-dom';
import ImgLogo from '../../styles/componentes/Logo';

import LogoSRC from '../../assets/ibank-logo-green.png';

const Logo: React.FC = () => {
    const history = useHistory();

    return (
        <ImgLogo onClick={ () => history.push('/') } src={ LogoSRC } alt="Logo principal" />
    );
}

export default Logo;