import Loader from 'react-loader-spinner';
import { LoaderContainer } from '../../styles/componentes/PageLoader';

export const PageLoader = () => {
  return (
    <LoaderContainer>
      <Loader
        color="#FFF"
        type="Audio"
        height={250}
        width={250}
      />
    </LoaderContainer>
  );
};
