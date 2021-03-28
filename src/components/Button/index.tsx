import React, { ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons';
import ButtonStandard from '../../styles/componentes/Button';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    Icon: IconType;
}

const Button: React.FC<ButtonProps> = ({ text, Icon, ...props }) => {
    return (
        <ButtonStandard {...props} >
            <span>{ text }</span>
            <Icon size={ 21 } color="#fff" className="button-icon-posisiton" />
        </ButtonStandard>
    );
}

export default Button;