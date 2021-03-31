import { ButtonHTMLAttributes } from 'react';
import ButtonStandard from '../../styles/componentes/Button';

interface ButtonModalProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const ButtonModal = ({ text, ...props }: ButtonModalProps) => {
  return (
    <ButtonStandard
      {...props}
    >
      {text}
    </ButtonStandard>
  )
}
