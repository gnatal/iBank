import { FaArrowRight } from 'react-icons/fa';
import Modal from 'react-modal';
import { Container } from '../../styles/componentes/ExitModal';
import Button from '../Button';

interface ExitModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const ExitModal = ({isOpen, onRequestClose}: ExitModalProps) => {
  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >

      <Container>
        <h1>Tem certeza que deseja sair?</h1>
        <div>
          <Button 
            text="Cancelar"
            Icon={FaArrowRight}
          />
          <Button 
            text="Tenho"
            Icon={FaArrowRight}
          />
        </div>
      </Container>

    </Modal>
  )
}
