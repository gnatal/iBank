import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import { ApplicationStore } from '../../../store';

import { BalanceCard } from '../BalanceCard';

import { Container, CardsContainer } from '../../../styles/componentes/Balance';

import { Conta } from '../../../types/dash-board';

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
  const [hide, setHide] = useState(() => {
    const getHidden = (localStorage.getItem('@balance-hidden'));
    if (!getHidden) return false;
    const hidden = JSON.parse(getHidden);
    return hidden.status;
  });

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
  }, [contaBanco, contaCredito, props.contaBanco, props.contaCredito]);

  const handleHideBalance = () => {
    setHide(!hide);
    const item = {
      status: !hide,
    }
    localStorage.setItem('@balance-hidden', JSON.stringify(item));
  }

  return (
    <Container>
      <header>
        <h1>Olá <strong>{user.split(' ')[0]}</strong>, seja bem-vindo(a)!</h1>
        <button>
          {!hide ?
            <FiEye size={35} onClick={handleHideBalance} /> :
            <FiEyeOff size={35} onClick={handleHideBalance} />
          }
        </button>
      </header>
      
      <CardsContainer>
        <BalanceCard 
          firstValue={contaBanco?.saldo}
          secondValue={totalBanco}
          hide={hide}
          type="banco"
        />

        <BalanceCard 
          firstValue={contaCredito?.saldo}
          secondValue={totalCredito}
          hide={hide}
          type="credito"
        />
      </CardsContainer>

    </Container>
  );
}

export default Balance;