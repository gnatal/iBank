import Lottie from 'react-lottie';
import { LoaderContainer } from '../../styles/componentes/PageLoader';

interface AnimationProps {
  data: Object;
  direction: boolean;
}

export const Animation: React.FC<AnimationProps> = ({ data, direction }) => {
  const options = {
    loop: 1,
    autoplay: true, 
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    },
  };

  return (
    <LoaderContainer>
      {direction ?
        <Lottie
          width={250}
          height={250}
          direction={1}
          options={options}
        /> :
        <Lottie
          width={250}
          height={250}
          direction={-1}
          options={options}
        />
      }
    </LoaderContainer>
  )
}
