import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { MdAdd  } from 'react-icons/md';

import api from '../../../services/api';
import { ApplicationStore } from '../../../store';
import { set_plans_data } from '../../../store/dashboard/actions';
import Loader from '../../Loader';

import { Plano } from '../../../types/dash-board';
import { AddPlanModal } from '../AddPlanModal';
import { AddPlanCard, Container, PlanCard } from '../../../styles/componentes/Dashboard/Plans';

type NewPlan = Omit<Plano, 'login'>;

const Plans: React.FC = () => {
  const store = useSelector( (state: ApplicationStore) => state.user );
  const dashboard = useSelector((store: ApplicationStore) => store.dashboard);

  const [ plans, setPlans ] = useState<Plano[]>();
  const [ loaded, setLoaded ] = useState(true);

  const [isAddPlanModalOpen, setIsAddPlanModalOpen] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();


  useEffect(() => {
    if (plans)
      dispatch(set_plans_data(plans))
  },[dispatch, plans]);

  useEffect(() => {
    if ( dashboard.plans_data ) {
      setPlans(dashboard.plans_data);
      return;
    }

    const getAccountPlans = async () => {
      setLoaded(false);
      const result = await api.get(`/lancamentos/planos-conta?login=${store?.login}`, {
        headers: {
          Authorization: store?.token,
        }
      });
      setPlans(result.data);
      setLoaded(true);
    }

    getAccountPlans();
  }, [store, dashboard]);

  const handleOpenAddPlanModal = () => {
    setIsAddPlanModalOpen(true);
  }
  const handleCloseAddPlanModal = () => {
    setIsAddPlanModalOpen(false);
  }

  const handleAddPlan = async (plan: NewPlan) => {
    if (store?.login) {
      const newPlan: Plano = {
        ...plan,
        login: store.login
      }

      await api.post('lancamentos/planos-conta', newPlan, { 
        headers: {
        Authorization: store?.token,
      }})
      .then( response => {
        if ( response.status === 200 ) {
          setPlans((previewPlans) => {
            if ( previewPlans ) {
              toast.success('Plano adicionado com sucesso!');
              return [ ...previewPlans, newPlan ];
            }
          });
          handleCloseAddPlanModal();
        } else {
          toast.error('Ocorreu algum erro!');
          history.push('/error');
        }
      });
    }
  }
  

  // if (loaded) return (
  return (
    <>
      <AddPlanModal
        isOpen={isAddPlanModalOpen}
        onRequestClose={handleCloseAddPlanModal}
        onAddPlan={handleAddPlan}
      />
      
      <Container>
        <>
        {plans?.map( (plan, index) => 
          <PlanCard key={ index }>
            <p className="title-card">{plan.descricao}</p>
            <p>{plan.login}</p>
            <p className="type-movement">
              Movimentação tipo: <span>{plan.tipoMovimento}</span>
            </p>
          </PlanCard>
        )}
        </>

        {plans && (
          <AddPlanCard
            className="addCard"
            onClick={handleOpenAddPlanModal}
          >
            <MdAdd className="icon" size={ 50 } />
          </AddPlanCard>
        )}

      </Container>
    </>
  );

  // else return <Loader style={{ border: 'solid #f0f0f0 4px' }} />
}


// div add Plans

// interface AddPlansModalProps extends HTMLAttributes<HTMLDivElement> {
//   setPlans: Dispatch<SetStateAction<Plano[] | undefined>>;
//   closeModal: () => void;
//   children?: React.ReactNode;
// }

// const AddPlansModal: React.FC<AddPlansModalProps> = ({ closeModal, setPlans, ...props }) => {

//     const history = useHistory();

//     const { token, login } = useSelector((store: ApplicationStore) => store.user as UserData);

//     const [ type, setType ] = useState('');
//     const [ description, setDescription ] = useState('');

//     const handleChangeDescription = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
//       if ( e.target.value.length <= 20 ) setDescription(e.target.value);
//     }, []);

//     const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
//       e.preventDefault();

//       const filteredType = type.trim();
//       const filteredDescription = description.trim();

//       // Validação
//       if ( filteredType.length === 0 || filteredDescription.length === 0 ) return toast.error('Preencha todos os campos!');;

//       const data = {
//         descricao: filteredDescription,
//         id: 0,
//         login,
//         padrao: true,
//         tipoMovimento: filteredType
//       }

//       api.post('lancamentos/planos-conta', data, { headers: {
//         Authorization: token
//       }}).then( response => {
//         if ( response.status === 200 ) {
//           setPlans((previewPlans) =>{
//             if ( previewPlans ) {
//               toast.success('Plano adicionado com sucesso!');
//               return [ ...previewPlans, data ];
//             }
//           });
//           closeModal();
//         } else {
//           toast.error('Ocorreu algum erro!');
//           history.push('/error');
//         }

//       });
//     }, [token, type, login, description, setPlans, closeModal, history]);

//     return (
//         <div
//           {...props}
//         >
//           <div>
//             <MdClose onClick={ closeModal } className="icon" size={30} color="gray" />

//             <h1> 
//               <MdEventNote className="icon" />
//               Adicionar um plano
//             </h1>
//             <form onSubmit={ handleSubmit } >
//               <select
//                 onChange={ e => setType(e.target.value) }
//               >
//                 <option style={{ color: '#b3b3b3' }} value="">Escolha o tipo</option>
//                 <option value="R">Receita</option>
//                 <option value="D">Despesa</option>
//                 <option value="TC">Transferência entre contas</option>
//                 <option value="TU">Transferência entre usúarios</option>
//               </select>
//               <div>
//                 <textarea 
//                   placeholder="Descrição"
//                   value={ description }
//                   onChange={ handleChangeDescription }
//                 />

//                 <label htmlFor="">
//                   Restante: { 20 - description.length }
//                 </label>
//               </div>

//               <button
//                 type='submit'
//               >
//                 <MdAdd size={18} />
//                 Adicionar
//               </button>
//             </form>
//           </div>
//         </div>
//     );
// }

export default Plans;