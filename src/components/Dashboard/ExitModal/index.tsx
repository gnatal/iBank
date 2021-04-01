import Modal from 'react-modal';
import { Container } from '../../../styles/componentes/ExitModal';
import { ButtonWithoutIcon } from '../../ButtonWithoutIcon';
import { motion } from 'framer-motion';

interface ExitModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onLogOut: () => void;
}

export const ExitModal = ({ isOpen, onRequestClose, onLogOut }: ExitModalProps) => {

  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >

      <Container>
        <h1>Tem certeza que deseja sair?</h1>
        <div>
          <ButtonWithoutIcon 
            text="Cancelar"
            className="modal-cancel"
            onClick={onRequestClose}
          />
          <ButtonWithoutIcon 
            text="Tenho"
            className="modal-ok"
            onClick={onLogOut}
          />
        </div>
      </Container>
      </motion.div>
    </Modal>
  )
}
