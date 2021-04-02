import { useMemo } from 'react';

import currentIcon from '../../../assets/svgs/current-icon.svg';
import creditCardsIcon from '../../../assets/svgs/credit-cards-icon.svg';

import { FormCard } from '../../FormCardBackground';
// import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { 
  TitleBox, 
  TransactionBox, 
  CardStyles, 
  Container,
  TransactionsContainer,  
  TransactionsCard,
  IconContainer
} from '../../../styles/componentes/Extract';

import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi';
import { GrTransaction } from 'react-icons/gr';
import { BiTransferAlt } from 'react-icons/bi';

import { Conta } from '../../../types/dash-board';
import { formatMoney } from '../../../utils/formatMoney';

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

        {allLaunchs.map(launch => 
          <TransactionsCard
            key={launch.id}
            type={launch.planoConta.tipoMovimento}
          >
            <IconContainer>
              {getIcon(launch.planoConta.tipoMovimento)}
            </IconContainer>
            <div className="content">
              <h3>{typePlans(launch.planoConta.tipoMovimento)}</h3>
              <em className="login">{launch.descricao}</em>
              <h2>{formatMoney(launch.valor)}</h2>
            </div>
          </TransactionsCard>
        )}
      </TransactionsContainer>
    </Container>

      {/* <CardStyles>
        <FormCard className="transactionsbox">
          <TitleBox >
            <img src={currentIcon} alt="current icon" />
            <p className="title">Últimos lançamentos</p>
          </TitleBox>
          {allLaunchs.length === 0 && 'Nenhum lancamento'}
          
          <Container >
            {allLaunchs && allLaunchs.map((launch, index) => {
              return (
                <TransactionBox key={index}  >
                  <Row className={"row-active"}>
                    <Col style={{ margin: "2px" }}>{typePlans(launch.planoConta.tipoMovimento)}</Col>
                  </Row>
                  <Row style={{ margin: "2px", fontStyle: "italic" }}>
                    <Col style={{ margin: "2px" }}>{launch.descricao}</Col>
                  </Row>
                  <Row className={"row-active"}>
                    <Col style={{ margin: "2px" }}>{launch.valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Col>
                  </Row>
                  <Row style={{ margin: "2px" }}>
                    <Col style={{ margin: "2px" }}>{launch.data}</Col>
                  </Row>
                </TransactionBox>
              )
            })}
          </Container>

        </FormCard>
        <div className={"bottom-spaces"}>

        </div>
      </CardStyles> */}
    </>
  )
}

export default Extract;
