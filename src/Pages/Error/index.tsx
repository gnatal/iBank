import { useCallback } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { FaRegSadTear } from 'react-icons/fa';
import { useHistory } from 'react-router';

import Button from '../../components/Button';

import { Container } from '../../styles/pages/Error';

const Error: React.FC = () => {
  const history = useHistory();

  const handleClick = useCallback(() => {
    history.goBack();
  },[history]);

  return (
    <Container>
      <div>
        <FaRegSadTear className="icon" size={102} />
        <h3>Oops, algo deu errado! Confime seus dados e tente novamente!</h3>
        <Button
          onClick={handleClick}
          text="Voltar"
          Icon={FaArrowLeft}
        />
      </div>
    </Container>
  );
}

export default Error;