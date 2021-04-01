import { ButtonHTMLAttributes } from 'react';
import ButtonStandard from '../../styles/componentes/Button';
import Loader from '../../components/Loader';

interface ButtonModalProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  loading?: boolean;
}

export const ButtonModal: React.FC<ButtonModalProps> = ({ text, loading = false, ...props }) => {
  return (
    <ButtonStandard
      {...props}
    >
      {loading ? 
        <Loader /> : 
        <span>{text}</span>
      }
    </ButtonStandard>
  )
}
