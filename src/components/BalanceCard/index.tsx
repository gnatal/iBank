import { Container, HideContainer } from '../../styles/componentes/BalanceCard';
import { formatMoney } from '../../utils/formatMoney';
import currentIcon from '../../assets/svgs/current-icon.svg';
import creditIcon from '../../assets/svgs/credit-card-icon.svg';

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

      <div>
        <p>{type === 'banco' ? 'Saldo disponível' : 'Fatura atual'}</p>
        <HideContainer 
          hide={hide}
          type={type}
        >
          <div></div>
          <h3 title={formatMoney(firstValue)}>
            {formatMoney(firstValue)}
          </h3>
        </HideContainer>
      </div>
      
      <div>
        <p>{type === 'banco' ? 'Transações' : 'Limite disponível'}</p>
        <HideContainer 
          hide={hide}
          type={type}
        >
          <div></div>
          <h3 title={formatMoney(secondValue)}>
            {formatMoney(secondValue)}
          </h3>
        </HideContainer>
      </div>
    </Container>
  )
};
