import React from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import animationData from '../../assets/animation/credit-card.json';

const LoadDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CreditCard: React.FC = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <LoadDiv>
            <Lottie
                options={defaultOptions}
                width={250}
            />
        </LoadDiv>
    );
}

export default CreditCard;