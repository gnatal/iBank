import { useMemo } from 'react';

import currentIcon from '../../../assets/svgs/current-icon.svg';

import { 
  Container,
  TransactionsContainer,  
  TransactionsCard,
  IconContainer,
  DateContainer,
  MainContent
} from '../../../styles/componentes/Extract';

import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi';
import { BiTransferAlt } from 'react-icons/bi';

import { Conta } from '../../../types/dash-board';
import { formatMoney } from '../../../utils/formatMoney';
import { formatDate } from '../../../utils/formatDate';

interface ExtractData {
  contaBanco?: Conta,
  contaCredito?: Conta,
}

enum PlanosConta {
  R = 'Receitas',
  D = 'Despesas',
  TC = 'Transferência entre contas',
  TU = 'Transferência entre usuários'
}

const Extract: React.FC<ExtractData> = (props) => {
  const allLaunchs = useMemo(() => {
    if (props.contaBanco?.lancamentos && props.contaCredito?.lancamentos) {
      const initLaunchs = [...props.contaBanco.lancamentos, ...props.contaCredito.lancamentos];

      const orderedLauchs = initLaunchs.slice().sort((a, b) => {
          return Number(new Date(a.data)) - Number(new Date(b.data));
      }).reverse();

      return orderedLauchs;
    } else {
      return [];
    }
  }, [props.contaBanco?.lancamentos, props.contaCredito?.lancamentos]);

  const typePlans = (typePlan: string) => {
    if (typePlan === 'R') return PlanosConta.R;
    else if (typePlan === 'D') return PlanosConta.D;
    else if (typePlan === 'TC') return PlanosConta.TC;
    else return PlanosConta.TU;
  }

  const getIcon = (type: string) => {
    switch(type) {
      case 'R':
        return <GiReceiveMoney />;
      case 'D':
        return <GiPayMoney />;
      default:
        return <BiTransferAlt />;
    }
  }

  return (
    <>
    <Container>
      <TransactionsContainer>
        <header>
          <img src={currentIcon} alt="current icon" />
          <h2>Últimos lançamentos</h2>
        </header>

        {allLaunchs.length > 0 ? 
          allLaunchs.map(launch => 
            <TransactionsCard
              key={launch.id}
              type={launch.planoConta.tipoMovimento}
            >
              <MainContent>
                <IconContainer>
                  {getIcon(launch.planoConta.tipoMovimento)}
                </IconContainer>
                <div className="content">
                  <h3>{typePlans(launch.planoConta.tipoMovimento)}</h3>
                  <em className="login">{launch.descricao}</em>
                  <h2>{formatMoney(launch.valor)}</h2>
                </div>
              </MainContent>
              <DateContainer>
                <h3>{formatDate(launch.data)}</h3>
              </DateContainer>
            </TransactionsCard>
          ) : <h1>Nenhum lancamento</h1>
        }
      </TransactionsContainer>
    </Container>
    </>
  )
}

export default Extract;
