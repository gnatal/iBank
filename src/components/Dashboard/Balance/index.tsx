import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import currentIcon from '../../../assets/svgs/current-icon.svg';
import creditIcon from '../../../assets/svgs/credit-card-icon.svg';
import { Conta } from '../../../types/dash-board';
import { ApplicationStore } from '../../../store';
import { formatMoney } from '../../../utils/formatMoney';

import { Container, HideContainer } from '../../../styles/componentes/Dashboard/Balance';

interface AccountProps {
  contaBanco?: Conta,
  contaCredito?: Conta,
}

const Balance: React.FC<AccountProps> = (props) => {
  const store = useSelector((state: ApplicationStore) => state.user);

  const [contaBanco, setContaBanco] = useState<Conta>();
  const [contaCredito, setContaCredito] = useState<Conta>();
  const [totalBanco, setTotalBanco] = useState(0);
  const [totalCredito, setTotalCredito] = useState(0);
  const [user, setUser] = useState('');
  const [hide, setHide] = useState(false);

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
  }, [contaBanco, contaCredito, props.contaBanco, props.contaCredito])

  return (
    <Container>
      <header>
        <h1>Olá <strong>{user.split(' ')[0]}</strong>, seja bem-vindo(a)!</h1>
        {!hide ?
          <FiEye size={35} onClick={() => setHide(!hide)} /> :
          <FiEyeOff size={35} onClick={() => setHide(!hide)} />
        }
      </header>

      <div className='accounts-container'>
        <div className='account-card'>
          <div className='title'>
            <img src={currentIcon} alt="current icon" />
            <h2>Conta</h2>
          </div>
          <div>
            <p>Saldo disponivel</p>
            <HideContainer hide={hide}>
              <div></div>
              <h3 title={contaBanco && formatMoney(contaBanco.saldo)}>
                {contaBanco && formatMoney(contaBanco.saldo)}
              </h3>
            </HideContainer>
          </div>
          <div>
            <p>Transações</p>
            <HideContainer hide={hide}>
              <div></div>
              <h3 title={formatMoney(totalBanco)}>
                {formatMoney(totalBanco)}
              </h3>
            </HideContainer>
          </div>
        </div>

        <div  className='account-card'>
          <div className='title'>
            <img src={creditIcon} alt="credit icon" />
            <h2>Conta Crédito</h2>
          </div>
          <div>
            <p>Fatura atual</p>
            <HideContainer hide={hide}>
              <div></div>
              <h3 title={contaCredito && formatMoney(contaCredito.saldo)}>
                {contaCredito && formatMoney(contaCredito.saldo)}
              </h3>
            </HideContainer>
          </div>
          <div>
            <p>Limite Disponivel</p>
            <HideContainer hide={hide}>
              <div></div>
              <h3 title={formatMoney(totalCredito)}>
                {formatMoney(totalCredito)}
              </h3>
            </HideContainer>
          </div>
        </div>

      </div>
    </Container>
  );
}

export default Balance;