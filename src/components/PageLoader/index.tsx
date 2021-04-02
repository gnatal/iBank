import Loader from 'react-loader-spinner';
import { LoaderContainer } from '../../styles/componentes/PageLoader';

export const PageLoader = () => {
  return (
    <LoaderContainer>
      <Loader
        color="#50c878"
        type="Audio"
        height={250}
        width={250}
      />
    </LoaderContainer>
  );
};
