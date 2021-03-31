import { useState, useEffect, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import api from '../../../services/api';
import { ApplicationStore } from '../../../store';
import { set_transaction_data } from '../../../store/dashboard/actions';

import Loader from '../../Loader';
import Extract from '../Extract';
import Balance from '../Balance';

import { Contas } from '../../../types/dash-board';
import { MonthConatiner, TransactionsContainer } from '../../../styles/componentes/Dashboard/Transactions';

const Transactions: React.FC = () => {
  const [contas, setContas] = useState<Contas>();
  const [loaded, setLoaded] = useState(true);
  const [referenceDate, setReferenceDate] = useState(1);

  const user = useSelector((state: ApplicationStore) => state.user);
  const dashboard = useSelector((state: ApplicationStore) => state.dashboard);

  const dispatch = useDispatch();

  const formatDate = (date: Date) => {
    const year = date.getFullYear(),
      month = ('0' + (date.getMonth() + 1)).slice(-2),
      day = ('0' + date.getDate()).slice(-2);

    return [year, month, day].join('-');
  };

  useEffect(() => {
    if (contas)
      dispatch(set_transaction_data({ accounts: contas }));
  }, [dispatch, contas]);

  useEffect( ()=> {
    if (dashboard.transactions_data) {
      setContas(dashboard.transactions_data.accounts);
      return;
    }

    const getDashboardValues = async() => {
      try {
        setLoaded(false);

        const date = new Date();
        const dateFim = formatDate(date);
        const newDate = new Date(date.setMonth(date.getMonth() - referenceDate));
        const dateInicio = formatDate(newDate);

        const result = await api.get(`/dashboard?fim=${dateFim}&inicio=${dateInicio}&login=${user?.login}`, {
          headers: {
            Authorization: user?.token,
          }
        });
        setContas(result.data);

        setLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    getDashboardValues();
  }, [user?.login, user?.token, dashboard, referenceDate]);

  const updateReference = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (value > 0 && value <= 12)
      setReferenceDate(value);

    dispatch(set_transaction_data(undefined));
  };

  if (loaded) return (
    <TransactionsContainer>
      <Balance contaBanco={contas?.contaBanco} contaCredito={contas?.contaCredito} />

      <MonthConatiner>
        <p>Escolha a quantidade de <strong>meses</strong> para o filtro: </p>
        <input type="number" min={1} max={12} value={referenceDate} onChange={updateReference} />
      </MonthConatiner>

      <Extract contaBanco={contas?.contaBanco} contaCredito={contas?.contaCredito} />
    </TransactionsContainer>
  );
  else return <Loader />
}

export default Transactions;