import { Container, HideContainer } from '../../../styles/componentes/BalanceCard';
import { formatMoney } from '../../../utils/formatMoney';
import currentIcon from '../../../assets/svgs/current-icon.svg';
import creditIcon from '../../../assets/svgs/credit-card-icon.svg';

interface BalanceCardProps {
  firstValue: number | undefined;
  secondValue: number;
  hide: boolean;
  type: string;
}

export const BalanceCard: React.FC<BalanceCardProps> = ({
  type,
  firstValue,
  secondValue,
  hide
}) => {
  return (
    <Container>
      <div className="balance-card-header">
        <img src={type === 'banco' ? currentIcon : creditIcon} alt="current icon" />
        <h2>{type === 'banco' ? 'Conta' : 'Conta Crédito'}</h2>
      </div>

      <div className="flex-column">
        <h2>{type === 'banco' ? 'Saldo disponível' : 'Fatura atual'}</h2>
        <HideContainer 
          hide={hide}
          value={firstValue}
        >
          <div></div>
          <h3
            className={type === 'banco' ? 'saldo' : 'fatura'} 
            title={formatMoney(firstValue)}
          >
            {formatMoney(firstValue)}
          </h3>
        </HideContainer>
      </div>
      
      <div className="flex-row">
        <h2>{type === 'banco' ? 'Transações' : 'Limite disponível'}</h2>
        <HideContainer 
          hide={hide}
          value={secondValue}
        >
          <div></div>
          <h3 
            className={type === 'banco' ? 'transactions' : 'limit'} 
            title={formatMoney(secondValue)}
          >
            {formatMoney(secondValue)}
          </h3>
        </HideContainer>
      </div>
    </Container>
  )
};
