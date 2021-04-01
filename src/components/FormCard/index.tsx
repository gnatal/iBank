import { ReactNode } from 'react'
import { FormContainer } from '../../styles/componentes/FormCard'

interface FormCardProps {
  children: ReactNode
}

export const FormCard: React.FC<FormCardProps> = ({ children }) => {
  return (
    <FormContainer>
      { children }
    </FormContainer>
  )
}
