import Modal from 'react-modal';
import { toast } from 'react-toastify';
import { MdClose } from 'react-icons/md';
import { Container, TextareaContainer } from '../../../styles/componentes/AddPlanModal';
import { ChangeEvent, FormEvent, useState } from 'react';
import { ButtonModal } from '../../ButtonModal';

import { Plano } from '../../../types/dash-board'

type NewPlan = Omit<Plano, 'login'>;

interface AddPlanModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onAddPlan: (plan: NewPlan) => Promise<void>;
}


export const AddPlanModal: React.FC<AddPlanModalProps> = ({ isOpen, onRequestClose, onAddPlan }) => {
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [ isLoading, setIsLoading ] = useState(false);


  const handleSubmit = async (event: FormEvent) => {
    setIsLoading(true);
    event.preventDefault();
    
    if ( type.length === 0 || description.length === 0 ) return toast.error('Preencha todos os campos!');
    
    const data = {
      descricao: description,
      id: 0,
      padrao: true,
      tipoMovimento: type
    };
    
    await onAddPlan(data);
    setIsLoading(false);
    setType('');
    setDescription('');
  }

  const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.length <= 20)
      setDescription(event.target.value)
  }
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
    >
      <button 
        type="button" 
        onClick={onRequestClose}
        className='react-modal-close'
      >
        <MdClose size={30} color="gray" />
      </button>

      <Container onSubmit={handleSubmit}>
        <h2>Adicionar um plano</h2>

        <select onChange={e => setType(e.target.value)}>
          <option style={{ color: '#b3b3b3' }} value="">Escolha o tipo</option>
          <option value="R">Receita</option>
          <option value="D">Despesa</option>
          <option value="TC">Transferência entre contas</option>
          <option value="TU">Transferência entre usúarios</option>
        </select>

        <TextareaContainer>
          <textarea 
            placeholder="Descrição"
            value={ description }
            onChange={ handleDescriptionChange }
          />

          <label>
            Restante: { 20 - description.length }
          </label>
        </TextareaContainer>

        <ButtonModal 
          type="submit" 
          text="Adicionar" 
          loading={isLoading}
        />
      </Container>
    </Modal>
  )
};
