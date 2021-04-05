import { Container } from '../../styles/componentes/Tooltip';

interface TooltipProps {
  message: string;
}

const Tooltip: React.FC<TooltipProps> = ({ message, children }) => {
  return (
    <Container>
      {children}
      <span>{message}</span>
    </Container>
  );
}

export default Tooltip;