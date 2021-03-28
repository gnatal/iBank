import React, { useState, useEffect } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useSelector } from 'react-redux';

import currentIcon from '../../../assets/svgs/current-icon.svg';
import creditIcon from '../../../assets/svgs/credit-card-icon.svg';
import { Conta } from '../../../types/dash-board';
import { ApplicationStore } from '../../../store';
import { formatMoney } from '../../../utils/formatMoney';


// interface Total {
//   banco: number,
//   credito: number,
// }

interface AccountProps {
  contaBanco?: Conta,
  contaCredito?: Conta,
}

const Balance: React.FC<AccountProps> = (props) => {
  const [contaBanco, setContaBanco] = useState<Conta>();
  const [contaCredito, setContaCredito] = useState<Conta>();
  const [totalBanco, setTotalBanco] = useState(0);
  const [totalCredito, setTotalCredito] = useState(0);
  const [user, setUser] = useState('');
  const [hide, setHide] = useState(false);
  const store = useSelector((state: ApplicationStore) => state.user);
  // const [totalTransactions, setTotalTransactions] = useState<Total>({
  //   banco: 0,
  //   credito: 0,
  // });

  useEffect(() => {
    if (store)
      setUser(store.name);
  }, [store])

  useEffect(() => {
    setContaBanco(props.contaBanco);
    setContaCredito(props.contaCredito);

    if (contaBanco) {
      setTotalBanco(
        contaBanco.lancamentos.reduce((acc, lancamento) => {
          acc += lancamento.valor;
          return acc;
        }, 0)
      )
    }
    if (contaCredito) {
      setTotalCredito(
        contaCredito.lancamentos.reduce((acc, lancamento) => {
          acc += lancamento.valor;
          return acc;
        }, 0)
      )
    }

    // setTotalTransactions({
    //   banco: 0,
    //   credito: 0,
    // });
    // contaBanco?.lancamentos.forEach(lancamento => {
    //   setTotalTransactions((previewState) => ({
    //     ...previewState,
    //     banco: previewState.banco += lancamento.valor
    //   }))
    // });


    // contaCredito?.lancamentos.forEach(lancamento => {
    //   setTotalTransactions((previewState) => ({
    //     ...previewState,
    //     credito: previewState.credito += lancamento.valor
    //   })
    //   );
    // })
  }, [contaBanco, contaCredito, props.contaBanco, props.contaCredito])

  const hideOrShowInformations = () => {
    setHide(!hide);
  }

  return (
    <>
      <div>
        <div>
          <p>Olá <strong>{user.split(' ')[0]}</strong>, seja bem-vindo(a)!</p>
          <div>
            {!hide ?
              <FiEye size={35} onClick={() => hideOrShowInformations()} /> :
              <FiEyeOff size={35} onClick={() => hideOrShowInformations()} />}
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className='title'>
            <img src={currentIcon} alt="current icon" />
            <p>Conta</p>
          </div>
          <p>Saldo disponivel</p>
          <h3 className={`value acccount ${hide ? 'hide' : ''}`} title={contaBanco && formatMoney(contaBanco.saldo)}>
            {contaBanco && formatMoney(contaBanco.saldo)}
          </h3>
          <div>
            <p>Transações</p>
            <h3 className={hide ? 'hide' : ''} title={formatMoney(totalBanco)}>
              {formatMoney(totalBanco)}
            </h3>
          </div>

        </div>
        <div>
          {/*  */}
          <div className='title'>
            <img src={creditIcon} alt="current icon" />
            <p>Conta Crédito</p>
          </div>
          <p>Fatura atual</p>
          <h3 className={`value credit ${hide ? 'hide' : ''}`} title={contaCredito && formatMoney(contaCredito.saldo)}>
            {contaCredito && formatMoney(contaCredito.saldo)}
          </h3>
          <div>
            <p>Limite Disponivel</p>
            <h3 className={hide ? 'hide' : ''} title={formatMoney(totalCredito)}>
              {formatMoney(totalCredito)}
            </h3>
          </div>
        </div>
      </div>
    </>

  );
}

export default Balance;