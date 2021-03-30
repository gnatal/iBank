import React, { useState, useEffect, ChangeEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import api from '../../../services/api';
import { ApplicationStore } from '../../../store';
import { set_transaction_data } from '../../../store/dashboard/actions';

import Loader from '../../Loader';
import Extract from '../Extract';
import Balance from '../Balance';

import { Contas } from '../../../types/dash-board';

const Transactions: React.FC = () => {
<<<<<<< HEAD

  const [contas, setContas] = useState<Contas>();
  const [loaded, setLoaded] = useState(true);
  const [referenceDate, setReferenceDate] = useState(1);
=======
  const [ contas, setContas ] = useState<Contas>();
  const [ loaded, setLoaded ] = useState(true);
  const [ referenceDate, setReferenceDate ] = useState(1);
>>>>>>> 1f8d9abd69a879b49d86c1b3a1f5c23c630c9187

  const user = useSelector((state: ApplicationStore) => state.user);
  const dashboard = useSelector((state: ApplicationStore) => state.dashboard);

  const dispatch = useDispatch();

<<<<<<< HEAD
  const formatDate = useCallback((date: string) => {
    setLoaded(false);

    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;
=======
  const formatDate = useCallback((date: Date) => {
    const year = date.getFullYear(),
          month = ('0' + (date.getMonth() + 1)).slice(-2),
          day = ('0' + date.getDate()).slice(-2);
>>>>>>> 1f8d9abd69a879b49d86c1b3a1f5c23c630c9187

    return [year, month, day].join('-');
  },[]);

  useEffect(() => {
    if (contas)
      dispatch(set_transaction_data({ accounts: contas }));
  }, [dispatch, contas]);

<<<<<<< HEAD
  useEffect(() => {
    if (dashboard.transactions_data) {
=======
  useEffect( ()=> {
    if ( dashboard.transactions_data) {
>>>>>>> 1f8d9abd69a879b49d86c1b3a1f5c23c630c9187
      setContas(dashboard.transactions_data.accounts);
      return;
    }
<<<<<<< HEAD

    const getDashboardValues = async () => {
=======
    console.log('api fetch')
    const getDashboardValues = async() => {
>>>>>>> 1f8d9abd69a879b49d86c1b3a1f5c23c630c9187
      try {
        setLoaded(false);

        const date = new Date();
<<<<<<< HEAD
        const newD = new Date();
        const newDate = new Date(date.setMonth(date.getMonth() - referenceDate));
        const dateFormated = (newD.getFullYear() + "-" + ((newD.getMonth() + 1)) + "-" + (newD.getDate()));
        const newDateFormated = (newDate.getFullYear() + "-" + ((newDate.getMonth() + 1)) + "-" + (newDate.getDate()));
        const result = await api.get(`/dashboard?fim=${formatDate(dateFormated)}&inicio=${formatDate(newDateFormated)}&login=${user?.login}`, {
=======
        const dateFim = formatDate(date);
        const newDate = new Date(date.setMonth(date.getMonth()-referenceDate));
        const dateInicio = formatDate(newDate);

        const result = await api.get(`/dashboard?fim=${dateFim}&inicio=${dateInicio}&login=${user?.login}`, {
>>>>>>> 1f8d9abd69a879b49d86c1b3a1f5c23c630c9187
          headers: {
            Authorization: user?.token,
          }
        });
        setContas(result.data);

        setLoaded(true);
<<<<<<< HEAD

=======
>>>>>>> 1f8d9abd69a879b49d86c1b3a1f5c23c630c9187
      } catch (err) {
        console.log(err);
      }
    };

    getDashboardValues();
<<<<<<< HEAD
  }, [referenceDate, user?.login, user?.token, formatDate, dashboard]);
=======
  }, [user?.login, user?.token, dashboard, formatDate, referenceDate]);
>>>>>>> 1f8d9abd69a879b49d86c1b3a1f5c23c630c9187

  const updateReference = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (value > 0 && value <= 12)
      setReferenceDate(value);
<<<<<<< HEAD
  }

  if (loaded) return (
    <div>
      {/* Componente para página principal */}

=======

    dispatch(set_transaction_data(undefined));
  } 

  if ( loaded ) return (
    <div>   
>>>>>>> 1f8d9abd69a879b49d86c1b3a1f5c23c630c9187
      <Balance contaBanco={contas?.contaBanco} contaCredito={contas?.contaCredito} />

      <div>
        <p>Escolhe a quantidade de <strong>meses</strong> para o filtro: </p>
        <input type="number" min={1} max={12} value={referenceDate} onChange={updateReference} />
      </div>

      <Extract contaBanco={contas?.contaBanco} contaCredito={contas?.contaCredito} />
      {/* <FiArrowLeft onClick={() => {props.func('')}}/> */}
    </div>
  );
<<<<<<< HEAD
  else return <Loader style={{ border: '4px solid #f0f0f0' }} />

=======
  else return <Loader />
>>>>>>> 1f8d9abd69a879b49d86c1b3a1f5c23c630c9187
}

export default Transactions;