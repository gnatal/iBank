import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { MdAdd  } from 'react-icons/md';

import api from '../../../services/api';
import { ApplicationStore } from '../../../store';
import { set_plans_data } from '../../../store/dashboard/actions';

import { Plano } from '../../../types/dash-board';
import { AddPlanModal } from '../AddPlanModal';
import { CardsContainer, PlanCard } from '../../../styles/componentes/Plans';
import { PageLoader } from '../../PageLoader';

type NewPlan = Omit<Plano, 'login'>;

enum PlanosConta {
  R = 'Receitas',
  D = 'Despesas',
  TC = 'Transferência entre contas',
  TU = 'Transferência entre usuários'
}

const Plans: React.FC = () => {
  const store = useSelector( (state: ApplicationStore) => state.user );
  const dashboard = useSelector((store: ApplicationStore) => store.dashboard);

  const [ plans, setPlans ] = useState<Plano[]>();
  const [ isLoading, setIsLoading ] = useState(false);

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
      setIsLoading(true);
      const result = await api.get(`/lancamentos/planos-conta?login=${store?.login}`, {
        headers: {
          Authorization: store?.token,
        }
      });
      setPlans(result.data);
      setIsLoading(false);
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

  const typePlans = (typePlan: string) => {
    if (typePlan === 'R') return PlanosConta.R;
    else if (typePlan === 'D') return PlanosConta.D;
    else if (typePlan === 'TC') return PlanosConta.TC;
    else return PlanosConta.TU;
  }

  return (
    <>
    {isLoading ? 
      <PageLoader /> :
      <>
        <CardsContainer>
          <>
          {plans?.map( (plan, index) => 
            <PlanCard key={ index }>
              <h2>{plan.descricao}</h2>
              <em>{plan.login}</em>
              <h3>
                {typePlans(plan.tipoMovimento)}
              </h3>
            </PlanCard>
          )}
          <PlanCard onClick={handleOpenAddPlanModal} >
            <MdAdd className="icon" size={ 50 } />
          </PlanCard>
          </>
        </CardsContainer>
      </>
    }
      <AddPlanModal
        isOpen={isAddPlanModalOpen}
        onRequestClose={handleCloseAddPlanModal}
        onAddPlan={handleAddPlan}
      />
    </> 
  );
}

export default Plans;