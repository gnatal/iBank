import React, { ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons';
import Loader from '../../components/Loader';
import ButtonStandard from '../../styles/componentes/Button';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
	Icon: IconType;
	loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, Icon, loading = false, ...props }) => {
	return (
		<ButtonStandard {...props} >
			{loading ? <Loader /> : <span>{text}</span>}
			{!loading ? <Icon size={21} color="#fff" className="button-icon-posisiton" /> : null}
		</ButtonStandard>
	);
}

export default Button;