import { ReactNode } from 'react'
import { Container, FormContainer } from '../../styles/componentes/FormCard'

interface FormCardProps {
  children: ReactNode
}

export const FormCard: React.FC<FormCardProps> = ({ children }) => {
  return (
    <Container>
      <FormContainer>
        { children }
      </FormContainer>
    </Container>
  )
}
