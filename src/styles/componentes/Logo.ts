import styled from 'styled-components';

const ImgLogo = styled.img`
    width: 100%;
    max-width: 250px;
    transition: all .2s ease-in-out;
    margin: 1rem 0;
    
    cursor: pointer;
    &:hover{
        opacity: 0.7;
        transform: scale(1.1);
    }
`;

export default ImgLogo;